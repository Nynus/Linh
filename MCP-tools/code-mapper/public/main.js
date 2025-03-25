// Presenter - phần giao diện người dùng và tương tác
import * as d3 from 'https://cdn.jsdelivr.net/npm/d3@7/+esm';

// DOM elements
const projectPathInput = document.getElementById('project-path');
const analyzeBtn = document.getElementById('analyze-btn');
const nodeSizeSlider = document.getElementById('node-size');
const nodeSizeValue = document.getElementById('node-size-value');
const linkDistanceSlider = document.getElementById('link-distance');
const linkDistanceValue = document.getElementById('link-distance-value');
const showLabelsCheckbox = document.getElementById('show-labels');
const searchInput = document.getElementById('search-nodes');
const filterBtns = document.querySelectorAll('.filter-btn');
const orphansList = document.getElementById('orphans-list');
const circularList = document.getElementById('circular-list');

// Visualization state
let nodeSize = 8;
let linkDistance = 100;
let showLabels = true;
let graphData = null;
let simulation = null;
let svg = null;
let link = null;
let node = null;
let text = null;
let currentFilter = 'all';

// Setup D3 visualization
function initGraph() {
  const graphContainer = document.getElementById('graph-container');
  const width = graphContainer.clientWidth;
  const height = graphContainer.clientHeight;
  
  // Clear any existing SVG
  d3.select('#graph-container svg').remove();
  
  // Create new SVG
  svg = d3.select('#graph-container')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .call(d3.zoom().on('zoom', (event) => {
      svg.attr('transform', event.transform);
    }))
    .append('g');
  
  // Add a background to capture zoom events
  svg.append('rect')
    .attr('width', width)
    .attr('height', height)
    .attr('fill', 'white')
    .style('pointer-events', 'none');
}

// Update the graph with new data
function updateGraph() {
  if (!graphData) return;
  
  const graphContainer = document.getElementById('graph-container');
  const width = graphContainer.clientWidth;
  const height = graphContainer.clientHeight;
  
  // Filter nodes based on current filter
  let filteredNodes = [...graphData.nodes];
  let filteredLinks = [...graphData.links];
  
  if (currentFilter === 'internal') {
    // Only show internal dependencies
    filteredNodes = graphData.nodes.filter(node => !node.id.includes('node_modules'));
    filteredLinks = graphData.links.filter(link => {
      const source = typeof link.source === 'object' ? link.source.id : link.source;
      const target = typeof link.target === 'object' ? link.target.id : link.target;
      return !source.includes('node_modules') && !target.includes('node_modules');
    });
  } else if (currentFilter === 'external') {
    // Only show nodes with external dependencies
    const nodesWithExternalDeps = new Set();
    
    graphData.links.forEach(link => {
      const source = typeof link.source === 'object' ? link.source.id : link.source;
      const target = typeof link.target === 'object' ? link.target.id : link.target;
      
      if (source.includes('node_modules') || target.includes('node_modules')) {
        if (!source.includes('node_modules')) nodesWithExternalDeps.add(source);
        if (!target.includes('node_modules')) nodesWithExternalDeps.add(target);
      }
    });
    
    filteredNodes = graphData.nodes.filter(node => 
      node.id.includes('node_modules') || nodesWithExternalDeps.has(node.id)
    );
    
    filteredLinks = graphData.links.filter(link => {
      const source = typeof link.source === 'object' ? link.source.id : link.source;
      const target = typeof link.target === 'object' ? link.target.id : link.target;
      return source.includes('node_modules') || target.includes('node_modules');
    });
  }
  
  // Setup force simulation
  simulation = d3.forceSimulation(filteredNodes)
    .force('link', d3.forceLink(filteredLinks).id(d => d.id).distance(linkDistance))
    .force('charge', d3.forceManyBody().strength(-100))
    .force('center', d3.forceCenter(width / 2, height / 2));
  
  // Create links
  link = svg.selectAll('.link')
    .data(filteredLinks)
    .join('line')
    .attr('class', d => `link ${d.type || ''}`)
    .attr('stroke-width', 1);
  
  // Create nodes
  node = svg.selectAll('.node')
    .data(filteredNodes)
    .join('circle')
    .attr('class', d => {
      let classes = 'node';
      if (graphData.orphans.includes(d.id)) classes += ' orphan';
      if (graphData.circularDependencies.some(cycle => cycle.includes(d.id))) classes += ' circular';
      return classes;
    })
    .attr('r', nodeSize)
    .attr('fill', d => {
      if (graphData.circularDependencies.some(cycle => cycle.includes(d.id))) {
        return '#d62728'; // Red for circular
      } else if (graphData.orphans.includes(d.id)) {
        return '#ff7f0e'; // Orange for orphans
      } else {
        return '#1f77b4'; // Blue for normal
      }
    })
    .call(d3.drag()
      .on('start', dragstarted)
      .on('drag', dragged)
      .on('end', dragended));
  
  // Add tooltips
  node.append('title')
    .text(d => d.id);
  
  // Add labels
  text = svg.selectAll('.node-label')
    .data(filteredNodes)
    .join('text')
    .attr('class', 'node-label')
    .attr('dx', 12)
    .attr('dy', '.35em')
    .style('display', showLabels ? 'block' : 'none')
    .text(d => d.label || d.id.split('/').pop());
  
  // Update simulation on tick
  simulation.on('tick', () => {
    link
      .attr('x1', d => d.source.x)
      .attr('y1', d => d.source.y)
      .attr('x2', d => d.target.x)
      .attr('y2', d => d.target.y);
    
    node
      .attr('cx', d => d.x)
      .attr('cy', d => d.y);
    
    text
      .attr('x', d => d.x)
      .attr('y', d => d.y);
  });
}

