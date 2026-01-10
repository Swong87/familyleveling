import { notFound } from 'next/navigation'
import { getPostBySlug, getAllPosts } from '@/lib/mdx'
import PostHeader from '@/components/PostHeader'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Link from 'next/link'
import Image from 'next/image'
import ThemeToggle from '@/components/ThemeToggle'
import type { Metadata } from 'next'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  }
}

const mdxComponents = {
  h1: (props: any) => <h1 className="text-4xl font-bold text-gray-900 dark:text-white mt-8 mb-4" {...props} />,
  h2: (props: any) => <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-8 mb-4" {...props} />,
  h3: (props: any) => <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-6 mb-3" {...props} />,
  p: (props: any) => <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4" {...props} />,
  ul: (props: any) => <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700 dark:text-gray-300" {...props} />,
  ol: (props: any) => <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-700 dark:text-gray-300" {...props} />,
  li: (props: any) => <li className="ml-4" {...props} />,
  strong: (props: any) => <strong className="font-bold text-gray-900 dark:text-white" {...props} />,
  a: (props: any) => <a className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 underline" {...props} />,
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-purple-500 dark:border-purple-400 pl-4 italic text-gray-600 dark:text-gray-400 my-4" {...props} />
  ),
  code: (props: any) => (
    <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono text-gray-800 dark:text-gray-200" {...props} />
  ),
  pre: (props: any) => (
    <pre className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-lg overflow-x-auto my-4" {...props} />
  ),
  img: (props: any) => (
    <div className="my-8 rounded-lg overflow-hidden shadow-lg">
      <Image
        src={props.src}
        alt={props.alt || ''}
        width={800}
        height={450}
        className="w-full h-auto"
        unoptimized={true}
      />
    </div>
  ),
  Image: (props: any) => (
    <div className="my-8 rounded-lg overflow-hidden shadow-lg">
      <Image
        src={props.src}
        alt={props.alt || ''}
        width={props.width || 800}
        height={props.height || 450}
        className="w-full h-auto"
        unoptimized={true}
      />
    </div>
  ),
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  // Structured data for blog post
  const blogPostStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://familyleveling.com/blog/${post.slug}`,
    },
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogPostStructuredData),
        }}
      />

      {/* Header */}
      <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-purple-700 dark:text-purple-400">
              Family Leveling
            </Link>
            <div className="flex items-center gap-6">
              <nav className="flex gap-6">
                <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  Home
                </Link>
                <Link href="/blog" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  Blog
                </Link>
              </nav>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 md:px-8 py-12">
        <Link
          href="/blog"
          className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 mb-8 font-medium"
        >
          ← Back to Blogs
        </Link>

        <article className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          {/* Featured Image */}
          {post.image && (
            <div className="relative w-full h-64 md:h-96 mb-8">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 896px"
                priority
                unoptimized={true}
              />
              <div className="absolute top-4 left-4">
                <span className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-purple-700 dark:text-purple-400">
                  {post.category}
                </span>
              </div>
            </div>
          )}
          
          <div className="p-8 md:p-12">
            <PostHeader post={post} />
          
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <MDXRemote 
              source={post.content} 
              components={mdxComponents}
              options={{
                mdxOptions: {
                  remarkPlugins: [],
                  rehypePlugins: [],
                },
              }}
            />
          </div>
          </div>
        </article>

        {/* Related Posts Section */}
        <div className="mt-12 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">More Articles</h2>
          <div className="flex gap-4">
            <Link
              href="/blog"
              className="bg-purple-600 dark:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors"
            >
              Browse All Posts →
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-12 px-4 mt-20">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 dark:text-gray-500">© 2025 Family Leveling. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
