const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a'

// # Server Component
const DrinksPage = async () => {
  const response = await fetch(url)
  const data = await response.json()
  console.log(data.drinks.at(0))

  return (
    <div>
      <h1 className='text-7xl'>DrinksPage</h1>
    </div>
  )
}
export default DrinksPage