/*
  Handling GET Requests
  - Extension: REST Client

  1. create app/api/tickets/<route.js>
  2. create app/api-client.http 
    -> test the route

  🍡 if we update the data from db.json -> then test the route -> we cannot see the latest data, but the old one -> that is because of the static route handlers -> next js likes to cache the response 
  
  🌿 static route handlers are cached by default at build time and during development

  🎫 to avoid caching: https://nextjs.org/docs/13/app/building-your-application/routing/route-handlers

*/
