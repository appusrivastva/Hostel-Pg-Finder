import React from 'react'
import Footer from '../Footer'
import { Outlet } from 'react-router-dom'
export default function AdminLayout() {
  return (
    <>
    <Outlet/>
    <Footer/>
      
    </>
  )
}
