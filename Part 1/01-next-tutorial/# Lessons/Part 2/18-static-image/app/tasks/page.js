import Link from 'next/link'

const Tasks = () => {
  return (
    <div>
      <h1 className='text-7xl'>Tasks</h1>
      <Link href='/' className='text-2xl text-green-500'>
        Home Page
      </Link>
    </div>
  )
}
export default Tasks
