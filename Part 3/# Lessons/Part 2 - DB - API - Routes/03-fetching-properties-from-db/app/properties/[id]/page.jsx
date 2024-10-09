'use client' // 1.
import {
  useRouter,
  useParams,
  useSearchParams,
  usePathname,
} from 'next/navigation'

const PropertyPage = () => {
  const router = useRouter() // 2. without step 1 -> error

  const params = useParams() // 4.
  const searchParams = useSearchParams()
  console.log('params: ', params)
  console.log('searchParams: ', searchParams.get('name'))
  const pathname = usePathname()
  console.log('pathname: ', pathname)

  return (
    <div>
      <h1 className='text-3xl'>Properties Page</h1>

      {/* 3. */}
      <button
        className='block bg-blue-100 p-2'
        onClick={() => router.replace('/')}
      >
        Back to Home
      </button>
    </div>
  )
}

export default PropertyPage
