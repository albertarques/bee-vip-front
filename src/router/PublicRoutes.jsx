import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Views
import Home from '../views/Home'
import Aboutus from '../views/Aboutus'
import RegisterView from '../views/RegisterView'
import LoginView from '../views/LoginView'


import EntrepreneurshipRegister from '../views/EntrepreneurshipRegister'

function PublicRoutes() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/aboutus' element={ <Aboutus /> } />
          <Route path='/loginview' element={ <LoginView /> } />
          <Route path='/registerview' element={ <RegisterView /> } />
          <Route path='/entrepreneurshipsregister' element={ <EntrepreneurshipRegister /> } />
        </Routes>
    </Router> 
  )
}

export default PublicRoutes