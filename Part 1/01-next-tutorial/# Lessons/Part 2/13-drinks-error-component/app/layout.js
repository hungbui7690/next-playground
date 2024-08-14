import { Inter } from 'next/font/google'
import './globals.css'
const inter = Inter({ subsets: ['latin'] })
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'Next.js Tutorial',
  description: 'Build awesome stuff with Next.js!',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='bg-base-200'>
      <body className={inter.className}>
        <Navbar />
        <main className='px-8 py-20 max-w-6xl mx-auto '>{children}</main>
      </body>
    </html>
  )
}
