import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { SearchEntrepreneurshipsContext } from '../../../context/SearchEntrepreneurshipsContext'

export default function Searchbar(props) {

  const {searchData} = useContext(SearchEntrepreneurshipsContext)
  const {searchFilteredData, setSearchFilteredData} = useContext(SearchEntrepreneurshipsContext)

  const [searchWord, setSearchWord] = useState('')
  

  return (
    <>
      <div className="mb-2">
        <form>   
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-400">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input onChange={(e) => setSearchWord(e.target.value)} type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-white-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Prueba con 'pasteles cumple'" required />
            </div>
        </form>
        <button type="submit" className="mt-2 w-full text-slate-900 bg-yellow-400 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-yellow-400 dark:hover:bg-red-500 dark:hover:text-slate-100 dark:focus:ring-blue-800">Buscar</button>
      </div>
      
      <div>
        {searchWord !== '' && searchData.entrepreneurships.map(item => 
          item.title.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().includes(searchWord) ?
            <>
              <h2>Resultados:</h2>
              <Link to={`/entrepreneurship/${item.id}`} key={item.id} className="flex flex-row mt-4 mb-4 flex-wrap gap-2">
                <h2>{item.title}</h2>
              </Link> 
            </>
            : null
        )}
      </div>
    </>
  )

  return (
    <div className="mb-2">
      <form>   
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-400">Search</label>
          <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </div>
              {console.log(searchData)}

              <input onChange={(e) => {
                setSearchWord(e.target.value)

                // console.log(searchWord)
                }} type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-white-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Prueba con 'pasteles cumple'" required />
          </div>
      </form>
      <button type="submit" className="mt-2 w-full text-slate-900 bg-yellow-400 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-yellow-400 dark:hover:bg-red-500 dark:hover:text-slate-100 dark:focus:ring-blue-800">Buscar</button>
    </div>
  )
}
