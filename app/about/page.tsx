import Link from 'next/link'
import ThemeToggle from '@/components/ThemeToggle'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - Family Leveling',
  description: 'Learn about Family Leveling and our mission to help work-from-home tech parents balance career growth with family time.',
  alternates: {
    canonical: 'https://familyleveling.com/about',
  },
}

export default function AboutPage() {
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
                <Link href="/blog" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors min-h-[48px] flex items-center">
                  Blog
                </Link>
              </nav>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 md:px-8 py-16">
        <article className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Family Leveling
          </h1>

          <div className="prose prose-lg max-w-none dark:prose-invert">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Family Leveling is dedicated to helping work-from-home parents in tech and web development 
              achieve productivity while enjoying quality family time. We understand the unique challenges 
              of building a tech career while raising a family.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              What We Cover
            </h2>
            <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700 dark:text-gray-300">
              <li className="ml-4 leading-relaxed">Time management and productivity strategies</li>
              <li className="ml-4 leading-relaxed">Home office setup and workspace optimization</li>
              <li className="ml-4 leading-relaxed">Automation tools and productivity apps</li>
              <li className="ml-4 leading-relaxed">Communication strategies for remote teams</li>
              <li className="ml-4 leading-relaxed">Work-life balance tips from real parents</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Our Values
            </h2>
            <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700 dark:text-gray-300">
              <li className="ml-4 leading-relaxed"><strong>Practical Over Perfect:</strong> We share real-world solutions that work for busy parents</li>
              <li className="ml-4 leading-relaxed"><strong>Experience-Driven:</strong> Our content comes from parents who live these challenges daily</li>
              <li className="ml-4 leading-relaxed"><strong>Community-Focused:</strong> We believe in lifting each other up and sharing what works</li>
              <li className="ml-4 leading-relaxed"><strong>Always Learning:</strong> The work-from-home landscape is evolving, and so are we</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Editorial Standards
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              We maintain high editorial standards to ensure our content is accurate, helpful, and trustworthy:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700 dark:text-gray-300">
              <li className="ml-4 leading-relaxed">All articles are written by work-from-home tech parents with relevant experience</li>
              <li className="ml-4 leading-relaxed">We test tools and strategies before recommending them</li>
              <li className="ml-4 leading-relaxed">Content is regularly updated to reflect current best practices</li>
              <li className="ml-4 leading-relaxed">We clearly disclose any affiliations or sponsored content</li>
              <li className="ml-4 leading-relaxed">Articles include publication and last-updated dates for transparency</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Contact Us
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Have suggestions for topics you'd like us to cover? Want to share your own WFH success story? 
              We'd love to hear from you! Check back soon for contact information as we continue building 
              this community.
            </p>
          </div>
        </article>
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
