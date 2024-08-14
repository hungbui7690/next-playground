/*
  Layout File
  - A layout is UI that is shared between routes.
    -> https://nextjs.org/docs/app/api-reference/file-conventions/layout


*********************************

  - app/layout.js
    -> share layout to pages under /app 
      # /about - /about/info - /client - /drinks - /prisma-example - /query
  - app/about/layout.js
    -> share layout to pages under /about


*********************************

  - app/dashboard/layout.js

      export default function DashboardLayout({children}) {
        return <section>{children}</section>
      }

*********************************

  - A root layout is the top-most layout in the root app directory. It is used to define the <html> and <body> tags and other globally shared UI.

  - app/layout.js

      export default function RootLayout({ children }) {
        return (
          <html lang="en">
            <body>{children}</body>
          </html>
        )
      }


*********************************

  - Tailwind and DaisyUI
    -> DaisyUI is built on top of Tailwind
      # helps build projects faster with less tailwind classes


*********************************

  - https://daisyui.com/docs/layout-and-typography/

    ~~ npm i -D daisyui@latest
      -> install daisyUI
    ~~ npm i @tailwindcss/typography
      -> install tailwindcss + "typography plugin" 


*********************************

  - after install, setup tailwind config: 
    @@ plugins: [require('@tailwindcss/typography'), require('daisyui')]


*********************************

  DaisyUI
  - https://daisyui.com/
  - since the components are built on top of tailwind
    -> we can customize it by adding our own classes


*********************************

  - Daisy-UI is truly shine when we need to create a components (Navbar, Modal, Dropdown...) 
    -> https://daisyui.com/components/dropdown/
    -> similar to Bootstrap -> but for Tailwind

      <details className="dropdown">
        <summary className="m-1 btn">open or close</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </ul>
      </details>
    -> menu dropdown-content: these 2 classes are from DaisyUI -> not Tailwind  

  - https://daisyui.com/docs/colors/
  - https://daisyui.com/docs/layout-and-typography/


*********************************

  Layouts and Templates
  - Layout is a component which wraps other pages and layouts. 
    -> Allow to share UI. 
    -> Even when the route changes, layout DOES NOT re-render. 
    -> Can fetch data but can't pass it down to children. 
    -> Templates are the same but they re-render.

  - Layout in the root folder (/app) is called the Root Layout. 
    -> This required layout is shared across all pages in an application. 
    -> Root layouts must contain html and body tags.

  - Any route segment can optionally define its own Layout. 
    -> These layouts will be shared across all pages in that segment.

  - Layouts in a route are nested by default. 
    -> Each parent layout wraps child layouts below it using the React children prop.

  - Layout component does not rendered when the route changes
    -> If we want to render functionality -> we can use template js file 
      # it works the same as layout 
      # the difference is it does render when the route changes

  - Can fetch data in layout, but CANNOT pass data down to pages


*********************************

  1. app/layout.js
    -> create navbar 

  2. test -> go to /about to see if Navbar is shared between pages


*/
