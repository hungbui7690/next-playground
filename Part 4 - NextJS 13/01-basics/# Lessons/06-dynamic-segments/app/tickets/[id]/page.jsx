// get single ticket
const getTicket = async (id) => {
  const res = await fetch(`http://localhost:5000/tickets/${id}`, {
    next: {
      revalidate: 60,
    },
  })

  return res.json()
}

// # props.params.id
const TicketDetails = async ({ params }) => {
  // const id = params.id
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
