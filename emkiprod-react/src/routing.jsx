import React from 'react'
import { Route, Routes } from 'react-router'
import NotFound from './pages/NotFound'
import About from './pages/About'
import Events from './pages/Events'
import Blogs from './pages/Blogs'
import Sponsors from './pages/Sponsors'
import Home from './pages/Home'
import Blog from './pages/Blog'

const WebRouting = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/events' element={<Events />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/blogs/blog/:id' element={<Blog />} />
            <Route path='/sponsors' element={< Sponsors />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}

export default WebRouting