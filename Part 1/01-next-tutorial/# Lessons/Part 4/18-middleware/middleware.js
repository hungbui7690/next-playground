/*
  Middleware
  - Middleware in Next.js is a piece of code that allows you to perform actions before a request is completed and modify the response accordingly.
  - Use the file middleware.ts (or .js) in the root of your project to define Middleware.
  - https://nextjs.org/docs/app/building-your-application/routing/middleware


***************************

  - create root/middleware.js
    -> by default will be invoked for every route in your project


***************************

  Test
  -> /about
  -> /about/info
  ....

*/

import { NextResponse } from 'next/server'

export function middleware(request) {
  // console.log('from middleware') // Method 1
  // return Response.json({ msg: 'hello there' }) // Method 2
  return NextResponse.redirect(new URL('/', request.url)) // Method 3 -> redirect to homepage
}

// 2. without this, middleware will be invoked for every route
export const config = {
  // matcher: '/about',
  matcher: ['/about/:path*', '/tasks/:path*'],
}
