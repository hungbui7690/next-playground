/*
  Middleware
  - https://nextjs.org/docs/app/building-your-application/routing/middleware

  - Middleware in Next.js is a piece of code that allows you to perform actions before a request is completed and modify the response accordingly.
    -> create root/middleware.ts
    -> by default will be invoked for every route in your project


*/

import { NextResponse } from 'next/server'

// 1. without config in step 2 -> middleware will work on all routes
export function middleware(request: Request) {
  return Response.json({ msg: 'hello there' }) // Method 1
  return NextResponse.redirect(new URL('/', request.url)) // Method 2
}

// 2. with this config -> mdw just works on /about
// export const config = {
// // matcher: '/about',
// matcher: ['/about/:path*', '/tours/:path*'],
// }
