import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Views
import Home from '../views/Home'
import Emprendimientos from '../views/Emprendimientos'
import EntrepreneurshipRegister from '../views/EntrepreneurshipRegister'



function PublicRoutes() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/entrepreneurships' element={ <Emprendimientos /> } />
          <Route path='/entrepreneurshipsregister' element={ <EntrepreneurshipRegister /> } />
        </Routes>
    </Router> 
  )
}

export default PublicRoutes