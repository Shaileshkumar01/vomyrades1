import React from "react"
import type { Metadata } from 'next'
import { DM_Sans, DM_Mono } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans"
})

const dmMono = DM_Mono({ 
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono"
})

export const metadata: Metadata = {
  title: 'Vomyra - AI Voice Agents for India',
  description: 'Deploy AI voice agents that handle calls, book appointments, and close leads - 24/7, in any Indian language. No coding needed.',
  keywords: ['AI voice agents', 'voice AI', 'Indian languages', 'call automation', 'AI phone agents'],
  authors: [{ name: 'Vomyra' }],
  openGraph: {
    title: 'Vomyra - AI Voice Agents for India',
    description: 'Deploy AI voice agents that handle calls, book appointments, and close leads - 24/7, in any Indian language.',
    type: 'website',
    url: 'https://vomyra.com',
    siteName: 'Vomyra',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vomyra - AI Voice Agents for India',
    description: 'Deploy AI voice agents that handle calls, book appointments, and close leads - 24/7, in any Indian language.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${dmSans.variable} ${dmMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