// Drag functions
function dragstarted(event, d) {
  if (!event.active) simulation.alphaTarget(0.3).restart();
  d.fx = d.x;
  d.fy = d.y;
}

function dragged(event, d) {
  d.fx = event.x;
  d.fy = event.y;
}

function dragended(event, d) {
  if (!event.active) simulation.alphaTarget(0);
  d.fx = null;
  d.fy = null;
}

// Fetch dependency graph data from API
async function fetchDependencyGraph() {
  try {
    const projectPath = projectPathInput.value.trim();
    if (!projectPath) {
      alert('Please enter a project path');
      return;
    }
    
    const queryParams = new URLSearchParams({ path: projectPath });
    const response = await fetch(`/api/dependency-graph?${queryParams}`);
    
    if (!response.ok) {
      throw new Error(`Server responded with status: ${response.status}`);
    }
    
    graphData = await response.json();
    
    // Update UI with analysis results
    updateAnalysisResults();
    
    // Initialize and update the graph
    initGraph();
    updateGraph();
  } catch (error) {
    console.error('Error fetching dependency graph:', error);
    alert(`Error: ${error.message}`);
  }
}

// Update analysis results in the sidebar
function updateAnalysisResults() {
  if (!graphData) return;
  
  // Update orphans list
  orphansList.innerHTML = '';
  if (graphData.orphans.length === 0) {
    orphansList.innerHTML = '<div>No orphaned modules found</div>';
  } else {
    graphData.orphans.forEach(orphan => {
      const div = document.createElement('div');
      div.textContent = orphan;
      div.addEventListener('click', () => highlightNode(orphan));
      orphansList.appendChild(div);
    });
  }
  
  // Update circular dependencies list
  circularList.innerHTML = '';
  if (graphData.circularDependencies.length === 0) {
    circularList.innerHTML = '<div>No circular dependencies found</div>';
  } else {
    graphData.circularDependencies.forEach(cycle => {
      const div = document.createElement('div');
      div.textContent = cycle.join(' → ');
      div.addEventListener('click', () => highlightCycle(cycle));
      circularList.appendChild(div);
    });
  }
}

// Highlight a specific node
function highlightNode(nodeId) {
  node.classed('highlighted', d => d.id === nodeId);
  text.style('font-weight', d => d.id === nodeId ? 'bold' : 'normal');
}

// Highlight a cycle
function highlightCycle(cycle) {
  node.classed('highlighted', d => cycle.includes(d.id));
  text.style('font-weight', d => cycle.includes(d.id) ? 'bold' : 'normal');
  
  link.classed('highlighted', d => {
    const source = typeof d.source === 'object' ? d.source.id : d.source;
    const target = typeof d.target === 'object' ? d.target.id : d.target;
    
    return cycle.includes(source) && cycle.includes(target) && 
           cycle.indexOf(source) === (cycle.indexOf(target) - 1) % cycle.length;
  });
}

// Event listeners
analyzeBtn.addEventListener('click', fetchDependencyGraph);

nodeSizeSlider.addEventListener('input', e => {
  nodeSize = parseInt(e.target.value);
  nodeSizeValue.textContent = nodeSize;
  if (node) node.attr('r', nodeSize);
});

linkDistanceSlider.addEventListener('input', e => {
  linkDistance = parseInt(e.target.value);
  linkDistanceValue.textContent = linkDistance;
  if (simulation) {
    simulation.force('link').distance(linkDistance);
    simulation.alpha(0.3).restart();
  }
});

showLabelsCheckbox.addEventListener('change', e => {
  showLabels = e.target.checked;
  if (text) text.style('display', showLabels ? 'block' : 'none');
});

// Filter buttons
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    
    if (graphData) {
      initGraph();
      updateGraph();
    }
  });
});

// Search functionality
searchInput.addEventListener('input', e => {
  const searchTerm = e.target.value.toLowerCase();
  
  if (!node) return;
  
  if (searchTerm) {
    node.classed('highlighted', d => d.id.toLowerCase().includes(searchTerm));
    text.style('font-weight', d => d.id.toLowerCase().includes(searchTerm) ? 'bold' : 'normal');
    text.style('display', d => {
      if (d.id.toLowerCase().includes(searchTerm)) return 'block';
      return showLabels ? 'block' : 'none';
    });
  } else {
    node.classed('highlighted', false);
    text.style('font-weight', 'normal');
    text.style('display', showLabels ? 'block' : 'none');
  }
});

// Initial setup
window.addEventListener('load', () => {
  nodeSizeValue.textContent = nodeSize;
  linkDistanceValue.textContent = linkDistance;
  
  // Set a default project path if needed
  projectPathInput.value = projectPathInput.value || '.';
  
  // Initialize empty graph
  initGraph();
}); 