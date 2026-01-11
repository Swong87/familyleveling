# Scripts Directory

Utility scripts for the Family Leveling blog.

## 📜 Available Scripts

### `check-links.js`

**Purpose:** Validates internal and external links in blog posts

**What it does:**
- Scans all MDX files in `content/blog/`
- Checks if internal links point to valid pages
- Verifies external links are accessible
- Reports broken or problematic links

**Usage:**
```bash
npm run check-links
```

**When to run:**
- Before deploying
- After adding multiple posts
- Periodically to catch dead links
- After updating old posts

**Output example:**
```
Checking links in blog posts...
✓ 5-time-blocking-techniques.mdx - All links valid
✓ automation-tools.mdx - All links valid
✗ old-post.mdx - Found 2 broken links:
  - https://deadlink.com (404)
  - /blog/deleted-post (not found)

Summary: 2 of 10 posts have issues
```

## 🔧 Customization

### Modifying Link Checker

Edit `check-links.js` to customize behavior:

```javascript
// Skip certain domains
const SKIP_DOMAINS = ['example.com'];

// Set timeout for external links
const TIMEOUT = 5000; // milliseconds

// Ignore certain link patterns
const IGNORE_PATTERNS = [/^#/, /^mailto:/];
```

### Adding New Scripts

To add utility scripts:

1. Create `scripts/your-script.js`
2. Add script to `package.json`:

```json
{
  "scripts": {
    "your-command": "node scripts/your-script.js"
  }
}
```

3. Run with `npm run your-command`

## 💡 Script Ideas

Potential scripts you could add:

### Image Optimizer

```bash
# scripts/optimize-images.js
# Compress all images in public/images/blogs/
npm run optimize-images
```

### Post Counter

```bash
# scripts/count-posts.js
# Count posts by category, tag, or date
npm run stats
```

### Sitemap Generator

```bash
# scripts/generate-sitemap.js
# Generate sitemap.xml from posts
npm run sitemap
```

### Draft Publisher

```bash
# scripts/publish-draft.js
# Move post from drafts to published
npm run publish draft-name
```

## 🐛 Troubleshooting

### Link checker hangs

**Cause:** External site is slow to respond
**Solution:** 
- Increase timeout in script
- Skip problematic domains
- Run without external link checking

### False positives

**Cause:** Some sites block automated requests
**Solution:**
- Add to skip list
- Manually verify the link
- Update user agent in script

### Script won't run

**Cause:** Missing dependencies or permissions
**Solution:**
```bash
npm install          # Reinstall dependencies
chmod +x scripts/*   # Make executable
node scripts/check-links.js  # Run directly
```

## 📚 Dependencies

Current scripts use Node.js built-in modules only:
- `fs` - File system operations
- `path` - Path manipulation
- No external dependencies needed!

## 🔐 Security

### Best Practices

- ✅ Never commit sensitive data
- ✅ Use environment variables for secrets
- ✅ Validate all inputs
- ✅ Handle errors gracefully

### Safe Scripts

These scripts are safe and don't:
- ❌ Modify your blog posts
- ❌ Delete files
- ❌ Make external API calls (except link validation)
- ❌ Require special permissions

## 🎯 Workflow Integration

### Pre-Deploy Check

```bash
# Before pushing to main
npm run check-links
npm run build
npm run lint
```

### Weekly Maintenance

```bash
# Every Monday
npm run check-links
# Review and fix broken links
```

### Before Major Updates

```bash
# Before site redesign
npm run check-links  # Verify links
npm run build        # Test build
# Backup content/blog/
```

## 💭 Manual vs Automated

This blog focuses on **manual content creation**:

✅ **You write** the blog posts
✅ **You choose** the topics
✅ **You control** everything

Scripts are utilities to:
- ✅ Validate quality (link checker)
- ✅ Build site (Next.js)
- ✅ Deploy (GitHub Actions)

No AI, no automation, just helpful tools!

## 📖 Further Reading

- **Blog writing:** [GETTING_STARTED.md](../GETTING_STARTED.md)
- **Quick tips:** [QUICK_REFERENCE.md](../QUICK_REFERENCE.md)
- **Project overview:** [README.md](../README.md)

---

*Keep scripts simple and focused on utility, not automation.*
