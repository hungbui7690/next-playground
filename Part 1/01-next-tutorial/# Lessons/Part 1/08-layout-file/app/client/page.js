import Link from 'next/link'

const ClientPage = () => {
  return (
    <div>
      <h1 className='text-7xl'>ClientPage</h1>
      <Link href='/' className='text-2xl text-green-500'>
        Home Page
      </Link>
    </div>
  )
}
export default ClientPage
