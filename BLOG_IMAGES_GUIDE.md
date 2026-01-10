# How to Add Images to Blog Posts

## Image Storage Location

Store all blog images in the `public/images/blogs/` directory. This directory is already set up and accessible via the web.

## Method 1: Using Standard Markdown Image Syntax (Recommended)

Simply use standard markdown image syntax in your MDX files:

```markdown
![Alt text describing the image](/images/blogs/your-image-name.png)
```

**Example:**
```markdown
![Time blocking calendar example](/images/blogs/5%20time%20blocking.png)
```

**Note:** If your filename has spaces, use `%20` to encode them, or better yet, use hyphens or underscores in filenames.

## Method 2: Using the Image Component (For More Control)

If you need more control over image sizing or styling, you can use the Next.js Image component directly:

```jsx
<Image 
  src="/images/blogs/your-image.png" 
  alt="Description of image"
  width={800}
  height={450}
/>
```

## Best Practices

### 1. Image Naming
- Use descriptive, lowercase filenames with hyphens: `time-blocking-calendar.png`
- Avoid spaces in filenames (use hyphens or underscores instead)
- Include the blog post slug in the filename for easy identification

### 2. Image Optimization
- Recommended size: 800-1200px width for blog images
- Format: PNG for screenshots/diagrams, JPG for photos
- Compress images before uploading to reduce file size

### 3. Alt Text
- Always include descriptive alt text for accessibility
- Describe what the image shows, not just "image" or "screenshot"

### 4. Image Placement
- Place images after relevant paragraphs
- Use images to break up long sections of text
- Consider adding captions in the surrounding text

## Example Blog Post with Images

```markdown
---
title: "My Blog Post"
description: "A great post about productivity"
date: "2025-01-15"
---

## Introduction

Here's some text about the topic.

![Productivity workspace setup](/images/blogs/workspace-setup.png)

## Main Content

More content here with another image:

![Time blocking example](/images/blogs/time-blocking.png)
```

## File Structure

```
public/
  images/
    blogs/
      your-image-1.png
      your-image-2.jpg
      workspace-setup.png
```

## Tips

- Images are automatically optimized by Next.js
- All images in `public/` are served from the root URL
- Use relative paths starting with `/images/blogs/`
- The images will work in both light and dark mode automatically
