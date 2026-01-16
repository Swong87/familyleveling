import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import Script from 'next/script'

export const metadata: Metadata = {
  metadataBase: new URL('https://familyleveling.com'),
  title: {
    default: 'Productivity Tips for WFH Tech Parents | Family Leveling',
    template: '%s | Family Leveling',
  },
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
    'work from home blog',
    'tech parent blog',
    'productivity blog',
    'WFH workspace setup',
    'time management for parents',
  ],
  authors: [{ name: 'Family Leveling' }],
  creator: 'Family Leveling',
  publisher: 'Family Leveling',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://familyleveling.com',
    siteName: 'Family Leveling',
    title: 'Productivity Tips for WFH Tech Parents | Family Leveling',
    description: 'Practical productivity tips, tools, and strategies for work-from-home parents in tech and web development.',
    images: [
      {
        url: '/images/about/logo-hor.png',
        width: 1200,
        height: 630,
        alt: 'Family Leveling - Productivity Blog for WFH Tech Parents',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Productivity Tips for WFH Tech Parents',
    description: 'Learn how to balance your tech career with family life.',
    images: ['/images/about/logo-hor.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
  alternates: {
    canonical: 'https://familyleveling.com',
  },
  category: 'Blog',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-RLLX0D28R6"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-RLLX0D28R6');
    `}
        </Script>
        <link rel="icon" href="/images/about/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#9333ea" />
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://www.google-analytics.com https://analytics.google.com; base-uri 'self'; form-action 'self';"
        />
      </head>

      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}

