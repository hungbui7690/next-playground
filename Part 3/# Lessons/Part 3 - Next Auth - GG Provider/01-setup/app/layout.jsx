import '@/assets/styles/globals.css'
import Navbar from '@/components/Navbar'
import AuthProvider from '@/components/AuthProvider'

export const metadata = {
  title: 'Property Rental',
  description: 'Find your dream rental property',
  keywords: 'rental, find rentals, find properties ',
}

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <html lang='en'>
        <body>
          <Navbar />
          <main>{children}</main>
        </body>
      </html>
    </AuthProvider>
  )
}

export default MainLayout
