/*
  Error Component
  - The error.tsx file convention allows you to gracefully handle unexpected runtime errors in nested routes.
    -> we just need to create this component -> without doing anything
    -> then if we want to show error -> throw error from page.tsx

  - https://nextjs.org/docs/app/api-reference/file-conventions/error


***************************

  1. tours/error.js -> 'use client'


*/

'use client'

const error = ({ error }: { error: Error }) => {
  console.log(error)

  return <div>there was an error...</div>
}

export default error
