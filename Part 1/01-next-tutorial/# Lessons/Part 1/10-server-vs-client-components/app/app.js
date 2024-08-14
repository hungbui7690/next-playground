/*
  Server Components VS Client Components
  - Server Components: https://nextjs.org/docs/app/building-your-application/rendering/server-components
  - Client Components: https://nextjs.org/docs/app/building-your-application/rendering/client-components


***************************

  - BY DEFAULT, NEXT.JS USES SERVER COMPONENTS !!!!
    -> the Navbar component that we created is also Server Component
    -> To use Client Components, you can add the React "use client" directive


***************************

  # Server Components
  - components that are rendered on server
  
  - Benefits :
    -> data fetching
    -> security
    -> caching
    -> bundle size

    -> Data Fetching: Server Components allow you to move data fetching to the server, closer to your data source. This can improve performance by reducing time it takes to fetch data needed for rendering, and the amount of requests the client needs to make.
    -> Security: Server Components allow you to keep sensitive data and logic on the server, such as tokens and API keys, without the risk of exposing them to the client.
    -> Caching: By rendering on the server, the result can be cached and reused on subsequent requests and across users. This can improve performance and reduce cost by reducing the amount of rendering and data fetching done on each request.
    -> Bundle Sizes: Server Components allow you to keep large dependencies that previously would impact the client JavaScript bundle size on the server. This is beneficial for users with slower internet or less powerful devices, as the client does not have to download, parse and execute any JavaScript for Server Components.
    -> Initial Page Load and First Contentful Paint (FCP): On the server, we can generate HTML to allow users to view the page immediately, without waiting for the client to download, parse and execute the JavaScript needed to render the page.
    -> Search Engine Optimization and Social Network Shareability: The rendered HTML can be used by search engine bots to index your pages and social network bots to generate social card previews for your pages.
    -> Streaming: Server Components allow you to split the rendering work into chunks and stream them to the client as they become ready. This allows the user to see parts of the page earlier without having to wait for the entire page to be rendered on the server.


***************************

  # Client Components
  - Benefits :
    -> Interactivity: Client Components can use state, effects, and event listeners, meaning they can provide immediate feedback to the user and update the UI.
    -> Browser APIs: Client Components have access to browser APIs, like geolocation or localStorage, allowing you to build UI for specific use cases.


***************************

  Challenge - Setup Counter
  - setup our home page 
  - setup a simple counter in app/client/page.js


***************************

  1. app/page.js
    - "use client"
      -> to mark that this component is the "Client Component"
      -> if we don't have 'use client' -> we won't be able to use "useState"

  2. app/client/page.js


***************************

  - btn-accent: from DaisyUI
  

***************************

  - we can see the difference between Server Component and Client Component
    -> HomePage is the Server Component -> so that when server sends it to client -> it's done 
      # there's no interactivity there anymore
      # if we setup log in Home Page -> it won't show in the Console of Browser -> since it just can be shown in server (VS Code Terminal)
    -> Client Page is the client component -> so it has JS code that allows us to interact with it


*/
