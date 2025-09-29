#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const projectName = process.argv[2];

if (!projectName) {
  console.error("Error: Please provide a name for your project.");
  console.log("Usage: node index.js <ProjectName>");
  process.exit(1);
}

const projectPath = `./${projectName}`;

const directories = [
  path.join(projectPath, 'client', 'public'),
  path.join(projectPath, 'client', 'src', 'components'),
  path.join(projectPath, 'server', 'config'),
  path.join(projectPath, 'server', 'controllers'),
  path.join(projectPath, 'server', 'models'),
  path.join(projectPath, 'server', 'routes'),
];

const files = [
  {
    path: path.join(projectPath, '.gitignore'),
    content: `node_modules\n.env`
  },

  {
    path:path.join(projectPath, 'README.md'),
    content:'# ' + projectName + "\n This is my first project QuickStart"
  },
  {
    path: path.join(projectPath, 'package.json'),
    content: JSON.stringify({
      name: projectName,
      version: '1.0.0',
      description: '',
      main: 'server.js',
      scripts: {
        "start": "node server.js"
      },
      keywords: [],
      author: '',
      license: 'ISC'
    }, null, 2)
  },
  {
    path: path.join(projectPath, 'server.js'),
    content: `const express = require('express');\nconst app = express();\n\nconst PORT = process.env.PORT || 5000;\n\napp.get('/', (req, res) => {\n  res.send('<h1>API is running...</h1>');\n});\n\napp.listen(PORT, () => console.log(\`Server started on port \${PORT}\`));`
  },
  {
    path: path.join(projectPath, '.env.example'),
    content: `PORT=5000\nMONGO_URI=`
  },
  {
    path: path.join(projectPath, 'client', 'public', 'index.html'),
    content: `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>${projectName}</title>\n</head>\n<body>\n  <div id="root"></div>\n</body>\n</html>`
  },
  {
    path: path.join(projectPath, 'client', 'src', 'App.js'),
    content: `import React from 'react';\n\nfunction App() {\n  return (\n    <div className="App">\n      <h1>Welcome to ${projectName}</h1>\n    </div>\n  );\n}\n\nexport default App;`
  }
];

console.log(`🚀 Creating project: ${projectName}`);

directories.forEach(dir => {
  try {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`✅ Created directory: ${dir}`);
  } catch (err) {
    console.error(`❌ Error creating directory ${dir}: ${err.message}`);
    process.exit(1);
  }
});

files.forEach(file => {
  try {
    fs.writeFileSync(file.path, file.content);
    console.log(`✅ Created file: ${file.path}`);
  } catch (err) {
    console.error(`❌ Error creating file ${file.path}: ${err.message}`);
    process.exit(1);
  }
});

console.log(`\n🎉🎉🎉 Project '${projectName}' created successfully! 🎉🎉🎉`);
console.log('You are all set to start coding.');