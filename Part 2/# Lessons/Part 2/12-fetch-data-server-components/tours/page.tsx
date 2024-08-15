/*
  Fetch Data in Server Components
  1. create tours/page.tsx
  - just add async and start using await 🚀🚀🚀
  - the same for db
  - Next.tsx extends the native Web fetch() API to allow each request on the server to set its own persistent caching semantics.


*/

const url = 'https://www.course-api.com/react-tours-project'

async function ToursPage() {
  const response = await fetch(url)
  const data: Tour[] = await response.json()
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
