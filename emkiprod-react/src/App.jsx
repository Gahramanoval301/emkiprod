import React from 'react';
import './App.css'
import { Link, Route, Routes, Router } from 'react-router-dom';
import Home from './Components/Home';
import Events from './Components/Events';
import Blogs from './Components/Blogs';
import Sponsors from './Components/Sponsors';
import About from './Components/About';
function App() {
  return (
   <div>
        <div className='navbar'>
          <Link to={'/'}>Home</Link>
          <Link to={'/events'}>Events</Link>
          <Link to={'/blogs'}>Blogs</Link>
          <Link to={'/sponsors'}>Sponsors</Link>
          <Link to={'/about'}>About Us</Link>
        </div>

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
