const fs = require('fs');
const path = require('path');

// Configuration
const basePath = '/emoji-collection';
const outDir = './out';

// Get all HTML files
function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      getAllFiles(filePath, fileList);
    } else if (file.endsWith('.html')) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

// Fix paths in HTML files
function fixPaths() {
  const htmlFiles = getAllFiles(outDir);
  console.log(`Found ${htmlFiles.length} HTML files to process`);

  htmlFiles.forEach((filePath) => {
    let content = fs.readFileSync(filePath, 'utf8');

    // Replace incorrect paths in the HTML content
    content = content.replace(/"\/_next\//g, `"${basePath}/_next/`);
    content = content.replace(/"\/_vercel\//g, `"${basePath}/_vercel/`);
    content = content.replace(/href="\//g, `href="${basePath}/`);
    content = content.replace(/src="\//g, `src="${basePath}/`);

    // Exclude already fixed paths
    content = content.replace(
      new RegExp(`"${basePath}${basePath}/`, 'g'),
      `"${basePath}/`
    );

    fs.writeFileSync(filePath, content);
  });

  console.log('HTML path fixing completed');
}

fixPaths();
