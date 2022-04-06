import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import World from '../pages/World'
import News from '../pages/News'
const Routers = () => {
    return (
       <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/world' element={<World />} />
          <Route path='/news' element={<News /> } />
       </Routes>
    )
}

export default Routers
