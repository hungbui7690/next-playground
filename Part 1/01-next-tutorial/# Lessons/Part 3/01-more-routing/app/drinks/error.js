'use client'

const error = (error) => {
  return <div>[ERROR: ] {error.error.message}</div>
}
export default error
