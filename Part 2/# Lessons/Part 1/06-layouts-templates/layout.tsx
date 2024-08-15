/*
  CSS and Tailwind
  - vanilla css -> globals.css
  - tailwind -> class names


*******************************

  Layouts and Templates
  - app/layout.tsx
  - template.tsx

  - Layout is a component which wraps other pages and layouts. Allow to share UI. Even when the route changes, layout DOES NOT re-render. Can fetch data but can't pass it down to children. Templates are the same but they re-render.
  - the top-most layout is called the Root Layout. This required layout is shared across all pages in an application. Root layouts must contain html and body tags.
  - any route segment can optionally define its own Layout. These layouts will be shared across all pages in that segment.
  - layouts in a route are nested by default. Each parent layout wraps child layouts below it using the React children prop.


*/

import './globals.css'

// prettier-ignore
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <nav className='bg-slate-300 text-center font-bold text-7xl'>Navbar</nav>
        {children}
      </body>
    </html>
  )
}
