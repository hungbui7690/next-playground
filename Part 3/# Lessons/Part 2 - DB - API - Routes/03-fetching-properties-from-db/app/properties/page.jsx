import PropertyCard from '@/components/PropertyCard'

// 1. remove import "properties.json" -> use fetch instead
async function fetchProperties() {
  try {
    const res = await fetch('http://localhost:3000/api/properties', {
      cache: 'no-store',
    })

    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }

    return await res.json()
  } catch (error) {
    console.log(error)
  }
}

const PropertiesPage = async () => {
  const properties = await fetchProperties() // 2.

  // 3. Sort the properties by create date
  properties.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))

  return (
    <section className='px-4 py-6'>
      <div className='container-xl lg:container m-auto px-4 py-6'>
        {properties.length === 0 ? (
          <p>No properties found</p>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {properties.map((property, index) => (
              <PropertyCard property={property} key={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default PropertiesPage
