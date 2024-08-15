/*
  Server Components VS Client Components
  - Server Components : https://nextjs.org/docs/app/building-your-application/rendering/server-components
  - Client Components : https://nextjs.org/docs/app/building-your-application/rendering/client-components


********************************

  - BY DEFAULT, NEXT.JS USES SERVER COMPONENTS !!!!
  - To use Client Components, you can add the React "use client" directive


********************************

  # Server Components
  - Benefits :
    -> data fetching
    -> security
    -> caching
    -> bundle size


********************************

  - Data Fetching: Server Components allow you to move data fetching to the server, closer to your data source. This can improve performance by reducing time it takes to fetch data needed for rendering, and the amount of requests the client needs to make.
  - Security: Server Components allow you to keep sensitive data and logic on the server, such as tokens and API keys, without the risk of exposing them to the client.
  - Caching: By rendering on the server, the result can be cached and reused on subsequent requests and across users. This can improve performance and reduce cost by reducing the amount of rendering and data fetching done on each request.
  - Bundle Sizes: Server Components allow you to keep large dependencies that previously would impact the client JavaScript bundle size on the server. This is beneficial for users with slower internet or less powerful devices, as the client does not have to download, parse and execute any JavaScript for Server Components.


********************************

  - Initial Page Load and First Contentful Paint (FCP): On the server, we can generate HTML to allow users to view the page immediately, without waiting for the client to download, parse and execute the JavaScript needed to render the page.
  - Search Engine Optimization and Social Network Shareability: The rendered HTML can be used by search engine bots to index your pages and social network bots to generate social card previews for your pages.
  - Streaming: Server Components allow you to split the rendering work into chunks and stream them to the client as they become ready. This allows the user to see parts of the page earlier without having to wait for the entire page to be rendered on the server.


********************************

  # Client Components
  - Benefits :
    -> Interactivity: Client Components can use state, effects, and event listeners, meaning they can provide immediate feedback to the user and update the UI.
    -> Browser APIs: Client Components have access to browser APIs, like geolocation or localStorage, allowing you to build UI for specific use cases.


********************************

  Challenge
  - create counter page and setup basic counter
    -> client page 
    -> can use useState

  1. create app/counter/page.tsx
  2. test -> http://localhost:3000/counter


*/

'use client' // 1.
import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0) // 2.

  // 3.
  return (
    <div className='flex flex-col items-center w-[100px]'>
      <p className='text-5xl font-bold'>{count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className='bg-blue-500 rounded-md text-white px-4 py-2 mt-4'
      >
        Increment
      </button>
    </div>
  )
}
export default Counter
