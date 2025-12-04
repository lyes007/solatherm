import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'SolaTherm - Solutions d\'Énergie Solaire à Tunis',
  description: 'SolaTherm installe des systèmes photovoltaïques et des solutions solaires pour les clients résidentiels et commerciaux à Tunis, Tunisie.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}

