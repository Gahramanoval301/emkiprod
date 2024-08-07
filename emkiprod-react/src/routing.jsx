import React from 'react'
import { Route, Routes } from 'react-router'
import Header from './components/Header'
import NotFound from './pages/NotFound'
import About from './pages/About'
import Events from './pages/Events'
import Blogs from './pages/Blogs'
import Sponsors from './pages/Sponsors'

const WebRouting = () => {
    return (
        <Routes>
            <Route path='/' element={<Header />} />
            <Route path='/about' element={<About />} />
            <Route path='/events' element={<Events />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/sponsors' element={< Sponsors />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}

export default WebRouting