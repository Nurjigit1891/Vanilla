import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../home/Home'
import Contact from '../Contact/Contact'
import Menu from '../menu/Menu'
import About from '../About/About'

const Layout = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  )
}

export default Layout
