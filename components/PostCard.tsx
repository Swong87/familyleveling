import Link from 'next/link'
import Image from 'next/image'
import { BlogPost } from '@/lib/mdx'

interface PostCardProps {
  post: BlogPost
  featured?: boolean
}

export default function PostCard({ post, featured = false }: PostCardProps) {
  const postUrl = `/blog/${post.slug}`
  
  return (
    <article className={`group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ${featured ? 'lg:col-span-2' : ''}`}>
      <Link href={postUrl} className="block">
        <div className={`relative ${featured ? 'h-64 lg:h-80' : 'h-48'}`}>
          <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-orange-100 dark:from-purple-900 dark:to-orange-900" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl opacity-20 dark:opacity-10">📝</span>
          </div>
          <div className="absolute top-4 left-4">
            <span className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-purple-700 dark:text-purple-400">
              {post.category}
            </span>
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-3">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <span>•</span>
            <span>{post.readingTime}</span>
          </div>
          <h2 className={`font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors ${featured ? 'text-2xl lg:text-3xl' : 'text-xl'}`}>
            {post.title}
          </h2>
          <p className={`text-gray-600 dark:text-gray-300 mb-4 ${featured ? 'text-lg' : 'text-base'}`}>
            {post.description}
          </p>
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="bg-purple-50 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 px-2 py-1 rounded-md text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          <div className="flex items-center text-purple-600 dark:text-purple-400 font-semibold group-hover:gap-2 transition-all">
            <span>Read more</span>
            <span className="ml-1 group-hover:ml-2 transition-all">→</span>
          </div>
        </div>
      </Link>
    </article>
  )
}
