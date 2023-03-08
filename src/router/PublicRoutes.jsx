import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../views/Home'
import Entrepreneurships from '../views/Entrepreneurships'
import EntrepreneurshipRegister from '../views/EntrepreneurshipRegister'

function PublicRoutes() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/entrepreneurships' element={ <Entrepreneurships /> } />
          <Route path='/entrepreneurshipsregister' element={ <EntrepreneurshipRegister /> } />
        </Routes>
    </Router> 
  )
}

export default PublicRoutes