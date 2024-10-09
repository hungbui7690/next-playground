import Link from 'next/link'

const SingleDrinkPage = ({ params }) => {
  console.log(params)

  return (
    <div>
      <Link
        href={`/drinks/`}
        className='text-xl font-medium btn btn-accent btn-outline'
      >
        Back to Drinks
      </Link>
      <h1 className='text-7xl'>{params.id}</h1>
    </div>
  )
}
export default SingleDrinkPage
