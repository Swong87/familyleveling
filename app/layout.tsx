import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://familyleveling.com'),
  title: {
    default: 'Family Leveling - Funny Family Shirts for Gamers & Movie Lovers',
    template: '%s | Family Leveling',
  },
  description: 'Level up your family style with cute and funny family tees for gamers and adventurers. Matching shirts that celebrate progress, teamwork, and laughter. Shop gaming-themed family apparel on Etsy.',
  keywords: [
    'family shirts',
    'gaming family shirts',
    'matching family tees',
    'gamer family apparel',
    'funny family shirts',
    'family leveling',
    'gaming themed shirts',
    'matching family outfits',
    'gamer parent shirts',
    'family game night shirts',
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
    title: 'Family Leveling - Funny Family Shirts for Gamers & Movie Lovers',
    description: 'Level up your family style with cute and funny family tees for gamers and adventurers. Matching shirts that celebrate progress, teamwork, and laughter.',
    images: [
      {
        url: '/images/hero/3lifestyle.jpg',
        width: 1200,
        height: 630,
        alt: 'Family Leveling - Gaming family wearing matching shirts',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Family Leveling - Funny Family Shirts for Gamers & Movie Lovers',
    description: 'Level up your family style with cute and funny family tees for gamers and adventurers.',
    images: ['/images/hero/3lifestyle.jpg'],
    creator: '@FamilyLeveling',
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
  category: 'E-commerce',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/about/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#9333ea" />
      </head>
      <body>{children}</body>
    </html>
  )
}

