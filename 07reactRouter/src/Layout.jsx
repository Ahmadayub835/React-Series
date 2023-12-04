import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
//This is the officialy App.jsx we can also use app.jsx

function Layout () {
  return (
    <>
    <Header />
    <Outlet /> {/*We used outlet because we want not to change the header and footer it remains same*/}
    <Footer />
    </>
  )
}

export default Layout