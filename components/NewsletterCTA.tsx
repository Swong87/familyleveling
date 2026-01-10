'use client'

interface NewsletterCTAProps {
  variant?: 'inline' | 'card' | 'banner'
  className?: string
}

export default function NewsletterCTA({ variant = 'inline', className = '' }: NewsletterCTAProps) {
  if (variant === 'inline') {
    return (
      <aside
        className={`my-8 p-6 bg-gradient-to-r from-purple-100 to-orange-100 dark:from-purple-900/30 dark:to-orange-900/30 rounded-lg border-l-4 border-purple-600 dark:border-purple-400 ${className}`}
        aria-label="Newsletter signup"
      >
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          📬 Get More Productivity Tips
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Join other WFH tech parents getting weekly tips on balancing career and family.
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400 italic">
          Newsletter coming soon! Bookmark this site and check back regularly.
        </p>
      </aside>
    )
  }

  if (variant === 'banner') {
    return (
      <div
        className={`bg-purple-600 dark:bg-purple-700 text-white p-6 rounded-lg shadow-lg ${className}`}
        role="region"
        aria-label="Newsletter signup"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-2">
            Level Up Your Productivity
          </h3>
          <p className="mb-4">
            Weekly tips for WFH tech parents delivered to your inbox.
          </p>
          <p className="text-sm opacity-90">
            (Newsletter launching soon - stay tuned!)
          </p>
        </div>
      </div>
    )
  }

  // card variant
  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 ${className}`}
      role="complementary"
      aria-label="Newsletter signup"
    >
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Stay Connected
      </h3>
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        Get practical productivity tips and strategies for balancing your tech career with family life. 
        Written by parents who understand the challenges.
      </p>
      <div className="bg-gradient-to-r from-purple-100 to-orange-100 dark:from-purple-900/30 dark:to-orange-900/30 rounded-lg p-6">
        <p className="text-gray-700 dark:text-gray-300 font-medium mb-2">
          🚀 New articles every week
        </p>
        <p className="text-gray-700 dark:text-gray-300 font-medium mb-4">
          📚 Curated tools & resources
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Newsletter coming soon! Check back regularly for new content.
        </p>
      </div>
    </div>
  )
}
