import { notFound } from 'next/navigation'
import { getPostBySlug, getAllPosts, getRelatedPosts } from '@/lib/mdx'
import PostHeader from '@/components/PostHeader'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ReadingProgress from '@/components/ReadingProgress'
import TableOfContents from '@/components/TableOfContents'
import Breadcrumbs from '@/components/Breadcrumbs'
import AuthorBox from '@/components/AuthorBox'
import RelatedPosts from '@/components/RelatedPosts'
import NewsletterCTA from '@/components/NewsletterCTA'
import CodeBlock from '@/components/CodeBlock'
import KeyTakeaways from '@/components/KeyTakeaways'
import FAQSection from '@/components/FAQSection'
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

  const canonicalUrl = `https://familyleveling.com/blog/${post.slug}`

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    authors: [{ name: post.author }],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.lastModified,
      authors: [post.author],
      tags: post.tags,
      url: canonicalUrl,
      images: post.image ? [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: post.image ? [post.image] : undefined,
    },
  }
}

const mdxComponents = {
  h1: (props: any) => <h1 id={props.children?.toString().toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-')} className="text-4xl font-bold text-gray-900 dark:text-white mt-8 mb-4 scroll-mt-20" {...props} />,
  h2: (props: any) => <h2 id={props.children?.toString().toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-')} className="text-3xl font-bold text-gray-900 dark:text-white mt-8 mb-4 scroll-mt-20" {...props} />,
  h3: (props: any) => <h3 id={props.children?.toString().toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-')} className="text-2xl font-bold text-gray-900 dark:text-white mt-6 mb-3 scroll-mt-20" {...props} />,
  p: (props: any) => <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6 max-w-prose" {...props} />,
  ul: (props: any) => <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700 dark:text-gray-300 max-w-prose" {...props} />,
  ol: (props: any) => <ol className="list-decimal list-inside mb-6 space-y-2 text-gray-700 dark:text-gray-300 max-w-prose" {...props} />,
  li: (props: any) => <li className="ml-4 leading-relaxed" {...props} />,
  strong: (props: any) => <strong className="font-bold text-gray-900 dark:text-white" {...props} />,
  a: (props: any) => <a className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 underline" {...props} />,
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-purple-500 dark:border-purple-400 pl-6 italic text-gray-600 dark:text-gray-400 my-6 py-2" {...props} />
  ),
  code: (props: any) => {
    const { children, className } = props
    if (className) {
      return <CodeBlock className={className}>{children}</CodeBlock>
    }
    return <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono text-gray-800 dark:text-gray-200" {...props} />
  },
  pre: (props: any) => {
    const { children } = props
    return <div className="my-6">{children}</div>
  },
  img: (props: any) => (
    <div className="my-8 rounded-lg overflow-hidden shadow-lg">
      <Image
        src={props.src}
        alt={props.alt || ''}
        width={800}
        height={450}
        className="w-full h-auto"
        unoptimized={true}
        loading="lazy"
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
        loading="lazy"
      />
    </div>
  ),
  KeyTakeaways,
  FAQSection,
  NewsletterCTA,
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(post.slug, 3)

  // Enhanced structured data for blog post
  const blogPostStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: post.image ? `https://familyleveling.com${post.image}` : undefined,
    author: {
      '@type': 'Person',
      name: post.author,
      url: 'https://familyleveling.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Family Leveling',
      url: 'https://familyleveling.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://familyleveling.com/images/about/logo.jpg',
      },
    },
    datePublished: post.date,
    dateModified: post.lastModified || post.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://familyleveling.com/blog/${post.slug}`,
    },
    keywords: post.tags.join(', '),
    articleSection: post.category,
    wordCount: post.content.split(/\s+/).length,
  }

  // Breadcrumb items
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: post.title, href: `/blog/${post.slug}` },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Reading Progress Bar */}
      <ReadingProgress />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogPostStructuredData),
        }}
      />

      <Header currentPage="blog" />

      <main className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8">
            {/* Breadcrumbs */}
            <Breadcrumbs items={breadcrumbItems} />

            <Link
              href="/blog"
              className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 mb-8 font-medium min-h-[48px]"
            >
              ← Back to Blog
            </Link>

            <article className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              {/* Featured Image */}
              {post.image && (
                <div className="relative w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={1200}
                    height={630}
                    className="object-cover w-full h-auto"
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

                {/* Author Box */}
                <AuthorBox author={post.author} />
              </div>
            </article>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="mt-12">
                <RelatedPosts posts={relatedPosts} />
              </div>
            )}

            {/* Newsletter CTA */}
            <div className="mt-12">
              <NewsletterCTA variant="card" />
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-8">
              <TableOfContents content={post.content} />
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  )
}
