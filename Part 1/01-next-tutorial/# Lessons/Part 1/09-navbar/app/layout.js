import { Inter } from 'next/font/google'
import './globals.css'
const inter = Inter({ subsets: ['latin'] })
import Navbar from '@/components/Navbar' // 3a.
// import Navbar from '../components/Navbar' // 3b.

export const metadata = {
  title: 'Next.js Tutorial',
  description: 'Build awesome stuff with Next.js!',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='bg-base-200'>
      <body className={inter.className}>
        {/* 4. add Navbar component + <main> */}
        <Navbar />
        <main className='px-8 py-20 max-w-6xl mx-auto '>{children}</main>
      </body>
    </html>
  )
}
