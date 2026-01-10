import Link from 'next/link'
import Image from 'next/image'
import { BlogPost } from '@/lib/mdx'

interface RelatedPostsProps {
  posts: BlogPost[]
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null

  return (
    <section className="my-12" aria-labelledby="related-posts-heading">
      <h2
        id="related-posts-heading"
        className="text-3xl font-bold text-gray-900 dark:text-white mb-6"
      >
        Related Articles
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
          >
            {post.image && (
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  unoptimized={true}
                />
              </div>
            )}
            
            <div className="p-4">
              <span className="text-xs font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wide">
                {post.category}
              </span>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-2 mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                {post.description}
              </p>
              <div className="mt-3 text-xs text-gray-500 dark:text-gray-500">
                {post.readingTime}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
