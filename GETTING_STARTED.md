# 🚀 Getting Started

Simple guide to creating blog posts on Family Leveling.

## ⚡ Quick Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

Open http://localhost:3000

**That's it!** No API keys, no complex setup.

## 📝 Writing Your First Post

### Step 1: Create MDX File

Create a new file in `content/blog/`:

```bash
content/blog/my-first-post.mdx
```

### Step 2: Add Frontmatter

Start with this template:

```mdx
---
title: "5 Productivity Tips for WFH Tech Parents"
description: "Practical tips to stay productive while working from home with kids"
date: "2026-01-11"
author: "Family Leveling"
category: "Productivity"
tags: ["productivity", "WFH", "time management"]
featured: false
image: "/images/blogs/productivity-tips.webp"
excerpt: "Practical tips to stay productive while working from home with kids"
---
```

### Step 3: Write Your Content

```mdx
## Introduction

Working from home with kids is challenging. Here's what I've learned...

## Tip #1: Time Blocking

Set specific blocks of time for focused work...

### How to Do It

1. Plan your blocks the night before
2. Communicate your schedule to family
3. Use a timer to stay on track

## Tip #2: Morning Routine

Start your day with intention...

## Recommended Tools

<AmazonProductCard 
  url="https://amzn.to/yourlink"
  title="Productivity Timer"
  description="Perfect for time blocking techniques"
/>

## Conclusion

These tips have helped me balance work and family...
```

### Step 4: Add an Image

1. Create or find an image (1200x630px recommended)
2. Save as WebP format for best performance
3. Save to `public/images/blogs/productivity-tips.webp`
4. Already referenced in your frontmatter!

### Step 5: Preview Locally

Visit: http://localhost:3000/blog/my-first-post

### Step 6: Publish

```bash
git add content/blog/my-first-post.mdx
git add public/images/blogs/productivity-tips.webp
git commit -m "Add blog post: Productivity Tips"
git push origin main
```

Your site deploys automatically via GitHub Actions!

## 🛍️ Adding Amazon Products

The easiest way to add affiliate links:

```mdx
<AmazonProductCard 
  url="https://amzn.to/yourlink"
  title="Product Name"
  description="Why this product helps"
/>
```

### Getting Your Amazon Links

