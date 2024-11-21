// -- <getInitialProps>
// const HomePage = ({ posts }) => {
// - Render the list of posts
// }

// HomePage.getInitialProps = async () => {
// --  Fetch data from an API
//   const response = await fetch('https://api.example.com/posts')
//   const posts = await response.json()

// Return the data as props
//   return { posts }
// }

// \\\\\\\\\\\\\\\\\\\\\\\\\
// -- After migrating to <getStaticProps>
// \\\\\\\\\\\\\\\\\\\\\\\\\
// const HomePage = ({ posts }) => {
// -- Render the list of posts
// };

// export async function getStaticProps() {
// -- Fetch data from an API
//   const response = await fetch('https://api.example.com/posts');
//   const posts = await response.json();

// -- Return the data as props
//   return {
//     props: { posts },
//   };
// }

// \\\\\\\\\\\\\\\\\\\\\\\\\
// -- After migrating to <getServerSideProps>
// \\\\\\\\\\\\\\\\\\\\\\\\\
const HomePage = ({ posts }) => {
  // Render the list of posts
}

export async function getServerSideProps() {
  // Fetch data from an API
  const response = await fetch('https://api.example.com/posts')
  const posts = await response.json()

  // Return the data as props
  return {
    props: { posts },
  }
}
