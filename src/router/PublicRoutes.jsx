import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../views/Home'
import Layout from '../layout/Layout'
import Entrepreneurships from '../views/Entrepreneurships'
import SingleEntrepreneurship from '../views/SingleEntrepreneurship'
import Payments from '../views/Payments'

function PublicRoutes() {
  return (
    <Router>
        <Layout>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/entrepreneurships' element={<Entrepreneurships />} />
            <Route path='/entrepreneurship/:id' element={<SingleEntrepreneurship />} />
            <Route path='/payments' element={<Payments />} />
          </Routes>
        </Layout>
    </Router> 
  )
}

export default PublicRoutes