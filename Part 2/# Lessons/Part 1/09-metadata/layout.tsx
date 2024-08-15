/*
  Metadata
  - Next.js has a Metadata API that can be used to define your application metadata (e.g. meta and link tags inside your HTML head element) for improved SEO and web shareability.To define static metadata, export a Metadata object from a layout.tsx or page.tsx file.
  - https://nextjs.org/docs/app/building-your-application/optimizing/metadata


******************************

  1. app/layout.tsx
  2. test -> inspect element -> <head>


*/

import './globals.css'
import Navbar from '@/components/Navbar'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next' // 1.

// 2.
export const metadata: Metadata = {
  title: 'Next.js Project',
  description: 'A Next.js project with TypeScript and TailwindCSS.',
  keywords: 'Next.js, Typescript, TailwindCSS',
}

const inter = Inter({ subsets: ['latin'] })
// prettier-ignore
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        <main className='max-w-3xl mx-auto py-10'>{children}</main>
      </body>
    </html>
  );
}
