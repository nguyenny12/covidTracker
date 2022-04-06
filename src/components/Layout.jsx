import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routers from '../router/Routers'
import Header from './Header'
import Footer from './Footer'
import Menu from './Menu'

const Layout = () => {
    return (
         
        <BrowserRouter>
           <div className=' min-h-screen flex flex-col items-center justify-start bg-gray-50 dark:bg-[#0f172a] '>
            <Header />

            <div className="sm:flex w-full z-10 mt-4 ">
                <Routers />
            </div>
            <Footer />
            <div className="pt-10">
            <Menu />
            </div>
           </div>
        
         </BrowserRouter>
    
    )
}

export default Layout
