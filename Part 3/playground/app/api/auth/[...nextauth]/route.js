import { authOptions } from '@/utils/authOptions'
import NextAuth from 'next-auth/next'

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
// We are importing the `authOptions` object and passing it to the `NextAuth` function. Then we are exporting the handler as both a `GET` and `POST` request. Now anytime we use the route `/api/auth/*` we will be using the `authOptions` object and we should be able to sign in with Google.
