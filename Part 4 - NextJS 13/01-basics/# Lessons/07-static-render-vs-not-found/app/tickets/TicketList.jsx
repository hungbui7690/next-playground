import Link from 'next/link'

async function getTickets() {
  const res = await fetch('http://localhost:5000/tickets', {
    next: {
      revalidate: 0,
    },
  })

  return res.json()
}

const TicketList = async () => {
  const tickets = await getTickets()

  return (
    <>
      {tickets.map((ticket) => (
        <div key={ticket.id} className='my-5 card'>
          <Link href={`/tickets/${ticket.id}`}>
            <h3>{ticket.title}</h3>
            <p>{ticket.body.slice(0, 200)}...</p>
            <div className={`pill ${ticket.priority}`}>
              {ticket.priority} priority
            </div>
          </Link>
        </div>
      ))}
      {tickets.length === 0 && (
        <p className='text-center'>There are no open tickets, yay!</p>
      )}
    </>
  )
}

export default TicketList
