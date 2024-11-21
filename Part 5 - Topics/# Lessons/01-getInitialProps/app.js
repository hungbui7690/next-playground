/*
  getInitialProps
  - <getInitialProps> is a method used in older versions of Next.js (versions prior to 9.3) to fetch data on the server side before rendering a page. It was the primary data fetching method used in Next.js before newer data fetching methods like getServerSideProps and getStaticProps were introduced.
  - In older versions of Next.js, <getInitialProps> was the primary data fetching mechanism for both SSR and client-side rendering. 


-----------------------

  - still support in Next.js 13



-----------------------

  Demo is below



*/

import React from 'react'

const HomePage = ({ posts }) => {
  // Render the list of posts
  return (
    <div>
      <h1>Latest Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

HomePage.getInitialProps = async () => {
  // Fetch data from an API
  const response = await fetch('https://api.example.com/posts')
  const posts = await response.json()

  // Return the data as props
  return { posts }
}

export default HomePage
