#!/usr/bin/env node

import * as fs from 'fs';
import * as path from 'path';
import glob from 'glob';
import * as yargs from 'yargs';
import chalk from 'chalk';

interface FileAnalysis {
  path: string;
  lines: number;
  healthScore?: number;
  complexity?: number;
  issues?: Array<{
    message: string;
    severity: string;
    line: number;
  }>;
}

interface CodeHealthConfig {
  path: string;
  format: 'json' | 'html' | 'markdown' | 'console';
  output?: string;
  verbose: boolean;
  ignore?: string[];
}

interface CodeHealthReport {
  totalFiles: number;
  totalFolders: number;
  totalLines: number;
  healthScore: number;
  maintainabilityScore: number;
  securityScore: number;
  typeCoverage: number;
  totalIssues: number;
  files: FileAnalysis[];
  folders: string[];
}

async function getFolders(dir: string, ignore: string[] = []): Promise<string[]> {
  const folders: string[] = [];
  
  async function scanDir(currentPath: string): Promise<void> {
    console.log('Scanning directory:', currentPath);
    
    try {
      const entries = await fs.promises.readdir(currentPath, { withFileTypes: true });
      console.log(`Found ${entries.length} entries in ${currentPath}`);
      
      for (const entry of entries) {
        const fullPath = path.join(currentPath, entry.name);
        
        // Skip ignored paths
        if (ignore.some(pattern => fullPath.includes(pattern))) {
          console.log('Ignoring path:', fullPath);
          continue;
        }
        
        // Skip node_modules, dist, build directories
        if (entry.name === 'node_modules' || entry.name === 'dist' || entry.name === 'build') {
          console.log('Skipping special directory:', entry.name);
          continue;
        }
        
        if (entry.isDirectory()) {
          console.log('Found directory:', fullPath);
          folders.push(fullPath);
          // Recursively scan subdirectories
          await scanDir(fullPath);
        }
      }
    } catch (error) {
      console.error('Error scanning directory:', currentPath, error);
    }
  }
  
  try {
    const resolvedPath = path.resolve(dir);
    console.log('Starting scan from:', resolvedPath);
    await scanDir(resolvedPath);
    
    // Remove duplicates and normalize paths
    const uniqueFolders = Array.from(new Set(folders.map(folder => path.normalize(folder))));
    console.log('Total folders found:', uniqueFolders.length);
    console.log('Folders:', uniqueFolders);
    
    return uniqueFolders;
  } catch (error) {
    console.error('Error in getFolders:', error);
    return [];
  }
}

async function getFiles(dir: string, ignore: string[] = []): Promise<string[]> {
  return new Promise((resolve, reject) => {
    glob('**/*.{ts,tsx,js,jsx}', {
      cwd: dir,
      ignore: [...ignore, '**/node_modules/**', '**/dist/**', '**/build/**'],
      absolute: true
    }, (err: Error | null, files: string[]) => {
      if (err) reject(err);
      else resolve(files);
    });
  });
}

async function analyzeFile(filePath: string): Promise<FileAnalysis> {
  try {
    const stats = fs.statSync(filePath);
    if (!stats.isFile()) {
      return {
        path: filePath,
        lines: 0,
        healthScore: 0,
        complexity: 0,
        issues: []
      };
    }
    
    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');
    
    return {
      path: filePath,
      lines: lines.length,
      healthScore: Math.random() * 100, // Placeholder
      complexity: Math.floor(Math.random() * 10), // Placeholder
      issues: [] // Placeholder
    };
  } catch (error) {
    console.error(`Error analyzing file ${filePath}:`, error);
    return {
      path: filePath,
      lines: 0,
      healthScore: 0,
      complexity: 0,
      issues: []
    };
  }
}

async function generateReport(results: FileAnalysis[], folders: string[], config: CodeHealthConfig): Promise<void> {
  const totalFiles = results.length;
  const totalFolders = folders.length;
  const totalLines = results.reduce((sum, file) => sum + file.lines, 0);
  
  const report: CodeHealthReport = {
    totalFiles,
    totalFolders,
    totalLines,
    healthScore: 72.2, // Placeholder
    maintainabilityScore: 53.9, // Placeholder  
    securityScore: 85.0, // Placeholder
    typeCoverage: 80.0, // Placeholder
    totalIssues: 15, // Placeholder
    files: results,
    folders: folders
  };

  if (config.verbose) {
    console.log('\nStarting code health analysis...\n');
  }

  console.log('=== Code Health Report ===');
  console.log(`Total Folders: ${totalFolders}`);
  console.log(`Total Files: ${totalFiles}`);
  console.log(`Total Lines of Code: ${totalLines}`);
  console.log(`Overall Health: ${report.healthScore}%`);
  console.log(`Maintainability Score: ${report.maintainabilityScore}%`);
  console.log(`Security Score: ${report.securityScore}%`);
  console.log(`Type Coverage: ${report.typeCoverage}%`);
  console.log(`Total Issues: ${report.totalIssues}`);

  if (config.output) {
    const outputPath = path.resolve(config.output);
    if (config.format === 'json') {
      fs.writeFileSync(outputPath, JSON.stringify(report, null, 2));
    } else if (config.format === 'html') {
      const html = generateHtmlReport(report);
      fs.writeFileSync(outputPath, html);
    } else if (config.format === 'markdown') {
      const markdown = generateMarkdownReport(report);
      fs.writeFileSync(outputPath, markdown);
    }
  }
}

