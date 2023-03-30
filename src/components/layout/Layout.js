import React from 'react'
import Header from "../header/Header";
import Routers from '../../routers/Routers';
import Footer from '../footer/Footer';

function Layout() {
  return (
    <>
    <Header/>
    <div>
        <Routers/>
    </div>
    <Footer/>
    </>
  )
}

export default Layout