1. Sign up at [Amazon Associates](https://affiliate-program.amazon.com/)
2. Find a product on Amazon
3. Use the SiteStripe toolbar to get your short link
4. Copy the `amzn.to/xxxxx` link
5. Paste into the `url` prop

**That's it!** Your affiliate tag is already in the link.

## 📋 Blog Post Template

Copy this template for every new post:

```mdx
---
title: "Your Catchy Title Here"
description: "SEO-friendly description (150-160 chars)"
date: "2026-01-11"
author: "Family Leveling"
category: "Productivity"
tags: ["tag1", "tag2", "tag3"]
featured: false
image: "/images/blogs/your-image.webp"
excerpt: "Short preview text"
---

## Introduction

Hook readers with a relatable problem or question...

## Main Point #1

Your first major section...

### Subsection

Details, examples, tips...

## Main Point #2

Your second major section...

## Recommended Products

<AmazonProductCard 
  url="https://amzn.to/yourlink"
  title="Product Name"
  description="Why this helps with your post topic"
/>

## Conclusion

Wrap up with key takeaways and a call to action...
```

## 🎨 Formatting Tips

### Headings

```mdx
## Main Section (H2)
### Subsection (H3)
#### Small Heading (H4)
```

### Lists

```mdx
**Bullet list:**
- First item
- Second item
- Third item

**Numbered list:**
1. First step
2. Second step
3. Third step
```

### Bold & Italics

```mdx
**Bold text** for emphasis
*Italic text* for slight emphasis
```

### Links

```mdx
[Link text](https://example.com)
```

### Images in Content

```mdx
![Alt text](/images/blogs/image-name.webp)
```

### Code Blocks

```mdx
```javascript
const code = "example here";
```
```

### Quotes

```mdx
> This is a blockquote
> It can span multiple lines
```

## 🖼️ Images Guide

### Creating Images

**Free tools:**
- [Canva](https://www.canva.com) - Templates and design
- [Unsplash](https://unsplash.com) - Free stock photos
- [Pixabay](https://pixabay.com) - Free images

### Image Specifications

- **Size:** 1200x630px (optimal for social sharing)
- **Format:** WebP (best performance)
- **Location:** `public/images/blogs/`
- **Naming:** Match your post slug

### Converting to WebP

Use [Squoosh](https://squoosh.app):
1. Upload your image
2. Choose WebP format
3. Adjust quality (85% is good)
4. Download

## 📊 Categories

Choose the best fit:

| Category | Use For |
|----------|---------|
| **Productivity** | Time management, routines, efficiency |
| **Tools** | Software reviews, app recommendations |
| **Workspace** | Home office setup, ergonomics |
| **Communication** | Remote work, team communication |

## 💡 Writing Tips

### Engaging Titles

❌ "Productivity Tips"
✅ "7 Time-Tested Productivity Tips for WFH Developer Parents"

**Formula:** [Number] [Action Words] for [Target Audience]

### Good Introduction

1. Start with a relatable problem
2. Show you understand their struggle
3. Promise a solution
4. Hook them to keep reading

### Content Structure

1. **Introduction** - Hook and promise
2. **Main sections** - 3-7 major points
3. **Subsections** - Details for each point
4. **Examples** - Real scenarios
5. **Products** - 1-3 relevant items
6. **Conclusion** - Recap and action

### SEO Tips

- **Use keywords** in title, headings, and content
- **Write long content** (1500+ words ranks better)
- **Add internal links** to other posts
- **Include external links** to quality sources
- **Optimize images** with alt text

## 🎯 Content Ideas

### Easy First Posts

- "5 Things I Wish I Knew About WFH with Kids"
- "My Home Office Setup Tour"
- "Tools I Use Every Day as a Developer Parent"
- "Morning Routine That Changed My Productivity"

### List Posts (Popular)

- "X Ways to [Achieve Goal]"
- "X Best [Tools/Products] for [Audience]"
- "X Mistakes to Avoid When [Activity]"
- "X Signs You Need [Solution]"

### How-To Guides

- "How to Set Up [Thing]"
- "How I [Achieved Result]"
- "Step-by-Step Guide to [Process]"

### Reviews

- "[Tool] Review: Is It Worth It?"
- "I Tried [Product] for 30 Days - Here's What Happened"
- "Comparing [Product A] vs [Product B]"

## 🔍 Example Posts

Check these for inspiration:

1. `5-time-blocking-techniques-for-wfh-parents.mdx`
2. `automation-tools-for-busy-tech-parents.mdx`
3. `building-a-home-office-that-works-for-families.mdx`

Located in `content/blog/`

## ✅ Pre-Publish Checklist

Before you publish, verify:

- [ ] Title is compelling and SEO-friendly
- [ ] Description is 150-160 characters
- [ ] Date is correct (format: "YYYY-MM-DD")
- [ ] Category matches content
- [ ] 3-5 relevant tags added
- [ ] Featured image exists and is referenced correctly
- [ ] Content is 1000+ words
- [ ] Headings use proper hierarchy (##, ###)
- [ ] Amazon products are relevant (1-3)
- [ ] Links work (internal and external)
- [ ] No spelling/grammar errors
- [ ] Read it out loud (does it flow?)

## 🚀 Publishing Workflow

### Weekly Schedule

**Monday mornings:**
1. Write post (1-2 hours)
2. Find/create image (15 minutes)
3. Add Amazon products (5 minutes)
4. Preview locally
5. Commit and push

### Batch Writing

**First Monday of month:**
1. Outline 4 post ideas
2. Write all 4 drafts (4-6 hours)
3. Create all 4 images
4. Schedule throughout month

## 🆘 Common Issues

### Post doesn't appear

- Check file is in `content/blog/`
- Check filename ends with `.mdx`
- Check frontmatter is valid YAML
- Restart dev server

### Image doesn't show

- Check path starts with `/`
- Check file exists in `public/images/blogs/`
- Check filename matches exactly (case-sensitive)

### Amazon link doesn't work

- Check affiliate tag is set
- Check `<AmazonProductCard>` is properly formatted
- Check closing tag `</>`

### Build fails

- Run `npm run build` locally
- Check console for errors
- Verify all MDX syntax is correct

## 📚 Next Steps

1. **Write your first post** following this guide
2. **Check [QUICK_REFERENCE.md](./QUICK_REFERENCE.md)** for quick tips
3. **Review existing posts** in `content/blog/` for examples
4. **Start a content calendar** to plan ahead

## 🎉 You're Ready!

Now you know how to:
- ✅ Create blog posts in MDX
- ✅ Add Amazon affiliate products easily
- ✅ Format content beautifully
- ✅ Publish to your live site

**Go write your first post!**

---

*Questions? Check the README.md or review existing posts in content/blog/*
