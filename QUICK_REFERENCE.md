# 📋 Quick Reference

One-page cheat sheet for creating blog posts.

## 🚀 New Post Workflow

```bash
1. Create: content/blog/my-post.mdx
2. Add image: public/images/blogs/my-post.webp  
3. Write content
4. Preview: http://localhost:3000/blog/my-post
5. Commit and push
```

## 📝 Blog Post Template

```mdx
---
title: "Your Blog Post Title"
description: "SEO description (150-160 chars)"
date: "2026-01-11"
author: "Family Leveling"
category: "Productivity"
tags: ["tag1", "tag2", "tag3"]
featured: false
image: "/images/blogs/your-image.webp"
excerpt: "Short preview"
---

## Introduction

Your content...

## Main Section

More content...

<AmazonProductCard 
  url="https://amzn.to/yourlink"
  title="Product Name"
  description="Why it helps"
/>

## Conclusion

Wrap up...
```

## 🛍️ Amazon Products

```mdx
<AmazonProductCard 
  url="https://amzn.to/yourlink"
  title="Product Name"
  description="Why you recommend it"
/>
```

**Get your link:**
1. Find product on Amazon
2. Use SiteStripe to get short link
3. Copy `amzn.to/xxxxx` link
4. Paste into `url` prop

## 📂 File Structure

```
content/blog/my-post.mdx              # Your post
public/images/blogs/my-post.webp      # Your image
```

## 🎨 Formatting

| Element | Syntax |
|---------|--------|
| **Heading 2** | `## Heading` |
| **Heading 3** | `### Heading` |
| **Bold** | `**text**` |
| **Italic** | `*text*` |
| **Link** | `[text](url)` |
| **Image** | `![alt](/path.webp)` |
| **List** | `- Item` or `1. Item` |
| **Quote** | `> Quote text` |

### Code Blocks

```mdx
```javascript
const code = "here";
```
```

## 📊 Categories

- **Productivity** - Time management, routines
- **Tools** - Software, app reviews
- **Workspace** - Home office, setup
- **Communication** - Remote work, boundaries

## 💡 Title Formulas

- "[Number] Ways to [Achieve Goal] for [Audience]"
- "The Ultimate Guide to [Topic]"
- "How to [Do Something] as a [Role]"
- "[Tool] Review: Is It Worth It?"

**Examples:**
- "7 Time Blocking Techniques for Developer Parents"
- "The Ultimate Guide to Home Office Setup"
- "My VS Code Extensions for Maximum Productivity"

## 🖼️ Images

**Specs:**
- Size: 1200x630px
- Format: WebP
- Location: `public/images/blogs/`
- Name: Match post slug

**Free tools:**
- [Canva](https://canva.com) - Design
- [Squoosh](https://squoosh.app) - Convert to WebP
- [Unsplash](https://unsplash.com) - Stock photos

## ✅ Pre-Publish Checklist

- [ ] Title is compelling
- [ ] Description 150-160 chars
- [ ] Date is correct
- [ ] Image exists and referenced
- [ ] 3-5 tags added
- [ ] Amazon products relevant
- [ ] Links work
- [ ] No typos

## 🔧 Commands

```bash
npm run dev              # Start dev server
npm run build            # Build for production
npm run check-links      # Validate links
git add .                # Stage changes
git commit -m "message"  # Commit
git push origin main     # Deploy
```

## 📐 Content Structure

```
Introduction (100-200 words)
├─ Hook with problem
├─ Show understanding
└─ Promise solution

Main Content (1200-1500 words)
├─ Section 1
│  ├─ Explanation
│  ├─ Examples
│  └─ Tips
├─ Section 2
└─ Section 3

Products (optional)
├─ 1-3 relevant items
└─ Explain why helpful

Conclusion (100-150 words)
├─ Recap key points
└─ Call to action
```

## 🎯 Content Ideas

**Quick posts:**
- "5 [Things] Every [Audience] Should [Do]"
- "My [Tool/Setup] Tour"
- "[Number] Mistakes I Made [Doing Something]"

**Deep dives:**
- "The Ultimate Guide to [Topic]"
- "How I [Achieved Result] in [Timeframe]"
- "[Tool] vs [Tool]: Which Is Better?"

**Reviews:**
- "I Tried [Product] for [Time] - Here's What Happened"
- "[Tool] Review: Pros, Cons, and Verdict"

## 🆘 Quick Fixes

| Problem | Solution |
|---------|----------|
| Post doesn't show | Check filename ends `.mdx` |
| Image missing | Check path `/images/blogs/` |
| Build fails | Run `npm run build` locally |
| Link broken | Use `npm run check-links` |

## 📚 More Help

- **Full guide:** [GETTING_STARTED.md](./GETTING_STARTED.md)
- **Examples:** Check `content/blog/` folder
- **README:** [README.md](./README.md)

---

**Keep this page handy while writing!** 📝
