import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function LogoutButton() {
  const navigate = useNavigate()
  const [isLoggedOut, setIsLoggedOut] = useState(false)

  const handleLogout = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/logout')
      console.log(response);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Te has desconectado con éxito!',
        showConfirmButton: false,
        timer: 2000
      })
      setIsLoggedOut(true)
      setTimeout(() => {
        navigate('/')
      }, 2000); // Delay the navigation for 2 seconds (2000 milliseconds)
    } catch (error) {
      console.error(error)
      Swal.fire({
        position: 'center',
        icon: 'error',  
        title: 'Ha habido un problema, prueba de nuevo!',
        showConfirmButton: false,
        timer: 2000
      })
    }
  }

  return <button onClick={handleLogout} className="block py-2 pl-3 pr-4 text-slate-900 bg-yellow-400 rounded md:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-slate-900"><i className="fa-solid fa-right-from-bracket"></i> Logout</button>;
}
