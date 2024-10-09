import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic' // Method 2: change from static route handler to dynamic one -> this does not work in this case ???

export async function GET() {
  // normally, this will come from DB
  const res = await fetch('http://localhost:5000/tickets')

  // Method 1: Remove Caching
  // const res = await fetch('http://localhost:5000/tickets', {
  //   next: {
  //     revalidate: 0,
  //   },
  // })

  const tickets = await res.json()

  return NextResponse.json(tickets, {
    status: 200,
  })
}
