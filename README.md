# Family Leveling

A modern blog for work-from-home tech parents focusing on productivity, tools, and work-life balance.

## Features

- **📝 MDX Blog**: Write posts in markdown with React components
- **🛍️ Amazon Associates**: Easy affiliate product integration
- **🎨 Modern Design**: Responsive design with dark mode support
- **⚡ Fast**: Optimized with Next.js 14 and static generation
- **📊 SEO**: Structured data, meta tags, and sitemap
- **🔍 Reading Features**: Table of contents, reading time, related posts

## 🚀 Quick Start

### Installation

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Creating Blog Posts

Create MDX files in `content/blog/`:

```bash
content/blog/my-new-post.mdx
```

## 📝 Blog Post Template

```mdx
---
title: "Your Blog Post Title"
description: "SEO-friendly description (150-160 characters)"
date: "2026-01-11"
author: "Family Leveling"
category: "Productivity"
tags: ["productivity", "WFH", "tech parent tips"]
featured: false
image: "/images/blogs/your-image.webp"
excerpt: "Short excerpt for preview"
---

## Introduction

Your content here...

## Main Section

More content with lists, code blocks, etc.

### Subsection

- Bullet points
- More points

## Recommended Products

<AmazonProductCard 
  url="https://amzn.to/yourlink"
  title="Product Name"
  description="Why this product helps with the topic of your post"
/>

## Conclusion

Wrap up your post...
```

## 🛍️ Adding Amazon Products

The `<AmazonProductCard>` component makes it easy to add affiliate links:

```mdx
<AmazonProductCard 
  url="https://amzn.to/yourlink"
  title="Product Name"
  description="Why this product helps with your post topic"
/>
```

### Getting Your Amazon Affiliate Links

1. Sign up at [Amazon Associates](https://affiliate-program.amazon.com/)
2. Find a product on Amazon
3. Use the Amazon Associates SiteStripe toolbar to get your short link (amzn.to format)
4. Paste the link into the `url` prop

**That's it!** Your affiliate tag is already in the short link.

## 🎨 Available MDX Components

Use these components in your blog posts:

### Amazon Products

```mdx
<AmazonProductCard 
  url="https://amzn.to/yourlink"
  title="Product Name"
  description="Why it helps"
/>
```

### Key Takeaways

```mdx
<KeyTakeaways 
  points={[
    "Key point 1",
    "Key point 2",
    "Key point 3"
  ]} 
/>
```

### FAQ Section

```mdx
<FAQSection 
  faqs={[
    {
      question: "How do I start?",
      answer: "Here's how..."
    }
  ]}
/>
```

### Newsletter CTA

```mdx
<NewsletterCTA variant="card" />
```

### Code Blocks

```mdx
```javascript
const example = "code here";
```
```

## 📁 Project Structure

```
familyleveling/
├── app/
│   ├── blog/[slug]/     # Blog post pages
│   ├── about/           # About page
│   └── page.tsx         # Homepage
├── components/
│   ├── AmazonProductCard.tsx  # Amazon affiliate component
│   ├── PostCard.tsx           # Blog post cards
│   └── ...                    # Other components
├── content/
│   └── blog/            # Your MDX blog posts go here!
├── public/
│   └── images/
│       └── blogs/       # Blog post images
└── scripts/
    └── check-links.js   # Validate links
```

## 🖼️ Adding Images

1. **Save images** to `public/images/blogs/`
2. **Use WebP format** for best performance
3. **Name convention**: `your-post-slug.webp`
4. **Reference** in frontmatter:

```yaml
image: "/images/blogs/your-post-slug.webp"
```

**Recommended size:** 1200x630px (optimal for social sharing)

## 🔧 Development Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run check-links` | Validate links in posts |
| `npm run lint` | Run linter |

## 🌐 Deployment

### GitHub Pages (Current Setup)

Deploys automatically on push to `main`:

```bash
git add .
git commit -m "Add blog post"
git push origin main
```

GitHub Actions builds and deploys to your domain.

### Other Platforms

Build static files:

```bash
npm run build
# Static files in /out directory
```

Deploy `/out` to any static host (Vercel, Netlify, etc.)

## 📚 Writing Tips

### Good Blog Post Structure

1. **Engaging title** with numbers or power words
2. **Introduction** that relates to reader's problem
3. **Main sections** with ## headings
4. **Subsections** with ### headings
5. **Practical tips** with bullet points
6. **Real examples** from your experience
7. **Actionable conclusion**

### SEO Best Practices

- **Title**: 50-60 characters
- **Description**: 150-160 characters
- **Headers**: Use proper H2, H3 hierarchy
- **Images**: Include alt text
- **Links**: Add internal and external links
- **Content**: 1500+ words for better rankings

### Amazon Product Tips

- **Add 1-3 products** per post (don't overdo it)
- **Make them relevant** to the post topic
- **Explain why** they're helpful
- **Use search terms** for flexibility
- **Personal recommendations** convert better

## 🎯 Content Categories

Choose from these categories:

- **Productivity** - Time management, routines, focus
- **Tools** - Software, apps, tech reviews
- **Workspace** - Setup, ergonomics, organization
- **Communication** - Remote work, boundaries, meetings

## 🛠️ Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **MDX** - Markdown with components
- **Next.js Image** - Optimized images

## 📖 Documentation

- **[GETTING_STARTED.md](./GETTING_STARTED.md)** - Detailed setup guide
- **[QUICK_REFERENCE.md](./QUICK_REFERENCE.md)** - One-page cheat sheet
- **[scripts/README.md](./scripts/README.md)** - Script documentation

## 💡 Example Posts

Check `content/blog/` for examples:
- `5-time-blocking-techniques-for-wfh-parents.mdx`
- `automation-tools-for-busy-tech-parents.mdx`
- `building-a-home-office-that-works-for-families.mdx`
- `communication-strategies-for-remote-teams.mdx`

## 🤝 Contributing

This is a personal blog. Feel free to fork for your own use!

---

**Happy blogging!** 📝

*For WFH tech parents who want to share their productivity journey.*
