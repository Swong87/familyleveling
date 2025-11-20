import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Family Leveling - Funny Family Shirts for Gamers & Movie Lovers',
  description: 'Level up your family style with cute and funny family tees for gamers and adventurers. Matching shirts that celebrate progress, teamwork, and laughter.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

