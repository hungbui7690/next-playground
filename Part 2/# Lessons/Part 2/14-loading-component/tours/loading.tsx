/*
  Loading Component
  - The special file loading.js helps you create meaningful Loading UI with React Suspense. With this convention, you can show an instant loading state from the server while the content of a route segment loads. The new content is automatically swapped in once rendering is complete.


****************************

  - we just need to create this "loading.tsx" component 
    -> it will automatically add "loading" to our route


*/

'use client'

const loading = () => {
  return <span className='text-xl capitalize'>loading tours...</span>
}
export default loading
