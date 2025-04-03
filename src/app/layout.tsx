import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import { AccessibilityProvider } from '@/components/AccessibilityProvider'
import AccessibilityButton from '@/components/AccessibilityButton'
import { WebsiteStructuredData } from '@/components/StructuredData'
import SkipToContent from '@/components/SkipToContent'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap', // Optimize font loading
})

export const metadata: Metadata = {
  title: {
    template: '%s | Ib Strømsvåg',
    default: 'Ib Strømsvåg - Portfolio',
  },
  description: 'Personal portfolio website for Ib Strømsvåg, a young developer with passion for web development, design and technology',
  keywords: ['web development', 'frontend', 'developer', 'portfolio', 'Ib Strømsvåg', 'React', 'Next.js', 'JavaScript', 'TypeScript'],
  authors: [{ name: 'Ib Strømsvåg' }],
  creator: 'Ib Strømsvåg',
  publisher: 'Ib Strømsvåg',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ibstromsvag.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Ib Strømsvåg - Portfolio',
    description: 'Personal portfolio website for Ib Strømsvåg, a young developer with passion for web development, design and technology',
    url: 'https://ibstromsvag.com',
    siteName: 'Ib Strømsvåg Portfolio',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ib Strømsvåg Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ib Strømsvåg - Portfolio',
    description: 'Personal portfolio website for Ib Strømsvåg, a young developer with passion for web development, design and technology',
    images: ['/images/og-image.jpg'],
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AccessibilityProvider>
          <SkipToContent />
          <WebsiteStructuredData 
            website={{
              name: 'Ib Strømsvåg Portfolio',
              url: 'https://ibstromsvag.com',
              description: 'Personal portfolio website for Ib Strømsvåg, a young developer with passion for web development, design and technology',
              author: {
                name: 'Ib Strømsvåg',
                url: 'https://ibstromsvag.com',
              },
            }}
          />
          <Navbar />
          <main id="main-content">
            {children}
          </main>
          <AccessibilityButton />
        </AccessibilityProvider>
      </body>
    </html>
  )
}
