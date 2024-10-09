import Link from 'next/link'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

// 2. create function
const getSingleDrink = async (id) => {
  const res = await fetch(`${url}${id}`)

  if (!res.ok) {
    throw new Error('Failed to fetch drink...')
  }
  return res.json()
}

const SingleDrink = async ({ params }) => {
  // 3. call the function from 2. -> we don't need to get any data from DrinkList
  const data = await getSingleDrink(params.id)

  // 4. extract data
  const title = data?.drinks[0]?.strDrink
  const imgSrc = data?.drinks[0]?.strDrinkThumb

  // 5. render
  return (
    <div>
      <Link href='/drinks' className='btn btn-primary mt-8 mb-12'>
        back to drinks
      </Link>
      <h1 className='text-4xl mb-8'>{title}</h1>
    </div>
  )
}

export default SingleDrink
