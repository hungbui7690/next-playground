'use client'
import { Toaster } from 'react-hot-toast'

// 1. create Providers + use Toaster -> then go to layout.js
const Providers = ({ children }) => {
  return (
    <>
      <Toaster />
      {children}
    </>
  )
}
export default Providers