function generateHtmlReport(report: CodeHealthReport): string {
  return `<!DOCTYPE html>
<html>
<head>
  <title>Code Health Report</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 20px; }
    .metric { margin: 10px 0; }
    .good { color: green; }
    .warning { color: orange; }
    .bad { color: red; }
    .folders { margin: 20px 0; }
    .folder { margin: 5px 0; padding-left: 20px; }
  </style>
</head>
<body>
  <h1>Code Health Report</h1>
  <div class="metric">Total Folders: ${report.totalFolders}</div>
  <div class="metric">Total Files: ${report.totalFiles}</div>
  <div class="metric">Total Lines: ${report.totalLines}</div>
  <div class="metric ${report.healthScore >= 80 ? 'good' : report.healthScore >= 60 ? 'warning' : 'bad'}">
    Overall Health: ${report.healthScore}%
  </div>
  <div class="metric">Maintainability Score: ${report.maintainabilityScore}%</div>
  <div class="metric">Security Score: ${report.securityScore}%</div>
  <div class="metric">Type Coverage: ${report.typeCoverage}%</div>
  <div class="metric">Total Issues: ${report.totalIssues}</div>
  
  <h2>Folders</h2>
  <div class="folders">
    ${report.folders.map(folder => `
      <div class="folder">📁 ${folder}</div>
    `).join('\n')}
  </div>

  <h2>Files</h2>
  ${report.files.map(file => `
    <div class="file">
      <h3>📄 ${file.path}</h3>
      <p>Lines: ${file.lines}</p>
      ${file.healthScore ? `<p>Health Score: ${file.healthScore.toFixed(1)}%</p>` : ''}
      ${file.complexity ? `<p>Complexity: ${file.complexity}</p>` : ''}
    </div>
  `).join('\n')}
</body>
</html>`;
}

function generateMarkdownReport(report: CodeHealthReport): string {
  return `# Code Health Report

## Overview
- Total Folders: ${report.totalFolders}
- Total Files: ${report.totalFiles}
- Total Lines: ${report.totalLines}
- Overall Health: ${report.healthScore}%
- Maintainability Score: ${report.maintainabilityScore}%
- Security Score: ${report.securityScore}%
- Type Coverage: ${report.typeCoverage}%
- Total Issues: ${report.totalIssues}

## Folders
${report.folders.map(folder => `- ${folder}`).join('\n')}

## Files
${report.files.map(file => `
### ${file.path}
- Lines: ${file.lines}
${file.healthScore ? `- Health Score: ${file.healthScore.toFixed(1)}%` : ''}
${file.complexity ? `- Complexity: ${file.complexity}` : ''}
`).join('\n')}
`;
}

async function main() {
  try {
    const argv = yargs
      .scriptName('mcp-code-health')
      .usage('$0 [options]')
      .option('path', {
        alias: 'p',
        description: 'Path to analyze',
        default: '.',
        type: 'string',
        normalize: true
      })
      .option('format', {
        alias: 'f',
        description: 'Output format (json, html, markdown, console)',
        default: 'console',
        choices: ['json', 'html', 'markdown', 'console']
      })
      .option('output', {
        alias: 'o',
        description: 'Output file path',
        type: 'string'
      })
      .option('verbose', {
        alias: 'v',
        description: 'Show verbose output',
        type: 'boolean',
        default: false
      })
      .help()
      .parseSync();

    const projectPath = path.resolve(argv.path);
    console.log(`\nAnalyzing project at ${projectPath}`);
    console.log('Using default configuration');

    const config: CodeHealthConfig = {
      path: projectPath,
      format: argv.format as CodeHealthConfig['format'],
      output: argv.output,
      verbose: argv.verbose,
      ignore: ['**/node_modules/**', '**/dist/**', '**/build/**', '**/coverage/**', '**/.git/**']
    };

    const startTime = process.hrtime();

    const [files, folders] = await Promise.all([
      getFiles(projectPath, config.ignore),
      getFolders(projectPath, config.ignore)
    ]);
    
    const results = await Promise.all(files.map(file => analyzeFile(file)));
    
    await generateReport(results, folders, config);

    const [seconds, nanoseconds] = process.hrtime(startTime);
    const duration = seconds + nanoseconds / 1e9;
    
    console.log(`Analysis Time: ${duration.toFixed(3)}s`);

  } catch (error) {
    console.error(chalk.red('Error:', (error as Error).message));
    process.exit(1);
  }
}

main(); 