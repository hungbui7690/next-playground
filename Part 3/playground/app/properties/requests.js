const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null

// PROPERTIES
async function fetchProperties() {
  if (!apiDomain) {
    return []
  }
  try {
    const res = await fetch(`${apiDomain}/properties`, { cache: 'no-store' })
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }

    return await res.json()
  } catch (error) {
    console.log(error)
  }
}

// SINGLE PROPERTY
async function fetchProperty(id) {
  try {
    if (!apiDomain) return null

    const res = await fetch(`${apiDomain}/properties/${id}`)
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }

    return await res.json()
  } catch (error) {
    console.error('Error fetching property:', error)
    return null
  }
}

export { fetchProperties, fetchProperty }
