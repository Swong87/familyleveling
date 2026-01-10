import Link from 'next/link'
import { getAllPosts } from '@/lib/mdx'
import PostCard from '@/components/PostCard'
import ThemeToggle from '@/components/ThemeToggle'

export const metadata = {
  title: 'Blog - Productivity Tips for WFH Tech Parents',
  description: 'Practical productivity tips, tools, and strategies for work-from-home parents in tech and web development. Learn how to balance career growth with family time.',
  alternates: {
    canonical: 'https://familyleveling.com/blog',
  },
  openGraph: {
    title: 'Blog - Productivity Tips for WFH Tech Parents',
    description: 'Practical productivity tips, tools, and strategies for work-from-home parents in tech and web development.',
    type: 'website',
    url: 'https://familyleveling.com/blog',
  },
}

export default function BlogPage() {
  const posts = getAllPosts()

  const categories = Array.from(new Set(posts.map((post) => post.category)))

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-purple-700 dark:text-purple-400">
              Family Leveling
            </Link>
            <div className="flex items-center gap-6">
              <nav className="flex gap-6" aria-label="Main navigation">
                <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors min-h-[48px] flex items-center">
                  Home
                </Link>
                <Link href="/blog" className="text-purple-600 dark:text-purple-400 font-semibold transition-colors min-h-[48px] flex items-center">
                  Blog
                </Link>
              </nav>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Productivity Tips for WFH Tech Parents
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Learn how to balance your tech career with family life. Practical tips, tools, and strategies from parents who've been there.
          </p>
        </div>

        {/* Categories */}
        {categories.length > 0 && (
          <section className="mb-12" aria-label="Blog categories">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <Link
                  key={category}
                  href={`/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                  className="bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 px-4 py-2 rounded-full font-medium hover:bg-purple-200 dark:hover:bg-purple-900 transition-colors min-h-[48px] flex items-center"
                >
                  {category}
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 text-lg">No blog posts yet. Check back soon!</p>
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
