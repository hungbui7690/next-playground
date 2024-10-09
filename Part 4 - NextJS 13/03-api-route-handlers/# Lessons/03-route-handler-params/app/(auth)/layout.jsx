import Link from 'next/link'

export default function AuthLayout({ children }) {
  return (
    <>
      <nav className='flex justify-between p-4'>
        <Link href='/'>
          <h1 className='font-bold text-2xl'>🎫 Dojo HelpDesk</h1>
        </Link>
        <div className='flex gap-4 text-emerald-500'>
          <Link href='/login'>Login</Link>
          <Link href='/signup'>Sign Up</Link>
        </div>
      </nav>
      {children}
    </>
  )
}
