import React from 'react'
import Login from '../components/Login'
import Button from '../components/Button'
import Navbar from '../components/Navbar'

function Home() {
  return (
    <div>
        <Navbar/>
        <h1>Login</h1>
        <Login />
        <Button/>
    </div>
  )
}

export default Home