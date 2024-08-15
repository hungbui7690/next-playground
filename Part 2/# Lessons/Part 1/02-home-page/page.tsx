/*
  Home Page
  - page.tsx in the root of app folder 
    -> represents root of our application
    -> '/' local domain or production domain
  - react component (server component)
  - bunch of css classes (will discuss Tailwind in few lectures)
  - export component as default
  - file name "page" has a special meaning


*/

const HomePage = () => {
  return (
    <div>
      <h1 className='text-7xl'>HomePage</h1>
    </div>
  )
}

export default HomePage
