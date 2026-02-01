import Image from 'next/image'
import Link from 'next/link'

interface AmazonProductCardProps {
  url: string
  title: string
  description?: string
  imageUrl?: string
  price?: string
}

/**
 * Amazon Product Card Component
 * 
 * Displays Amazon products with affiliate links for monetization.
 * 
 * Usage in MDX:
 * <AmazonProductCard 
 *   url="https://amzn.to/4bpzueH" 
 *   title="Pomodoro Timer"
 *   description="Visual countdown timer perfect for time blocking"
 * />
 */
export default function AmazonProductCard({
  url,
  title,
  description,
  imageUrl,
  price
}: AmazonProductCardProps) {

  return (
    <div className="my-8 bg-gradient-to-br from-orange-50 to-purple-50 dark:from-orange-900/20 dark:to-purple-900/20 rounded-2xl p-4 sm:p-6 border-2 border-orange-200 dark:border-orange-800 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
        {/* Product Image (if provided) */}
        {imageUrl && (
          <div className="flex-shrink-0 w-full sm:w-32 h-48 sm:h-32 relative rounded-lg overflow-hidden bg-white dark:bg-gray-800">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-contain"
              sizes="(max-width: 640px) 100vw, 128px"
            />
          </div>
        )}

        {/* Product Info */}
        <div className="flex-1 min-w-0 w-full">
          <div className="flex items-start justify-between gap-4">
            <div className="w-full">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
                {title}
              </h3>
              {description && (
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  {description}
                </p>
              )}
              {price && (
                <p className="text-xl sm:text-2xl font-bold text-green-600 dark:text-green-400 mb-3">
                  {price}
                </p>
              )}
            </div>
          </div>

          {/* CTA Button */}
          <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg w-full sm:w-auto text-sm sm:text-base"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M.75 9.828a.75.75 0 0 1 1.06 0L6 14.016l4.19-4.188a.75.75 0 1 1 1.06 1.061l-4.72 4.72a.75.75 0 0 1-1.06 0l-4.72-4.72a.75.75 0 0 1 0-1.061Z" />
              <path d="M6.75 3a.75.75 0 0 0-1.5 0v11.25a.75.75 0 0 0 1.5 0V3Z" />
              <path d="M16.5 9a.75.75 0 0 0-.75.75v3.75h-3.75a.75.75 0 0 0 0 1.5h3.75v3.75a.75.75 0 0 0 1.5 0v-3.75h3.75a.75.75 0 0 0 0-1.5h-3.75V9.75a.75.75 0 0 0-.75-.75Z" />
            </svg>
            View on Amazon
          </Link>

          {/* Affiliate Disclosure */}
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-3 italic">
            As an Amazon Associate, we earn from qualifying purchases. This helps support our blog at no extra cost to you.
          </p>
        </div>
      </div>

      {/* Amazon Badge */}
      <div className="flex items-center gap-2 mt-4 pt-4 border-t border-orange-200 dark:border-orange-800">
        <img 
          src="/images/blogs/Amazon_logo.svg"
          alt="Amazon"
          className="h-5 sm:h-6 w-auto dark:invert dark:brightness-90"
        />
        <span className="text-xs text-gray-500 dark:text-gray-400">
          Trusted marketplace
        </span>
      </div>
    </div>
  )
}