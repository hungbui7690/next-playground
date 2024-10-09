'use client' // Error components must be Client Components

// Method 1
// const error = () => {
//   return <div>there was an error...</div>
// }

// Method 2: add param
const error = (error) => {
  // console.log(error)
  return <div>[ERROR: ] {error.error.message}</div>
}
export default error // 1. must have this line -> docs -> go to drinks/page.js
