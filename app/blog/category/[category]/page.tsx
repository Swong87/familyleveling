import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getPostsByCategory, getCategoryFromSlug, getAllCategories } from '@/lib/mdx'
import PostCard from '@/components/PostCard'
import ThemeToggle from '@/components/ThemeToggle'
import Breadcrumbs from '@/components/Breadcrumbs'
import type { Metadata } from 'next'

interface CategoryPageProps {
  params: {
    category: string
  }
}

export async function generateStaticParams() {
  const categories = getAllCategories()
  return categories.map((category) => ({
    category: category.toLowerCase().replace(/\s+/g, '-'),
  }))
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const categoryName = getCategoryFromSlug(params.category)
  
  if (!categoryName) {
    return {
      title: 'Category Not Found',
    }
  }

  const canonicalUrl = `https://familyleveling.com/blog/category/${params.category}`

  return {
    title: `${categoryName} - Blog | Family Leveling`,
    description: `Browse all ${categoryName.toLowerCase()} articles for WFH tech parents. Productivity tips, tools, and strategies.`,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${categoryName} - Blog | Family Leveling`,
      description: `Browse all ${categoryName.toLowerCase()} articles for WFH tech parents.`,
      type: 'website',
      url: canonicalUrl,
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const categoryName = getCategoryFromSlug(params.category)
  
  if (!categoryName) {
    notFound()
  }

  const posts = getPostsByCategory(categoryName)
  const allCategories = getAllCategories()

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: categoryName, href: `/blog/category/${params.category}` },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-purple-700 dark:text-purple-400">
              Family Leveling
            </Link>
            <div className="flex items-center gap-6">
              <nav className="flex gap-6" aria-label="Main navigation">
                <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors min-h-[48px] flex items-center">
                  Home
                </Link>
                <Link href="/blog" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors min-h-[48px] flex items-center">
                  Blog
                </Link>
              </nav>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        {/* Breadcrumb with structured data */}
        <Breadcrumbs items={breadcrumbItems} />

        {/* Category Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            {categoryName}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {posts.length} {posts.length === 1 ? 'article' : 'articles'} in this category
          </p>
        </div>

        {/* All Categories */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {allCategories.map((category) => {
              const isActive = category === categoryName
              const categorySlug = category.toLowerCase().replace(/\s+/g, '-')
              return (
                <Link
                  key={category}
                  href={`/blog/category/${categorySlug}`}
                  className={`px-4 py-2 rounded-full font-medium transition-colors ${
                    isActive
                      ? 'bg-purple-600 dark:bg-purple-700 text-white'
                      : 'bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-900'
                  }`}
                >
                  {category}
                </Link>
              )
            })}
          </div>
        </div>

        {/* Blog Posts Grid */}
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">
              No articles found in this category yet.
            </p>
            <Link
              href="/blog"
              className="inline-block bg-purple-600 dark:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors"
            >
              View All Posts
            </Link>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-12 px-4 mt-20" role="contentinfo">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Family Leveling</h3>
              <p className="text-gray-400 dark:text-gray-500">
                Productivity tips for WFH parents in tech and web development.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Categories</h3>
              <ul className="space-y-2 text-gray-400 dark:text-gray-500">
                <li>Productivity</li>
                <li>Workspace</li>
                <li>Tools</li>
                <li>Communication</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 dark:border-gray-900 pt-6 text-center">
            <p className="text-gray-400 dark:text-gray-500">© 2025 Family Leveling. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
