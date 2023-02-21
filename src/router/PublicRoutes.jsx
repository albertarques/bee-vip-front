import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 

function PublicRoutes() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={ <Dashboard /> } />
          <Route path='/entrepreneurships' element={ <Dashboard /> } />
          <Route path='/home' element={ <Home /> } />
        </Routes>
    </Router> 
  )
}

export default PublicRoutes