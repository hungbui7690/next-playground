/*
  Fetching Properties from Database
  - backend 

  1. create app/api/properties/<route>.js
    -> http://localhost:3000/api/properties

  2. app/properties/page.jsx
    -> remove import <properties.json>
    -> try to fetch from /api/properties

  3. app/page.jsx -> HomePage -> do the same as step 2


*****************************

  ⚡ the line below will remove caching when using fetch
    -> const res = await fetch('http://localhost:3000/api/properties', { cache: 'no-store' })


*/
