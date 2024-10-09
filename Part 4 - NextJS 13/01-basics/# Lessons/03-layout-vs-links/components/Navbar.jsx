import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='flex justify-between p-4'>
      <h1 className='font-bold text-2xl'>Dojo HelpDesk</h1>
      <div className='flex gap-4 text-emerald-500'>
        <Link href='/'>Dashboard</Link>
        <Link href='/tickets'>Tickets</Link>
      </div>
    </nav>
  )
}

export default Navbar
