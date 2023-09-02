import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import React from "react";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Watch Together',
    description: 'Watch Together: Watch and enjoy YouTube, Dailymotion, and more with friends in real-time, wherever they are.',
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
      <head>
          <link rel="manifest" href="/manifest.json"/>
          <title>{`${metadata.title}`}</title>
      </head>
      <body className={inter.className}>{children}</body>
      </html>
  )
}
