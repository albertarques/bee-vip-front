import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../views/Home'
import Layout from '../layout/Layout'
import Entrepreneurships from '../views/Entrepreneurships'
import SingleEntrepreneurship from '../views/SingleEntrepreneurship'
import CreateEntrepreneurship from '../views/CreateEntrepreneurship'
import Payments from '../views/Payments'
import About from '../views/About'
import Contact from '../views/Contact'
import Login from '../views/Login'
import Register from '../views/Register'
import { SearchEntrepreneurshipsContext, SearchEntrepreneurshipsProvider } from '../context/SearchEntrepreneurshipsContext'

function PublicRoutes() {
  return (
    <SearchEntrepreneurshipsProvider>
      <Router>
          <Layout>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='/entrepreneurships' element={<Entrepreneurships />} />
              <Route path='/entrepreneurship/:id' element={<SingleEntrepreneurship />} />
              <Route path='/createEntrepreneurship' element={<CreateEntrepreneurship />} />
              <Route path='/payments' element={<Payments />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
            </Routes>
          </Layout>
      </Router> 
    </SearchEntrepreneurshipsProvider>
  )
}

export default PublicRoutes