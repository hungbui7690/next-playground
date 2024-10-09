/*
  Fetching Data & Revalidation
  ~~ npm i -D json-server

  1. create db/db.json
  2. create app/tickets/TicketList.jsx
    -> we create here since we don't reuse this component -> no need to place in components/
  3. tickets/page.jsx


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  Revalidation
  - when we fetch data in tickets/TicketList.jsx, NextJS does:
    # it will caches the data
    # if we navigate outside, then come back to the page, it will use the cached data
    
  🌿 if data in our website changes frequently, we don't want to use cached data -> revalidate
    -> fetch('https://...', { next: { revalidate: 3600 } })
    -> 3600: cache lifetime -> 3600s = 1 hour -> revalidate at most every hour
    -> 0: revalidate everytime we visit the page

  🍡 try to delete data in db.json to test the cached data


*/
