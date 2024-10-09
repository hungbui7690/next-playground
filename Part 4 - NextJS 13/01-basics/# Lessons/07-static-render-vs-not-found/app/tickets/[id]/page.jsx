import { notFound } from 'next/navigation'

// false: if the page hasn't been rerendered then we return 404 page
// true: if page hasn't been rerendered then nextjs will fetch the page for us
export const dynamicParams = true // default val = true

// 1. Return a list of `params` to populate the [id] dynamic segment
export async function generateStaticParams() {
  const res = await fetch('http://localhost:5000/tickets')

  const tickets = await res.json()

  // [{ id: '1' }, { id: '2' }...]
  return tickets.map((ticket) => ({
    id: ticket.id,
  }))
}

const getTicket = async (id) => {
  const res = await fetch(`http://localhost:5000/tickets/${id}`, {
    next: {
      revalidate: 60, // the generateStaticParams function above just work when the time is greater than 0
    },
  })

  // 2. if there's something wrong -> return 404 page -> if we don't have 404 page, nextjs will redirect to default 404 page
  if (!res.ok) {
    notFound()
  }

  return res.json()
}

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
const TicketDetails = async ({ params }) => {
  const ticket = await getTicket(params.id)

  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
      </nav>
      <div className='card'>
        <h3>{ticket.title}</h3>
        <small>Created by {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>
          {ticket.priority} priority
        </div>
      </div>
    </main>
  )
}

export default TicketDetails
