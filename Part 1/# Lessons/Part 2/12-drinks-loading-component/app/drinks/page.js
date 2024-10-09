const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a'

// 2. create the fetch function outside of component
const fetchDrinks = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000)) // 5. this line is just used to add delay to our website -> we need to use "new Promise" because we want to use "await" to make the rest of the code to wait for this line to complete -> just loading for the 1st time, since NextJS uses cache

  const response = await fetch(url)
  const data = await response.json()
  return data // 3.
}

const DrinksPage = async () => {
  const data = await fetchDrinks() // 6.
  console.log(data.drinks.at(0))

  return (
    <div>
      <h1 className='text-7xl'>DrinksPage</h1>
    </div>
  )
}
export default DrinksPage
