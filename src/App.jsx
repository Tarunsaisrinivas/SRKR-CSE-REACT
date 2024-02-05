import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import ImageGallery from './pages/ImageGallery'
import Research from './pages/Research'
import Publication from './pages/Publication'

import Placements from './pages/Placements'
import Achievements from './pages/Achievements'
import Sample from './pages/Sample'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Gallery' element={<ImageGallery />} />
      <Route path='/Research' element={<Research />} />
      <Route path='/Publication' element={<Publication />} />
      <Route path='/Placements' element={<Placements />} />
      <Route path='/Achievements' element={<Achievements />} />
      <Route path='/Sample' element={<Sample />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App