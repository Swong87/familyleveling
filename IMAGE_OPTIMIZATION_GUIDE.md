# Image Optimization Guide for Family Leveling

Since this site uses Next.js static export (`output: 'export'`), automatic image optimization is disabled. Follow this guide to manually optimize images for best performance.

## Image Format Recommendations

### 1. Use Modern Formats
- **WebP**: Primary format for all images (80-90% smaller than JPEG/PNG)
- **AVIF**: Even better compression, but less browser support
- **Fallback**: Always provide JPEG/PNG fallback for older browsers

### 2. Recommended Tools

#### Online Tools
- [Squoosh](https://squoosh.app/) - Google's image compression tool
- [TinyPNG](https://tinypng.com/) - PNG/JPEG compression
- [CloudConvert](https://cloudconvert.com/) - Batch conversion to WebP

#### CLI Tools
```bash
# Install imagemagick for batch conversion
brew install imagemagick

# Convert to WebP
convert input.jpg -quality 85 output.webp

# Batch convert all JPGs in a directory
for file in *.jpg; do
  convert "$file" -quality 85 "${file%.jpg}.webp"
done
```

#### Node.js Tools
```bash
npm install -g sharp-cli

# Convert image
sharp -i input.jpg -o output.webp --webp
```

## Image Sizes Guide

### Blog Featured Images
- **Desktop**: 1200x630px (recommended for social sharing)
- **Mobile**: 800x420px
- **Thumbnail**: 400x210px

### Blog Content Images
- **Max width**: 800px
- **Compression**: 85% quality for WebP, 80% for JPEG

### Hero/Banner Images
- **Desktop**: 1920x1080px
- **Tablet**: 1024x576px
- **Mobile**: 768x432px

## Implementation

### Using Picture Element for Multiple Formats

```html
<picture>
  <source srcset="/images/blog-post.webp" type="image/webp">
  <source srcset="/images/blog-post.jpg" type="image/jpeg">
  <img src="/images/blog-post.jpg" alt="Blog post image" loading="lazy">
</picture>
```

### Using Responsive Images

```html
<img
  src="/images/blog-small.webp"
  srcset="
    /images/blog-small.webp 400w,
    /images/blog-medium.webp 800w,
    /images/blog-large.webp 1200w
  "
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
  alt="Blog post image"
  loading="lazy"
>
```

## Optimization Checklist

### Before Adding Images

- [ ] Resize to appropriate dimensions (don't rely on CSS to scale down)
- [ ] Compress with 80-85% quality
- [ ] Convert to WebP (and optionally AVIF)
- [ ] Keep original as fallback
- [ ] Ensure alt text is descriptive and meaningful
- [ ] Use `loading="lazy"` for images below the fold
- [ ] Use `priority` or `loading="eager"` only for above-the-fold images

### Image Naming Convention

```
/public/images/
├── blogs/
│   ├── post-slug.webp (1200x630)
│   ├── post-slug.jpg (fallback)
│   └── post-slug-thumb.webp (400x210)
├── hero/
│   ├── hero-banner.webp (1920x1080)
│   └── hero-banner.jpg (fallback)
└── about/
    └── logo.webp
```

## Automated Optimization Script

Create a script to optimize all images:

```bash
#!/bin/bash
# scripts/optimize-images.sh

INPUT_DIR="public/images"
OUTPUT_DIR="public/images/optimized"

mkdir -p "$OUTPUT_DIR"

for img in "$INPUT_DIR"/**/*.{jpg,jpeg,png}; do
  filename=$(basename "$img")
  name="${filename%.*}"
  
  # Convert to WebP
  convert "$img" -quality 85 "$OUTPUT_DIR/${name}.webp"
  
  # Optimize original
  convert "$img" -quality 80 -strip "$OUTPUT_DIR/${filename}"
  
  echo "Optimized: $filename"
done
```

## Performance Targets

- **LCP (Largest Contentful Paint)**: < 2.5s
- **Image File Size**: 
  - Hero images: < 200KB
  - Blog images: < 150KB
  - Thumbnails: < 50KB

## Additional Tips

1. **Lazy Loading**: Use `loading="lazy"` for all images except above-the-fold
2. **Dimensions**: Always specify width and height to prevent CLS
3. **Alt Text**: Write descriptive alt text for accessibility and SEO
4. **Compression**: Use 85% quality for WebP (looks identical to 100% but much smaller)
5. **CDN**: Consider using a CDN like Cloudflare for image delivery

## Monitoring

Use these tools to monitor image performance:
- Chrome DevTools Network tab
- Lighthouse audit
- PageSpeed Insights
- WebPageTest

## Example: Optimized Blog Post Image

```tsx
// In your MDX or component
<div className="my-8 rounded-lg overflow-hidden shadow-lg">
  <picture>
    <source 
      srcset="/images/blogs/productivity-tips.webp" 
      type="image/webp"
    />
    <img
      src="/images/blogs/productivity-tips.jpg"
      alt="5 productivity tips for work-from-home parents"
      width={1200}
      height={630}
      loading="lazy"
      className="w-full h-auto"
    />
  </picture>
</div>
```

## Resources

- [MDN: Responsive Images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
- [Web.dev: Image Optimization](https://web.dev/fast/#optimize-your-images)
- [Squoosh App](https://squoosh.app/)
- [ImageMagick Documentation](https://imagemagick.org/index.php)
