#!/usr/bin/env node

/**
 * Broken Link Checker
 * Checks for broken internal links in the static export
 */

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

const outDir = path.join(__dirname, '..', 'out');
const errors = [];
const warnings = [];

// Extract all links from HTML files
function extractLinks(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const linkRegex = /href=["']([^"']+)["']/g;
  const links = [];
  let match;

  while ((match = linkRegex.exec(content)) !== null) {
    const href = match[1];
    // Only check internal links
    if (!href.startsWith('http') && !href.startsWith('mailto:') && !href.startsWith('tel:')) {
      links.push(href);
    }
  }

  return links;
}

// Check if a link exists
function checkLink(link, baseFile) {
  // Remove hash
  const linkWithoutHash = link.split('#')[0];
  
  if (!linkWithoutHash) return true; // Just a hash link
  
  // Normalize the link
  let normalizedLink = linkWithoutHash;
  
  // Handle absolute paths
  if (normalizedLink.startsWith('/')) {
    normalizedLink = path.join(outDir, normalizedLink);
  } else {
    // Handle relative paths
    const baseDir = path.dirname(baseFile);
    normalizedLink = path.join(baseDir, normalizedLink);
  }
  
  // Try different variations
  const variations = [
    normalizedLink,
    normalizedLink + '.html',
    path.join(normalizedLink, 'index.html'),
  ];
  
  return variations.some(v => {
    try {
      return fs.existsSync(v) && fs.statSync(v).isFile();
    } catch (e) {
      return false;
    }
  });
}

async function main() {
  console.log('🔍 Checking for broken links...\n');

  // Get all HTML files
  const htmlFiles = await glob('**/*.html', { cwd: outDir });
  
  for (const file of htmlFiles) {
    const filePath = path.join(outDir, file);
    const links = extractLinks(filePath);
    
    for (const link of links) {
      if (!checkLink(link, filePath)) {
        errors.push({
          file: file,
          link: link,
        });
      }
    }
  }

  // Report results
  if (errors.length === 0) {
    console.log('✅ No broken links found!');
    process.exit(0);
  } else {
    console.log(`❌ Found ${errors.length} broken link(s):\n`);
    errors.forEach(({ file, link }) => {
      console.log(`  File: ${file}`);
      console.log(`  Link: ${link}\n`);
    });
    process.exit(1);
  }
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
