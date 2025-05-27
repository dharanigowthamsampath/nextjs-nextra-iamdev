// generateDocsFromMeta.js
const fs = require("fs");
const path = require("path");

/**
 * Recursively generate docs from meta definition
 */
function generateDocs(meta, baseDir) {
  for (const [key, value] of Object.entries(meta)) {
    if (typeof value === "string") {
      // Simple file
      const filePath = path.join(baseDir, `${key}.mdx`);
      if (!fs.existsSync(filePath)) {
        const content = `---\ntitle: ${value}\n---\n\n## ${value}\n\nContent coming soon...\n`;
        fs.writeFileSync(filePath, content);
        console.log("✅ Created file:", filePath);
      } else {
        console.log("⚠️ File exists:", filePath);
      }
    } else if (typeof value === "object" && value.title && value.children) {
      // Folder + Subtopics
      const folderPath = path.join(baseDir, key);
      if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath);
        console.log("📁 Created folder:", folderPath);
      }

      // Create index.mdx inside folder
      const indexFile = path.join(folderPath, "index.mdx");
      if (!fs.existsSync(indexFile)) {
        const indexContent = `---\ntitle: ${value.title}\n---\n\n## ${value.title}\n\nOverview coming soon...\n`;
        fs.writeFileSync(indexFile, indexContent);
        console.log("✅ Created:", indexFile);
      }

      // Recursively handle children
      generateDocs(value.children, folderPath);
    } else {
      console.warn("⚠️ Skipped unknown format for:", key);
    }
  }
}

// ENTRY POINT
const meta = require("./_meta.js");
generateDocs(meta, ".");
