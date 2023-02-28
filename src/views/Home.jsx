import React from 'react';
import SelectType from '../components/entrepRegister/SelectType';
import Login from '../components/Login';


function Home() {
  return (
    <div>
        <h1>Login</h1>
        <Login />
        <SelectType/>
    </div>
  )
}

export default Home