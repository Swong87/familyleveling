import Link from 'next/link'
import { getFeaturedPosts, getAllPosts } from '@/lib/mdx'
import PostCard from '@/components/PostCard'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

export const metadata = {
  title: 'Productivity Tips for WFH Tech Parents | Family Leveling',
  description: 'Practical productivity tips, tools, and strategies for work-from-home parents in tech and web development. Learn how to balance career growth with family time.',
  keywords: [
    'WFH parents',
    'work from home productivity',
    'tech parent tips',
    'web developer work life balance',
    'remote work with kids',
    'productivity for parents',
    'WFH tips',
    'tech career family balance',
    'developer productivity',
    'remote work strategies',
  ],
  openGraph: {
    title: 'Productivity Tips for WFH Tech Parents | Family Leveling',
    description: 'Practical productivity tips, tools, and strategies for work-from-home parents in tech and web development.',
    type: 'website',
    url: 'https://familyleveling.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Productivity Tips for WFH Tech Parents',
    description: 'Learn how to balance your tech career with family life.',
  },
}

export default function Home() {
  const featuredPosts = getFeaturedPosts()
  const allPosts = getAllPosts()
  const recentPosts = allPosts.slice(0, 6)

  // Structured data for SEO
  const websiteStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Family Leveling',
    url: 'https://familyleveling.com',
    description: 'Productivity tips and strategies for work-from-home parents in tech and web development. Learn how to balance career growth with family time.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://familyleveling.com/blog?search={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }

  const organizationStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Family Leveling',
    url: 'https://familyleveling.com',
    description: 'A blog dedicated to helping WFH parents in tech and web development achieve productivity while enjoying family time.',
    sameAs: [],
  }

  const blogStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Family Leveling Blog',
    description: 'Productivity tips for WFH tech parents',
    url: 'https://familyleveling.com/blog',
    publisher: {
      '@type': 'Organization',
      name: 'Family Leveling',
    },
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Structured Data for SEO - JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogStructuredData),
        }}
      />

      <Header currentPage="home" />

      <main>
        {/* Hero Section */}
        <section
          className="relative w-full bg-gradient-to-br from-purple-100 to-orange-100 dark:from-purple-900 dark:to-orange-900 overflow-hidden py-20 md:py-32"
          aria-label="Hero section"
        >
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Productivity Tips for WFH Tech Parents
              </h1>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                Learn how to balance your tech career with family life. Practical tips, tools, and strategies from parents who've been there.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/blog"
                  className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl text-center"
                >
                  View All Blogs
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white dark:bg-gray-900" aria-label="About the author">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-[200px,1fr] lg:grid-cols-[250px,1fr] gap-8 items-center">
                {/* Photo */}
                <div className="mx-auto md:mx-0">
                  <Image
                    src="/images/about/about-me.jpeg"
                    alt="Stephen Wong at his home office"
                    width={250}
                    height={250}
                    className="rounded-full w-48 h-48 md:w-full md:h-full object-cover shadow-lg"
                    priority
                  />
                </div>

                {/* Introduction */}
                <div>
                  <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    Hi, I'm <strong className="text-purple-600 dark:text-purple-400">Stephen</strong> — a remote web developer and dad of two, sharing what actually works for me in building a tech career from home while being present for my family.
                  </p>
                  <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                    No hustle culture. No generic advice. Just practical systems I'm testing in real time — between meetings, school drop-offs, and half-finished cups of coffee.
                  </p>
                  <Link
                    href="/about"
                    className="inline-block mt-6 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-semibold group"
                  >
                    More about me
                    <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts Section */}
        {featuredPosts.length > 0 && (
          <section className="py-20 px-4 bg-white dark:bg-gray-900 relative" aria-label="Featured articles">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                  Featured Articles
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  Start here with our most popular productivity tips and strategies
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredPosts.map((post, index) => (
                  <PostCard key={post.slug} post={post} priority={index === 0} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Recent Posts Section */}
        {recentPosts.length > 0 && (
          <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800 relative" aria-label="Recent articles">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-12">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                    Latest Articles
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-400">
                    Fresh productivity tips and insights
                  </p>
                </div>
                <Link
                  href="/blog"
                  className="hidden md:block text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-semibold"
                >
                  View All →
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {recentPosts.map((post, index) => (
                  <PostCard key={post.slug} post={post} priority={featuredPosts.length === 0 && index === 0} />
                ))}
              </div>
              <div className="text-center mt-12 md:hidden">
                <Link
                  href="/blog"
                  className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  View All Articles →
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* About Section */}
        {/* <section className="py-20 px-4 bg-gradient-to-br from-purple-100 to-orange-100 dark:from-purple-900 dark:to-orange-900 relative overflow-hidden" aria-label="About Family Leveling">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              About Family Leveling
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              We're a community of work-from-home parents navigating the unique challenges of building a tech career while raising a family.
              This blog is our shared space for productivity tips, tools, and strategies that actually work in real life.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Whether you're a developer, designer, or tech professional, you'll find practical advice on time management, workspace setup,
              automation tools, and maintaining work-life balance—all from parents who understand the juggle.
            </p>
          </div>
        </section> */}

        {/* Newsletter CTA Section */}
        <section className="py-20 px-4 bg-white dark:bg-gray-900" aria-label="Stay updated">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Stay Updated
            </h2>
            {/* <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Get the latest productivity tips delivered to your inbox
            </p> */}
            <div className="bg-gradient-to-r from-purple-100 to-orange-100 dark:from-purple-900 dark:to-orange-900 rounded-2xl p-8">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                New articles published weekly with actionable tips for WFH tech parents.
              </p>
              {/* <p className="text-sm text-gray-600 dark:text-gray-400">
                (Newsletter coming soon - check back regularly for new content!)
              </p> */}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
