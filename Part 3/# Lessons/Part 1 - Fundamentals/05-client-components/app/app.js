/*
  Server vs Client Components
  - When to use: https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns -> readme
  - server components by default -> the pages that we setup until this point are "Server Components"
    -> Fetch Data
    -> Access Backend Resources -> can use Mongoose 
    -> Keep sensitive info (keys, token...)
  
  - client components: 
    -> use react hooks -> useState, useEffect...
    -> onclick
    -> add event listener


**************************

  useRouter
  - replace(): Replace the current page with a new one
  - reload(): Reload the current page
  - refresh(): Refresh the current page
  - fastRefresh(): Refresh the current page (keeping the state)
  - push(): Push a new page onto the stack
  - back(): Go back to the previous page
  - forward(): Go forward to the next page
  - prefetch(): Prefetch a page


**************************

  /properties/123
  -> useParams

  /properties/123?name=joe
  -> useSearchParams
  -> usePathname -> /properties/123


**************************

  1. properties/[id]/page.jsx
    -> change to client component


*/
