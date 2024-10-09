import { NextResponse } from 'next/server'

export async function GET(_, { params }) {
  const id = params.id

  const res = await fetch('http://localhost:5000/tickets/' + id, {
    next: {
      revalidate: 0,
    },
  })

  if (!res.ok) {
    return NextResponse.json(
      {
        error: 'Failed to fetch data',
      },
      {
        status: 500,
      }
    )
  }

  const tickets = await res.json()

  return NextResponse.json(tickets, {
    status: 200,
  })
}
