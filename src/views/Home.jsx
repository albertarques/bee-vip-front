import React from 'react'
import Login from '../components/Login'
import Button from '../components/Button'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
        <Navbar/>
        <h1>Login</h1>
        <Login />
        <Button/>
        <Footer/>
    </div>
  )
}

export default Home