import connectDB from '@/config/database'
import Property from '@/models/Property'
import { NextResponse } from 'next/server'

// GET /api/properties
export const GET = async (req, res) => {
  try {
    await connectDB()
    const properties = await Property.find({})

    return new Response(JSON.stringify(properties), {
      status: 200,
    })
  } catch (error) {
    // return new Response('Something went wrong', { status: 500 })
  }
}
