/*
  <getStaticProps> 
  - another data fetching method that was introduced in Next.js 9.3
  - used for static site generation (SSG)
  - pre-renders the page at build time and fetches the data during the build process
  - pre-rendered HTML pages are then served to users directly from the CDN, offering faster page loads and reducing server load


-----------------------

  - When a user requests a page that uses <getServerSideProps>, the server will execute this function, fetch the data, and pass it as props to the page component.
  - The page is then rendered on the server with the fetched data and sent to the client as a complete HTML page -> SSR


-----------------------

  - Here are some of the scenarios best suited for getStaticProps

    1. Data is available at build time:
      -> the data is available ahead of user request and it is static data ( that is the data does not change frequently) then getStaticProps is a good choice

    2. Using it with headless CMS :
      -> If you are using a headless CMS then your data probably does not change much, when your data changes you can rebuild the site to update your static pages
      -> If this is the use case then it aligns well with getStaticPros functionality

    3. Pre-rendering for SEO
      -> SEO benefits greatly from static pages as compared to dynamic pages, and if you are creating static pages for SEO purposes then getStaticProps is beneficial to you

    4. If the data can be cached publicly
      -> If the data can be cached publicly and it is not user specific or individually generated then also the getStaticProps can be used


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  <getServerSideProps> 
  - introduced in 9.3
  - used for server side !== client side
  - improves performance by reducing duplicate data fetching and provides better predictability of server-side data fetching.
  - When to use getServerSideProps -> getServerSideProps should be used for use-cases, where the page must be pre-render with real time data. Here are some of the specific use cases
    # User-specific data
    # Dynamic Content
    # Secure Data fetching
    # Server Side computations
    # Real time content


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  <getServerSideProps> lifecycle
  - is used to fetch data on the server side and pre-render the page with the fetched data before sending it to the client
  - The getServerSideProps function takes a context object as a parameter that contains page data such as params, res, req, query, etc.

    1. When a user requests a page that uses getServerSideProps, the server-side code is executed first
    2. The getServerSideProps function is called, and it fetches the necessary data from external APIs, databases, or other sources
    3. The fetched data is then passed as props to the page component
    4. The page is pre-rendered on the server with the fetched data and sent as a complete HTML page to the client
    5. The client-side JavaScript takes over once the page is loaded, and any subsequent interactions are handled on the client side


-----------------------

  Example use cases for getServerSideProps:
  - Real-time data: If your page requires real-time data that changes frequently (e.g., live chat messages, real-time analytics), you can use getServerSideProps to fetch the latest data on each request
  - Authenticated data: When dealing with authenticated data that is user-specific and changes based on the user’s session or permissions, getServerSideProps is well-suited for fetching this data securely on the server side
  - Dynamic pages: For pages with dynamic routes, where the content depends on the route parameters, getServerSideProps can fetch the data for the specific route during each request


-----------------------

  - getServerSideProps runs on every request, which means that if you’re doing a lot of data fetching or computations, it can slow down your site. 
  - One is to make sure you’re returning the required props object with the props property, which can help reduce the number of repetitive calls. When you call getServerSideProps, Next.js creates a server-side request to fetch the data. This request can be quite expensive, especially if you’re doing a lot of computations. If you return the required props object, Next.js will memoize the request and reuse the result for subsequent calls. This is important because it means that Next.js doesn’t have to make multiple requests to the server to get the same data, which can significantly improve performance.






*/