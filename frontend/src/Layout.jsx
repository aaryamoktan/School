import React from 'react'
import Nevbar from './Component/Nevbar'
import Footer from './Component/Footer'
import Top from './Component/Top'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <>
    <Outlet/>
    
    <Nevbar/>
    </>
  )
}

export default Layout