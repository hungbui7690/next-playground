/*
  Route Handlers
  - Route Handlers allow you to create custom request handlers for a given route using the Web Request and Response APIs.
  - The following HTTP methods are supported: GET, POST, PUT, PATCH, DELETE, HEAD, and OPTIONS. If an unsupported method is called, Next.js will return a 405 Method Not Allowed response.
  - In addition to supporting native Request and Response. Next.js extends them with NextRequest and NextResponse to provide convenient helpers for advanced use cases.


****************************

  - return Response.json({ users })
    -> Response object comes from Web API


****************************

  - return NextResponse.redirect(new URL('/', request.url))
    -> The URL constructor takes two arguments: url and base. If the url is a relative URL, then base is required. If url is an absolute URL, then base is ignored.
    -> Here, '/' is the url and request.url is the base.
    -> This means it's creating a new URL object that represents the root of the URL contained in request.url.
    -> For example, if request.url is 'http://example.com/path/to/resource', the new URL object would represent 'http://example.com/'.


****************************

  URL Params
  - const { searchParams } = new URL(req.url)
  - const id = searchParams.get('id')
    -> http://localhost:3000/api/users?id=123



****************************

  1. create api/users/route.ts
  2. test -> api/users


*/

import { NextRequest, NextResponse } from 'next/server'
import { fetchUsers, saveUser } from '@/utils/actions'

// Method 1:
// export const GET = async () => {
//   const users = await fetchUsers()
//   return Response.json({ users })
// }

// Method 2: type=Request -> this comes from Web API
// export const GET = async (req: Request) => {
//   const { searchParams } = new URL(req.url)
//   const id = searchParams.get('id')
//   console.log(id)

//   const users = await fetchUsers()
//   return Response.json({ users })
// }

// Method 3: type=NextRequest -> this comes from NextJS
export const GET = async (req: NextRequest) => {
  console.log(req.url)
  console.log(req.nextUrl.searchParams.get('id'))

  const users = await fetchUsers()
  return NextResponse.redirect(new URL('/', req.url)) // redirect
}

export const POST = async (req: Request) => {
  const user = await req.json()
  const newUser = { ...user, id: Date.now().toString() }
  await saveUser(newUser)

  return Response.json({ msg: 'user created' })
}
