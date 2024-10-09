// 1. must have {children}
export default function DrinksLayout({ children }) {
  return (
    <div className='max-w-xl '>
      {/* From Daisy UI */}
      <div className='mockup-code mb-8'>
        <pre data-prefix='$'>
          <code>npx create-next-app@latest nextjs-tutorial</code>
        </pre>
      </div>

      {/* 2. */}
      {children}
    </div>
  )
}
