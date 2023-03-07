import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function LoginG() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
        const response = await axios.post('http://localhost:8000/api/login', { email, password })
        setMessage(response.data.message)
        const access_token = response.data.authorisation.token
        localStorage.setItem('token', access_token) // store the token in local storage
        axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}` // set the Authorization header for future requests
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Has iniciado sesión con éxito!',
          showConfirmButton: false,
          timer: 2000
        })
        setIsLoggedIn(true)
        setTimeout(() => {
          navigate('/')
        }, 2000); // Delay the navigation for 2 seconds (2000 milliseconds)
    } catch (error) {
        setMessage(error.response.data.message);
        Swal.fire({
          position: 'center',
          icon: 'error',  
          title: 'Ha habido un problema, prueba de nuevo!',
          showConfirmButton: false,
          timer: 2000
        })
    }
  }

  return (
    <section className="bg-gray-50 dark:bg-yellow-400">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-slate-50 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-slate-900">
                  Inicia sesión en tu cuenta
                </h1>
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-slate-900">Tu email</label>
                        <input type="email" name="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="beevip@gmail.com" required="" />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-slate-900">Contraseña</label>
                        <input type="password" name="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                              <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-200 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                            </div>
                            <div className="ml-3 text-sm">
                              <label htmlFor="remember" className="text-gray-500 dark:text-gray-700">Recuérdame</label>
                            </div>
                        </div>
                        <a href="#" className="text-sm ml-2 font-medium text-primary-600 hover:underline dark:text-blue-500">Olvidaste la contraseña?</a>
                    </div>
                    <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Inicia sesión</button>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Aún no tienes cuenta? <a href="/register" className="font-medium text-primary-600 hover:underline dark:text-blue-500">Regístrate</a>
                    </p>
                </form>
                {/* {message && <p>{message}</p>} */}
            </div>
        </div>
      </div>
    </section>
  )
}
