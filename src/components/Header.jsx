import React  from 'react'

import { Link, useLocation } from 'react-router-dom'
import useDarkMode from './useDarkMode'
const menuNav = [
    {
        name: 'Thế Giới',
        path: '/world'
    },
    {
        name: 'Việt Nam',
        path: '/'
    },
    {
        name: 'Tin Tức',
        path: '/news'
    }
]
const Header = () => {
   const { pathname } =  useLocation()
  
   const activeMenu = menuNav.findIndex(e => e.path === pathname)
    const [isDark, toggleDarkMode] = useDarkMode();
   
   return (
        <header className="  bg-white dark:bg-[#0f172a] h-16 flex w-full items-center shadow-md px-3 md:px-8 sticky top-0 z-40 dark:border-b dark:border-gray-600 dark:text-white" >
            <div className=" w-4/5 md:w-1/4 flex items-center">
               
                    <i className='bx bxs-virus  text-[#53c7f9] text-[40px] mr-2 '></i>
                    <span className=' text-[14px] font-bold '>Covid-19 Tracker</span>
               
            </div>
            <div className=" md:w-6/12 hidden  md:flex items-center justify-center  ">
                {menuNav.map((item, index) => (
                    <li className=' list-none ml-10 text-[15px] text-slate-500 dark:text-white ' key={index}>
                        <Link className={`${index === activeMenu ? 'active dark:text-white ' : ''} hover:active dark:hover:text-white`} to={item.path}>{item.name}</Link>
                    </li>
                ))}
            </div>
            <div className=" w-1/5 md:w-1/4 items-center text-right ">
                <i className={`cursor-pointer bx bxs-${isDark ? 'moon':'sun'} text-[25px] ${isDark ? 'text-[#0ea5e9]' : 'text-yellow-400'}`}
                 onClick={()=>{toggleDarkMode(!isDark)}}></i>
            </div>
        </header>
    )
}

export default Header
