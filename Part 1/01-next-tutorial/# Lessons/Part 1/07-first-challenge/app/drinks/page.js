import Link from 'next/link'

const DrinksPage = () => {
  return (
    <div>
      <h1 className='text-7xl'>DrinksPage</h1>
      <Link href='/' className='text-2xl text-green-500'>
        Home Page
      </Link>
    </div>
  )
}
export default DrinksPage