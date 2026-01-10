import Link from 'next/link'
import ThemeToggle from '@/components/ThemeToggle'

interface HeaderProps {
  currentPage?: 'home' | 'blog' | 'about'
}

export default function Header({ currentPage }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-purple-700 dark:text-purple-400">
            Family Leveling
          </Link>
          <div className="flex items-center gap-6">
            <nav className="flex gap-6" aria-label="Main navigation">
              <Link
                href="/"
                className={`hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors min-h-[48px] flex items-center ${
                  currentPage === 'home'
                    ? 'text-purple-600 dark:text-purple-400'
                    : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                Home
              </Link>
              <Link
                href="/blog"
                className={`hover:text-purple-600 dark:hover:text-purple-400 transition-colors min-h-[48px] flex items-center ${
                  currentPage === 'blog'
                    ? 'text-purple-600 dark:text-purple-400 font-semibold'
                    : 'text-gray-700 dark:text-gray-300 font-medium'
                }`}
              >
                Blog
              </Link>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
