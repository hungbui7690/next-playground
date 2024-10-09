import Link from 'next/link'

const PropertiesPage = () => {
  return (
    <div>
      <h1 className='text-3xl'>Properties Page</h1>
      <Link href='/' className='text-emerald-500 underline'>
        Back to Homepage
      </Link>
    </div>
  )
}

export default PropertiesPage
