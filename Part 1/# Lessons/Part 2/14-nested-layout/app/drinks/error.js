'use client'

const error = (error) => {
  console.log(error)
  return <div>[ERROR: ] {error.error.message}</div>
}
export default error
