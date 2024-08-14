import Link from 'next/link' // 1.

const HomePage = () => {
  return (
    <div>
      <h1 className='text-7xl'>HomePage</h1>

      {/* 2. */}
      <Link href='/about' className='text-2xl'>
        about page
      </Link>
    </div>
  )
}
export default HomePage
