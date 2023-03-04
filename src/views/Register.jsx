import React from 'react'
import Register from '../components/register/Register'
import '../styles/login.css'

function RegisterView() {
  return (
    <div className='loginview px-2'>
        <Register />
        <br />
        <hr />
        <br />
        <a href="Login">Ya tengo cuenta</a>
    </div>
  )
}

export default RegisterView