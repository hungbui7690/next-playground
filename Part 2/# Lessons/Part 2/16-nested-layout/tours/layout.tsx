/*
  Nested Layouts
  - create app/tours/layout.tsx
  - UI will be applied to app/tours - segment
  - don't forget about the "children"
  - we can fetch data in the layout but...
    at the moment can't pass data down to children (pages) 😞


*/

function ToursLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header className='py-2 w-1/2 bg-slate-500 rounded mb-4'>
        <h1 className='text-3xl text-white text-center'>Tour Layout</h1>
      </header>
      {children}
    </div>
  )
}
export default ToursLayout
