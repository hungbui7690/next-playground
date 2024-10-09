// Fetch a single property
async function fetchProperty(id) {
  try {
    // Handle the case when the domain is not available yet
    if (!apiDomain) {
      return null
    }

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
