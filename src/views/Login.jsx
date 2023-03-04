import React from 'react'
import Login from '../components/Login/Login'
import '../styles/login.css'


function LoginView() {
  return (
    <div className='loginview px-2'>
        <br />
        <Login />
        <br />
        <hr />
        <br />
        <a href="Register">No tengo cuenta</a>
    </div>
  )
}

export default LoginView