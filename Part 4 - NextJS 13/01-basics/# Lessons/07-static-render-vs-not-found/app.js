/*
  Static Rendering
  - With Static Rendering, routes are rendered at build time, or in the background after data revalidation. The result is cached and can be pushed to a Content Delivery Network (CDN). This optimization allows you to share the result of the rendering work between users and server requests.
  - Static rendering is useful when a route has data that is not personalized to the user and can be known at build time, such as a static blog post or a product page.
  - https://nextjs.org/docs/13/app/api-reference/functions/generate-static-params


\\\\\\\\\\\\\\\\\\\\\\\\\\\

  Dynamic Rendering
  - With Dynamic Rendering, routes are rendered for each user at request time.
  - Dynamic rendering is useful when a route has data that is personalized to the user or has information that can only be known at request time, such as cookies or the URL's search params.



\\\\\\\\\\\\\\\\\\\\\\\\\\\

  generateStaticParams
  - The generateStaticParams function can be used in combination with dynamic route segments to statically generate routes at build time instead of on-demand at request time.
  - return the list of ids for the routes that should be statically generated
  - https://nextjs.org/docs/13/app/api-reference/functions/generate-static-params

  1. /tickets/[id]/page.jsx
  2. create app/not-found.jsx
  3. create app/tickets/not-found.jsx

  => if we don't have step 2 and 3 -> will go to default 404 page of NextJS
  => if we have step 2 -> go to step 2
  => if we have step 3 -> go to step 3 if we are in /tickets routes

  🍡 we use generateStaticParams in detail page


*/
