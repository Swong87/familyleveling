import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - Family Leveling',
  description: 'Learn about Family Leveling and our mission to help work-from-home tech parents balance career growth with family time.',
  alternates: {
    canonical: 'https://familyleveling.com/about',
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header currentPage="about" />

      <main className="max-w-4xl mx-auto px-4 md:px-8 py-16">
        <article className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Family Leveling
          </h1>

          <div className="prose prose-lg max-w-none dark:prose-invert">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Family Leveling is dedicated to helping work-from-home parents in tech and web development 
              achieve productivity while enjoying quality family time. We understand the unique challenges 
              of building a tech career while raising a family.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              What We Cover
            </h2>
            <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700 dark:text-gray-300">
              <li className="ml-4 leading-relaxed">Time management and productivity strategies</li>
              <li className="ml-4 leading-relaxed">Home office setup and workspace optimization</li>
              <li className="ml-4 leading-relaxed">Automation tools and productivity apps</li>
              <li className="ml-4 leading-relaxed">Communication strategies for remote teams</li>
              <li className="ml-4 leading-relaxed">Work-life balance tips from real parents</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Our Values
            </h2>
            <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700 dark:text-gray-300">
              <li className="ml-4 leading-relaxed"><strong>Practical Over Perfect:</strong> We share real-world solutions that work for busy parents</li>
              <li className="ml-4 leading-relaxed"><strong>Experience-Driven:</strong> Our content comes from parents who live these challenges daily</li>
              <li className="ml-4 leading-relaxed"><strong>Community-Focused:</strong> We believe in lifting each other up and sharing what works</li>
              <li className="ml-4 leading-relaxed"><strong>Always Learning:</strong> The work-from-home landscape is evolving, and so are we</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Editorial Standards
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              We maintain high editorial standards to ensure our content is accurate, helpful, and trustworthy:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700 dark:text-gray-300">
              <li className="ml-4 leading-relaxed">All articles are written by work-from-home tech parents with relevant experience</li>
              <li className="ml-4 leading-relaxed">We test tools and strategies before recommending them</li>
              <li className="ml-4 leading-relaxed">Content is regularly updated to reflect current best practices</li>
              <li className="ml-4 leading-relaxed">We clearly disclose any affiliations or sponsored content</li>
              <li className="ml-4 leading-relaxed">Articles include publication and last-updated dates for transparency</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Contact Us
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Have suggestions for topics you'd like us to cover? Want to share your own WFH success story? 
              We'd love to hear from you! Check back soon for contact information as we continue building 
              this community.
            </p>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}
