# Family Leveling - Etsy Shop Landing Page

A modern, friendly landing page for the Family Leveling Etsy shop featuring funny family shirts for gamers and movie lovers.

## Features

- **Hero Section**: Eye-catching title and introduction
- **Short Intro**: Brand story and mission
- **Featured Products**: Showcase of top products with links to Etsy listings
- **Collections**: Browse by category (Gamer shirts, Theme park shirts, Movie shirts)
- **About Section**: Friendly family story behind the shop
- **Responsive Design**: Works beautifully on all devices

## Getting Started

### Prerequisites

- Node.js 18+ and npm (or yarn/pnpm)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Customization

### Update Product Links

Edit `app/page.tsx` and replace the placeholder URLs in the `featuredProducts` array with your actual Etsy product links.

### Update Product Images

Replace the placeholder image URLs with your actual product images. You can:
- Host images on your Etsy shop
- Use a CDN or image hosting service
- Store images in the `public` folder and reference them as `/image-name.jpg`

### Update Collection Links

Edit the `collections` array in `app/page.tsx` with your actual Etsy collection/section URLs.

### Update Etsy Shop URL

Replace all instances of `https://www.etsy.com/shop/FamilyLeveling` with your actual Etsy shop URL.

## Tech Stack

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Next.js Image**: Optimized image loading
- **Next.js Link**: Client-side navigation

## Project Structure

```
familyleveling/
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Main landing page
├── components/
│   ├── ProductCard.tsx  # Product display component
│   └── CollectionCard.tsx # Collection display component
└── public/              # Static assets (add your images here)
```

## Deployment to GitHub Pages

This project is configured for static export and deployment to GitHub Pages.

### Automated Deployment (Recommended)

1. **Enable GitHub Pages in your repository**:
   - Go to Settings → Pages
   - Under "Source", select "GitHub Actions"

2. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

3. **The GitHub Action will automatically**:
   - Build your Next.js site
   - Deploy it to GitHub Pages
   - Use your custom domain (familyleveling.com) from the CNAME file

The workflow (`.github/workflows/deploy.yml`) will run on every push to the `main` branch.

### Manual Deployment

If you prefer to deploy manually:

1. **Build the site**:
   ```bash
   npm run build
   ```

2. **The static files will be in the `out` folder**

3. **Configure GitHub Pages**:
   - Go to Settings → Pages
   - Select "Deploy from a branch"
   - Choose the branch and set the folder to `/out` (you'll need to commit the out folder)
   - Or use the `gh-pages` branch method

### Custom Domain

The `CNAME` file is already configured for `familyleveling.com`. Make sure your domain's DNS is configured to point to GitHub Pages (see GitHub's documentation for DNS settings).