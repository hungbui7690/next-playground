/*
  More Routing
  - /drinks, /about, /query, /client...
  - Each folder represents a route segment that is mapped to a corresponding segment in a URL path.
  - However, even though route structure is defined through folders, a route is not publicly accessible until a page.js or route.js file is added to a route segment.
  - And, even when a route is made publicly accessible, only the content returned by page.js or route.js is sent to the client.


****************************

  Private Folders
  - /app/components/button.js  -> /components/button -> not Routable
  - /app/lib/constants.js      -> /lib/constants     -> not Routable

  - app/dashboard/page.js      -> /dashboard         -> Routable
  - app/api/route.js           -> /api               -> Routable

  - app/dashboard/_lib/page.js -> /dashboard/_lib    -> not Routable -> private folder


****************************

  # Catch-all Segments
    - Dynamic Segments can be extended to catch-all subsequent segments by adding an ellipsis inside the brackets [...segmentName].
    - For example: 
      -> pages/shop/[...slug].js will match /shop/clothes, /shop/clothes/tops, /shop/clothes/tops/t-shirts...

        Route	                      Example           URL	params
        pages/shop/[...slug].js	    /shop/a	          { slug: ['a'] }
        pages/shop/[...slug].js	    /shop/a/b	        { slug: ['a', 'b'] }
        pages/shop/[...slug].js	    /shop/a/b/c	      { slug: ['a', 'b', 'c'] }


****************************

  # Optional Catch-all Segments
    - Catch-all Segments can be made optional by including the parameter in double square brackets: [[...segmentName]].
    - For example, pages/shop/[[...slug]].js will also match </shop>, /shop/clothes, /shop/clothes/tops, /shop/clothes/tops/t-shirts...
    ~~ The difference between catch-all and optional catch-all segments is that with optional, the route without the parameter is also matched (/shop in the example above).

        Route	                        Example         URL	params
        pages/shop/[[...slug]].js	    /shop	          { slug: undefined }
        pages/shop/[[...slug]].js	    /shop/a	        { slug: ['a'] }
        pages/shop/[[...slug]].js	    /shop/a/b	      { slug: ['a', 'b'] }
        pages/shop/[[...slug]].js	    /shop/a/b/c	    { slug: ['a', 'b', 'c'] }


****************************

  # Route Groups
  - Route groups can be created by wrapping a folder in parenthesis: <(folderName)>
  - This indicates the folder is for organizational purposes and should not be included in the route's URL path.
  - Route groups are useful for:
    -> Organizing routes into groups e.g. by site section, intent, or team.
    -> Enabling nested layouts in the same route segment level:
        # Creating multiple nested layouts in the same segment, including multiple root layouts
        # Adding a layout to a subset of routes in a common segment

  - Example: 
    -> app/(admin)/dashboard/page.js -> /dashboard 
    -> app/(marketing)/about/page.js -> /about
    -> app/(marketing)/blog/page.js  -> /blog


****************************

  1. create app/(dashboard)/auth
    -> http://localhost:3000/auth'

  2. create app/(dashboard)/auth/[sign-in]


****************************

  - if we want to create a folder in the app/ 
    -> but we don't want to become the route 
    -> we need to make it <private>

    1. create /app/<_css>/


****************************

  Create Route Groups
    2. create /app/(dashboard)/auth/page.js
      -> http://localhost:3000/auth -> ignore (dashboard)
      -> http://localhost:3000/dashboard/auth -> 404

    3. create /app/(dashboard)/auth/[sign-in]/page.js
      -> http://localhost:3000/auth/test
        # params = { 'sign-in': 'test' }
      -> http://localhost:3000/auth/abc
        # params = { 'sign-in': 'abc' }

  
****************************

  What if we have url like this:
  -> http://localhost:3000/auth/test/xyz/123
    # how can we catch it 


  4. we need to use <catch-all> segment 
    -> change to /app/(dashboard)/auth/[...sign-in]/page.js 
    -> http://localhost:3000/auth/test/xyz/abc
      # { 'sign-in': [ 'test', 'xyz', 'abc' ] }


****************************

  What if we remove /auth/page.js 
  -> http://localhost:3000/auth/ -> returns 404

  5. we need to use <optional> <catch-all> segment : 
    -> /app/(dashboard)/auth/[[...sign-in]]/page.js
    -> http://localhost:3000/auth/ -> will go to Sign In Page
    -> params = {}


****************************

  - we cover these things just because the "Clerk" package (auth package) uses these


*/
