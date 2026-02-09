import Header from '@/components/Header'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'
import Script from 'next/script'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About - Family Leveling | WFH Tech Parents',
  description:
    'Family Leveling helps parents working from home in tech build sustainable careers through practical systems, tools, and real-world strategies.',
  alternates: {
    canonical: 'https://familyleveling.com/about',
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header currentPage="about" />
      <Script
        id="person-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Stephen Wong",
            jobTitle: "Senior Web Developer",
            url: "https://familyleveling.com/about",
            worksFor: {
              "@type": "Organization",
              name: "Family Leveling",
              url: "https://familyleveling.com"
            },
            knowsAbout: [
              "Remote Work",
              "Web Development",
              "Productivity",
              "Work From Home",
              "Tech Careers"
            ]
          })
        }}
      />
      <main className="max-w-5xl mx-auto px-4 md:px-8 py-16">
        <article className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Family Leveling
          </h1>

          <Image
            src="/images/about/about-me.jpeg"
            alt="Stephen Wong - Family Leveling"
            width={400}
            height={400}
            className="rounded-lg mb-8 w-full max-w-md object-cover"
          />

          <div className="prose prose-lg max-w-none dark:prose-invert">
            {/* Hook */}
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              I work from home in tech. I also have two kids.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              And most advice about “remote work” seems to pretend those two things don’t exist at the same time.
            </p>
            {/* Origin Story */}
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              I started <strong>Family Leveling</strong> because I couldn’t find many honest resources for parents who are trying to build a real career in tech <em>while also being present at home</em>. Not hustle culture. Just practical systems that actually work in real life.
            </p>

            {/* Credibility */}
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              By day, I’m a <strong>Senior Web Developer</strong>, working remotely and leading front-end projects for a health system. I’ve spent years building software, automating workflows, and optimizing systems — and eventually realized I needed to apply the same mindset to my life at home.
            </p>

            {/* Philosophy */}
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Because working from home with kids isn’t just about better tools. It’s about:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700 dark:text-gray-300">
              <li className="ml-4 leading-relaxed">Setting boundaries that don’t hurt your career</li>
              <li className="ml-4 leading-relaxed">Staying visible without burning out</li>
              <li className="ml-4 leading-relaxed">Building routines that survive school schedules, sick days, and random interruptions</li>
              <li className="ml-4 leading-relaxed">Using tech to support your life — not consume it</li>
            </ul>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Family Leveling is where I share what I’m learning in real time:
            </p>

            <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700 dark:text-gray-300">
              <li className="ml-4 leading-relaxed">Productivity systems for tech parents</li>
              <li className="ml-4 leading-relaxed">Home office setups that survive kids</li>
              <li className="ml-4 leading-relaxed">Automation and tools that save actual hours</li>
              <li className="ml-4 leading-relaxed">Career strategies for staying competitive while remote</li>
            </ul>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              I’m not writing from a mountaintop. I’m writing from the middle of it — between meetings, school drop-offs, and half-finished cups of coffee.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              If you’re a parent working in tech and trying to build a sustainable remote life, you’re exactly who this site is for.
            </p>

            {/* About Me */}
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-8 mb-4">About Me</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              I’m <strong>Stephen</strong>, a remote web developer and dad of two. I enjoy building things — software, systems, and now this site.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Family Leveling is my public notebook for figuring out how to level up your career <em>without</em> sacrificing your family in the process.
            </p>

            {/* What I Believe */}
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-8 mb-4">What I Believe</h2>
            <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700 dark:text-gray-300">
              <li className="ml-4 leading-relaxed">Work should fit your life, not the other way around</li>
              <li className="ml-4 leading-relaxed">Systems beat willpower</li>
              <li className="ml-4 leading-relaxed">Remote work should feel freeing, not isolating</li>
              <li className="ml-4 leading-relaxed">Kids aren’t a productivity problem — bad systems are</li>
            </ul>

            {/* CTA */}
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Stay in Touch</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              If you want practical tips for building a sustainable remote tech life, you can follow along here on the blog. I publish guides, experiments, and real-world systems as I build them.
            </p>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}