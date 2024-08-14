/*
  Fetch Data in Server Components
  - just add async and start using await 🚀🚀🚀
  - can also connect to db -> next lesson
  - Next.js extends the native Web fetch() API to allow each request on the server to set its own persistent caching semantics.


*****************************

  - Server Component 
    -> no useEffect() 


*****************************

  - Code Example: 

      const ServerComponent = async () => {
        const response = await fetch(url)
        const data = await response.json()
        return (
          <div>
            <h1 className='text-7xl'>DrinksPage</h1>
          </div>
        )
      }
      export default ServerComponent


*****************************

  Challenge - Fetch Data in Drinks Page
  - setup logic
  - visit the page -> https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a
  - look for log in the terminal 😀


*****************************

  1. app/drinks/page.js


*/
