import Link from 'next/link'

export default function Footer() {
  return (
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
              <li>
                <Link href="/blog/category/productivity" className="hover:text-white transition-colors">
                  Productivity
                </Link>
              </li>
              <li>
                <Link href="/blog/category/workspace" className="hover:text-white transition-colors">
                  Workspace
                </Link>
              </li>
              <li>
                <Link href="/blog/category/tools" className="hover:text-white transition-colors">
                  Tools
                </Link>
              </li>
              <li>
                <Link href="/blog/category/communication" className="hover:text-white transition-colors">
                  Communication
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 dark:border-gray-900 pt-6 text-center">
          <p className="text-gray-400 dark:text-gray-500">© {new Date().getFullYear()} Family Leveling. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
