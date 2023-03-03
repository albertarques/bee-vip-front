import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from '../layout/Layout'
import Entrepreneurships from '../views/Entrepreneurships'
import SingleEntrepreneurship from '../views/SingleEntrepreneurship'
import Payments from '../views/Payments'

function PublicRoutes() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Layout />} />
          <Route path='/entrepreneurships' element={ <Entrepreneurships /> } />
          <Route path='/entrepreneurship/:id' element={ <SingleEntrepreneurship /> } />
          <Route path='/payments' element={ <Payments /> } />
        </Routes>
    </Router> 
  )
}

export default PublicRoutes