const SingleDrinkPage = ({ params }) => {
  console.log(params) // { id: '123' }

  return (
    <div>
      <h1 className='text-7xl'>{params.id}</h1>
    </div>
  )
}
export default SingleDrinkPage
