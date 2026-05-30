const fs = require('fs');
const path = require('path');

const excludeDirs = ['.next', 'node_modules', '.git'];

function searchDir(dir, results = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      if (!excludeDirs.includes(file)) {
        searchDir(fullPath, results);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.json') || file.endsWith('.md') || file.endsWith('.css') || file.endsWith('.mjs')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      if (content.toLowerCase().includes('solvify')) {
        results.push(fullPath);
      }
    }
  }
  return results;
}

console.log('Searching for "Solvify" in the codebase...');
const matches = searchDir(__dirname);
console.log('Found files with matches:');
matches.forEach((file) => console.log(file));
