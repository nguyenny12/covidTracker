import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import vietnam from '../asset/vietnam.png'
import world from '../asset/earth.png';
import news from '../asset/world-news.png';
const menuNav = [
    {
        name: 'Thế Giới',
        path: '/world',
        img: world
    },
    {
        name: 'Việt Nam',
        path: '/',
       img : vietnam
    },
    {
        name: 'Tin Tức',
        path: '/news',
        img : news
    }
]
const Menu = () => {
     const { pathname } = useLocation();
     const activeNav = menuNav.findIndex(e => e.path === pathname);
    
  return <div className=' bg-white dark:bg-[#0f172a] px-8 pt-4 pb-3 fixed inset-x-0 bottom-0 md:hidden w-full flex items-center justify-between border-t-2 border-slate-100 z-50'>  
       {
           menuNav.map((item , index)=>(
               <Link key={index} to={item.path} className={`${index === activeNav ? 'active dark:text-white' : ''} flex flex-col items-center text-slate-500 transition transform  hover:scale-110 dark:hover:text-white`}>
                   <img src={item.img} alt="" className=" w-8 " />
                   <p className=' mt-1 text-[12px]'>{item.name}</p>
               </Link>
           ))
       }
  </div>;
};

export default Menu;
