/*
  Refactor and Delay
  - Refresh browser on another page, navigate to tours, observe delay.
  - In the real world, we can move the types and fetch function to separate files -> then import and use


*/

const url = 'https://www.course-api.com/react-tours-project'

// 1. check the above link to see the types
type Tour = {
  id: string
  name: string
  info: string
  image: string
  price: string
}

async function ToursPage() {
  await new Promise((resolve) => setTimeout(resolve, 2000)) // 2. add delay for 2s -> since it has await, then line below needs to wait for line

  const response = await fetch(url)
  const data: Tour[] = await response.json() // 3.
  console.log(data.at(0))

  return (
    <section>
      <h1 className='text-3xl mb-4'>Tours</h1>

      {data.map((tour) => {
        return <h2 key={tour.id}>{tour.name}</h2>
      })}
    </section>
  )
}
export default ToursPage
