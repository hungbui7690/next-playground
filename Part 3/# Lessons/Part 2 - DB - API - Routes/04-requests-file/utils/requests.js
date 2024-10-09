const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null

async function fetchProperties() {
  // Handle the case when the domain is not available yet
  if (!apiDomain) {
    return []
  }

  try {
    const res = await fetch('http://localhost:3000/api/properties')

    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }

    return await res.json()
  } catch (error) {
    console.log(error)
  }
}

export { fetchProperties }
