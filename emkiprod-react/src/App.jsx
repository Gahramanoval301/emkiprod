import React from 'react';
import './App.css'
import { Link, Route, Routes, Router } from 'react-router-dom';
import Home from './Components/Home';
import Events from './Components/Events';
import Blogs from './Components/Blogs';
import Sponsors from './Components/Sponsors';
import About from './Components/About';
import logo from './Images/logo.png';
function App() {
  return (
   <div>
    <div className='header flex justify-around'>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className='flex h-16 gap-3 navbar'>
        <div className='flex gap-3 h-12 w-full pt-3 nav'>
          <Link to={'/'}>Home</Link>
          <Link to={'/events'}>Events</Link>
          <Link to={'/blogs'}>Blogs</Link>
          <Link to={'/sponsors'}>Sponsors</Link>
          <Link to={'/about'}>About Us</Link>
        </div>
      </div>
      <div className='flex gap-3'>
        <select name="" id="select">
          <option value="EN">EN</option>
          <option value="AZ">AZ</option>
          <option value="RU">RU</option>
        </select>
        <div>
          <button className='bg-white text-black'>Buy ticket</button>
        </div>
      </div>
    </div>
        <p className='font-bold text-3xl text-amber-600'>Tailwind</p>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/events' element={<Events />}/>
        <Route path='/blogs' element={<Blogs />}/>
        <Route path='/sponsors' element={<Sponsors />}/>
        <Route path='about' element={<About />}/>
      </Routes>
   </div>
  )
}

export default App
