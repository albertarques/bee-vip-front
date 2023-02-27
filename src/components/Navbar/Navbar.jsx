import React from 'react'
import Bee from '../../assets/beeLogo.svg'

export default function Navbar() {
  return (
    <div>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-yellow-400">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a href="/" className="flex items-center">
              <img src={Bee} className="h-7 mr-3 sm:h-9" alt="Flowbite Logo" />
              <span className="italic self-center text-lg font-title font-semibold whitespace-nowrap -ml-2 dark:text-slate-900 sm:text-xl">Beevip!</span>
          </a>
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-slate-900 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-slate-900 dark:hover:bg-blue-500 dark:focus:ring-red-500" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 font-medium font-sans rounded-lg bg-yellow-400 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-semibold">
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-slate-900 bg-yellow-400 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-slate-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-slate-900 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Categorías</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-slate-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-slate-900 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Sobre nosotros</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-slate-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-slate-900 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contacto</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-slate-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-slate-900 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"><i className="fa-solid fa-right-to-bracket"></i> Login</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-slate-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-slate-900 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"><i className="fa-solid fa-user"></i> Register</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
