import Link from 'next/link'

const AboutPage = () => {
  return (
    <div>
      <h1 className='text-7xl'>AboutPage</h1>
      <Link href='/' className='text-2xl text-green-500'>
        Home Page
      </Link>
    </div>
  )
}
export default AboutPage
