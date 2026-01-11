'use client'

import { useEffect, useState } from 'react'

interface ViewCounterProps {
  slug: string
}

// This component tracks page views for blog posts
// For static sites, it uses a combination of localStorage and an external API
// You can integrate with services like: Supabase, Firebase, or a custom serverless function
export default function ViewCounter({ slug }: ViewCounterProps) {
  const [views, setViews] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const trackAndFetchViews = async () => {
      try {
        // Check if user has already viewed this post in this session
        const viewedPosts = sessionStorage.getItem('viewedPosts')
        const viewedPostsArray = viewedPosts ? JSON.parse(viewedPosts) : []
        const hasViewed = viewedPostsArray.includes(slug)

        // Try to use external API if configured
        const apiEndpoint = process.env.NEXT_PUBLIC_VIEWS_API_URL
        
        if (apiEndpoint) {
          // Use external API (e.g., Supabase, Firebase, or custom serverless function)
          const response = await fetch(`${apiEndpoint}/views`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
              slug,
              increment: !hasViewed 
            }),
          })

          if (response.ok) {
            const data = await response.json()
            setViews(data.views)
            
            if (!hasViewed) {
              viewedPostsArray.push(slug)
              sessionStorage.setItem('viewedPosts', JSON.stringify(viewedPostsArray))
            }
            setIsLoading(false)
            return
          }
        }

        // Fallback to localStorage for demo/development
        const storageKey = `blog_views_${slug}`
        const currentViews = localStorage.getItem(storageKey)
        let viewCount = currentViews ? parseInt(currentViews) : 0
        
        // Increment if not viewed in this session
        if (!hasViewed) {
          viewCount += 1
          localStorage.setItem(storageKey, viewCount.toString())
          viewedPostsArray.push(slug)
          sessionStorage.setItem('viewedPosts', JSON.stringify(viewedPostsArray))
        }
        
        setViews(viewCount)
      } catch (error) {
        console.error('Error tracking view:', error)
        // Silently fail and show 0 views
        setViews(0)
      } finally {
        setIsLoading(false)
      }
    }

    trackAndFetchViews()
  }, [slug])

  if (isLoading) {
    return (
      <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 animate-pulse">
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
        <span>...</span>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>
      <span aria-label={`${views?.toLocaleString() || 0} page views`}>
        {views?.toLocaleString() || 0} views
      </span>
    </div>
  )
}
