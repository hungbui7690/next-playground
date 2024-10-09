import Navbar from '@/app/components/Navbar'

// overwrite metadata
export const metadata = {
  title: 'HelpDesk | Dashboard',
  description: 'List of tickets',
}

export default function DashboardLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
