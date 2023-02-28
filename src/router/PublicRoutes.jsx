import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Views
import Home from '../views/Home'
import Emprendimientos from '../views/Emprendimientos'
import Aboutus from '../views/Aboutus'

function PublicRoutes() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/entrepreneurships' element={ <Emprendimientos /> } />
          <Route path='/aboutus' element={ <Aboutus /> } />
        </Routes>
    </Router> 
  )
}

export default PublicRoutes