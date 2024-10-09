import Image from 'next/image'
import Link from 'next/link'
import Logo from './logo.png' // #

const Navbar = () => {
  return (
    <nav className='flex justify-between p-4'>
      <Link href='/' className='flex items-center gap-2'>
        {/* # */}
        <Image src={Logo} alt='logo' width={50} height={50} quality={100} />
        <h1 className='font-bold text-2xl'>Dojo HelpDesk</h1>
      </Link>
      <div className='flex gap-4 text-emerald-500'>
        <Link href='/'>Dashboard</Link>
        <Link href='/tickets'>Tickets</Link>
      </div>
    </nav>
  )
}

export default Navbar
