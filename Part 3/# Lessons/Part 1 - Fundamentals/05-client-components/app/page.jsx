import Link from 'next/link'

const HomePage = () => {
  return (
    <div>
      <h1 className='text-3xl'>Welcome</h1>
      <Link href='/properties' className='text-emerald-500 underline'>
        Show Properties
      </Link>
      <br />
      <Link href='/properties/123?name=joe' className='text-rose-500 underline'>
        /properties/123
      </Link>
    </div>
  )
}

export default HomePage
