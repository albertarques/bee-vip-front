import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Views
import Home from '../views/Home'
import Entrepreneurship from '../views/Entrepreneuships'

function PublicRoutes() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/entrepreneurships' element={ <Entrepreneurship/> } />
        </Routes>
    </Router> 
  )
}

export default PublicRoutes