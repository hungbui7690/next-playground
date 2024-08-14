import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NextJS Tutorial',
  description: 'Build App with NextJS',
}

// OLD: this default
// export default function RootLayout({ children }) {
//   return (
//     <html lang='en'>
//       <body className={inter.className}>{children}</body>
//     </html>
//   )
// }

// NEW: must have children in params and in <body>
export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <nav className='text-2xl text-primary'>This is Navbar</nav>
        {children}
      </body>
    </html>
  )
}
