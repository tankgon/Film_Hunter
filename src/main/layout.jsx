import React from 'react'
import Header from './Header'
import Footer from './footer'
import { Outlet } from 'react-router-dom';

function layout() {
  return (
    <div id="shell">
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default layout