import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '蔡蔡的博客',
  authors: [{ name: '蔡蔡' }],
  description: 'React + Next.js + Tailwindcss + Typescript 练手项目',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  )
}
