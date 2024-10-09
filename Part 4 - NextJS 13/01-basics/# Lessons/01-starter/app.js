/*
  Intro
  - content rendered in the browser
    # bad for SEO
    # bigger load time
  - server side rendered
    # smaller js bundle for hydration
    # faster
    # good for SEO
    # better performance
  => this is the way nextjs works in the past -> some of the pages could be cached and distributed to a cdn at build time to improve performance -> static site generation


\\\\\\\\\\\\\\\\\\\\\\

  - NextJS 13 -> client & server components
    # client components will be rendered and sent to the browser
    # while server components will be rendered, but not sent to the browser -> reduce js code size -> better performance
  - Both client & server components are cached


\\\\\\\\\\\\\\\\\\\\\\

  - Client Components: 
    + use when we needs to use interactive
      -> it is good since we just need to use client components in smaller area of the page where we need to use interactive
  - Server Components:
    + default components
    + connect and fetch data from DB 
    + store API keys and secrets -> sensitive infos
    + keep large dependencies on the server


\\\\\\\\\\\\\\\\\\\\\\

  Server Components: 
  + Fetch data
  + Access backend resources (directly)
  + Keep sensitive information on the server (access tokens, API keys, etc)
  + Keep large dependencies on the server / Reduce client-side JavaScript

  Client Components:
  + Add interactivity and event listeners (onClick(), onChange(), etc)
  + Use State and Lifecycle Effects (useState(), useReducer(), useEffect(), etc)
  + Use browser-only APIs
  + Use custom hooks that depend on state, effects, or browser-only APIs


\\\\\\\\\\\\\\\\\\\\\\

  Installation
  ~~ npx create-next-app@13.4.9
        √ Would you like to use TypeScript? ... <No> / Yes
        √ Would you like to use ESLint? ... No / <Yes>
        √ Would you like to use Tailwind CSS? ... No / <Yes>
        √ Would you like to use `src/` directory? ... <No> / Yes
        √ Would you like to use App Router? (recommended) ... No / <Yes>
        √ Would you like to customize the default import alias? ... <No> / Yes


\\\\\\\\\\\\\\\\\\\\\\

  - .eslintrc.json
    ->  {
          "extends": ["next/babel", "next/core-web-vitals"]
        }


\\\\\\\\\\\\\\\\\\\\\\

  1. app/page.jsx


*/
