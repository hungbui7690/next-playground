import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const res = await fetch('http://localhost:5000/tickets')

  const tickets = await res.json()

  return tickets.map((ticket) => ({
    id: ticket.id,
  }))
}

const getTicket = async (id) => {
  // # imitate delay -> loading
  await new Promise((resolve) => setTimeout(resolve, 2000))

  const res = await fetch(`http://localhost:5000/tickets/${id}`, {
    next: {
      revalidate: 60,
    },
  })

  if (!res.ok) {
    notFound()
  }

  return res.json()
}

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
