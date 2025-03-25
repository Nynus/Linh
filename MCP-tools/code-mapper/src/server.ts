import express from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import { promisify } from 'util';
import { exec } from 'child_process';
// @ts-ignore
import madge from 'madge';

const app = express();
const PORT = process.env.PORT || 1234;
const execAsync = promisify(exec);

// Model - xử lý dữ liệu
class CodeMapperModel {
  private projectPath: string = '';

  setProjectPath(path: string): void {
    this.projectPath = path;
  }

  getProjectPath(): string {
    return this.projectPath;
  }

  async getDependencyGraph(targetPath?: string): Promise<any> {
    try {
      const path = targetPath || this.projectPath;
      if (!path) {
        throw new Error('Project path is not set');
      }
      
      // Sửa lỗi: Thay vì sử dụng RegExp đơn lẻ, sử dụng mảng các RegExp hoặc string
      // Sử dụng "any" cho excludeRegExp để tránh lỗi TypeScript
      const excludeRegExp: any = [/node_modules/, /dist/, /build/, /\.git/];
      
      const result = await madge(path, {
        excludeRegExp,
        fileExtensions: ['js', 'jsx', 'ts', 'tsx', 'vue'],
      });
      
      const dependencies = result.obj();
      const circularDependencies = await result.circular();
      
      return {
        dependencies,
        circularDependencies,
        orphans: await result.orphans(),
        warnings: await result.warnings(),
      };
    } catch (error) {
      console.error('Error generating dependency graph:', error);
      throw error;
    }
  }

  async findOrphans(targetPath?: string): Promise<string[]> {
    const graph = await this.getDependencyGraph(targetPath);
    return graph.orphans;
  }

  async findCircularDependencies(targetPath?: string): Promise<string[][]> {
    const graph = await this.getDependencyGraph(targetPath);
    return graph.circularDependencies;
  }
}

// Controller - xử lý logic và kết nối View với Model
class CodeMapperController {
  private model: CodeMapperModel;

  constructor(model: CodeMapperModel) {
    this.model = model;
  }

  async handleGetDependencyGraph(req: express.Request, res: express.Response): Promise<void> {
    try {
      const { path } = req.query;
      
      if (path && typeof path === 'string') {
        // Xử lý đường dẫn đúng cách
        const cleanPath = path.replace(/^"|"$/g, '').trim();
        console.log(`Analyzing path: ${cleanPath}`);
        
        // Kiểm tra xem đường dẫn có tồn tại không
        try {
          if (!fs.existsSync(cleanPath)) {
            console.error(`Path does not exist: ${cleanPath}`);
            res.status(400).json({ error: `Path does not exist: ${cleanPath}` });
            return;
          }
        } catch (err) {
          console.error(`Error checking path: ${err}`);
          res.status(400).json({ error: `Invalid path: ${cleanPath}` });
          return;
        }
        
        this.model.setProjectPath(cleanPath);
      }
      
      const graphData = await this.model.getDependencyGraph();
      const formattedData = this.formatGraphForD3(graphData);
      
      res.json(formattedData);
    } catch (error) {
      console.error('Error in handleGetDependencyGraph:', error);
      res.status(500).json({ error: 'Failed to generate dependency graph' });
    }
  }

  async handleFindOrphans(req: express.Request, res: express.Response): Promise<void> {
    try {
      const { path } = req.query;
      let cleanPath: string | undefined;
      
      if (path && typeof path === 'string') {
        cleanPath = path.replace(/^"|"$/g, '').trim();
      }
      
      const orphans = await this.model.findOrphans(cleanPath);
      res.json({ orphans });
    } catch (error) {
      console.error('Error in handleFindOrphans:', error);
      res.status(500).json({ error: 'Failed to find orphans' });
    }
  }

  async handleFindCircularDependencies(req: express.Request, res: express.Response): Promise<void> {
    try {
      const { path } = req.query;
      let cleanPath: string | undefined;
      
      if (path && typeof path === 'string') {
        cleanPath = path.replace(/^"|"$/g, '').trim();
      }
      
      const circular = await this.model.findCircularDependencies(cleanPath);
      res.json({ circular });
    } catch (error) {
      console.error('Error in handleFindCircularDependencies:', error);
      res.status(500).json({ error: 'Failed to find circular dependencies' });
    }
  }

  private formatGraphForD3(graphData: any): any {
    const { dependencies, circularDependencies, orphans } = graphData;
    
    // Format D3 force-directed graph data
    const nodes: any[] = [];
    const links: any[] = [];
    const nodeMap = new Map();
    
    // Add all files as nodes
    Object.keys(dependencies).forEach((file, index) => {
      const isOrphan = orphans.includes(file);
      const inCircular = circularDependencies.some((cycle: string[]) => cycle.includes(file));
      
      nodes.push({
        id: file,
        group: inCircular ? 2 : isOrphan ? 3 : 1,
        label: path.basename(file)
      });
      
      nodeMap.set(file, index);
    });
    
    // Add dependencies as links
    Object.entries(dependencies).forEach(([file, deps]: [string, any]) => {
      if (Array.isArray(deps)) {
        deps.forEach(dep => {
          // Check if the dep exists in the nodes (handles external deps better)
          if (nodeMap.has(dep)) {
            const isCircular = circularDependencies.some(
              (cycle: string[]) => cycle.includes(file) && cycle.includes(dep)
            );
            
            links.push({
              source: file,
              target: dep,
              value: 1,
              type: isCircular ? 'circular' : 'normal'
            });
          }
        });
      }
    });
    
    return { nodes, links, orphans, circularDependencies };
  }
}

// Setup middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Initialize Model and Controller
const codeMapperModel = new CodeMapperModel();
const codeMapperController = new CodeMapperController(codeMapperModel);

// API routes
app.get('/api/dependency-graph', (req, res) => codeMapperController.handleGetDependencyGraph(req, res));
app.get('/api/orphans', (req, res) => codeMapperController.handleFindOrphans(req, res));
app.get('/api/circular', (req, res) => codeMapperController.handleFindCircularDependencies(req, res));

// Serve frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
}); 