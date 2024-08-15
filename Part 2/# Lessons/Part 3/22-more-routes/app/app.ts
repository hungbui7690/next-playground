/*
  More Routing

***************************

  Private Folders
    -> _folder


***************************

  Route Groups
    -> parenthesis
    -> (dashboard)


***************************

  Dynamic Routes
  - [...folder]   - Catch-all route segment
  - [[...folder]] - Optional catch-all route segment (used by Clerk)


***************************

  Example: Private Folder
  - create app/_css folder 
  - create app/(dashboard)/auth
    -> the url is just '/auth'


***************************
  
  Example: Route Group
  - app/(dashboard)/auth/[sign-in]
    -> /app/auth/xyz/abc -> {'sign-in' : 'xyz'}


***************************

  Example: Catch-all segment
  - app/(dashboard)/auth/[...sign-in]
    -> /app/auth/xyz     -> {'sign-in' : ['xyz']}
    -> /app/auth/xyz/abc -> {'sign-in' : ['xyz', 'abc']}


  Example: Optional catch-all segment
  - app/(dashboard)/auth/[[...sign-in]] -> optional catch-all segment
    -> /app/auth -> {'sign-in : undefined}
    -> /app/auth/xyz      -> {'sign-in' : 'xyz'}
    -> /app/auth/xyz/abc  -> {'sign-in' : ['xyz', 'abc']}


*/
