import { BlogPost } from '@/lib/mdx'

interface PostHeaderProps {
  post: BlogPost
}

export default function PostHeader({ post }: PostHeaderProps) {
  return (
    <header className="mb-8">
      {!post.image && (
        <div className="mb-4">
          <span className="bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 px-4 py-2 rounded-full text-sm font-semibold">
            {post.category}
          </span>
        </div>
      )}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
        {post.title}
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
        {post.description}
      </p>
      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-gray-700 dark:text-gray-300">By {post.author}</span>
        </div>
        <span>•</span>
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
      {post.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-6">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="bg-purple-50 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-md text-sm font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </header>
  )
}
