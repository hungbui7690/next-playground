/*
  Dynamic Routes
  - app/tours/[id]/page.tsx


*/

const page = ({ params }: { params: { id: string } }) => {
  console.log(params) // { id: '1' }

  return (
    <div>
      <h1 className='text-4xl'>ID : {params.id}</h1>
    </div>
  )
}
export default page
