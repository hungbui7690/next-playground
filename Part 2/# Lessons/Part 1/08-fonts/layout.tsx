/*
  Fonts - Google Fonts
  - Automatically self-host any Google Font. Fonts are included in the deployment and served from the same domain as your deployment. No requests are sent to Google by the browser.
  - https://nextjs.org/docs/pages/building-your-application/optimizing/fonts


******************************

  1. app/layout.tsx


*/

import './globals.css'
import Navbar from '@/components/Navbar'
import { Inter, Inconsolata, Roboto } from 'next/font/google' // 1.

const inter = Inter({ subsets: ['latin'] }) // 2.
const incosolata = Inconsolata({ subsets: ['latin'] })
const roboto = Roboto({ subsets: ['latin'], weight: ['400'] })

// prettier-ignore
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      {/* 3. */}
      <body className={incosolata.className}>
        <Navbar />
        <main className='max-w-3xl mx-auto py-10'>{children}</main>
      </body>
    </html>
  );
}
