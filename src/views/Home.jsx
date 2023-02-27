import React from 'react'
import CategorySlider from '../components/partials/CategorySlider/CategorySlider'
import Searchbar from '../components/partials/Searchbar/Searchbar'

export default function Home() {
  return (
    <div className="font-sans">
      <div className="bg-blue-800 w-full p-2 sm:mx-auto sm:px-20">
        <h1 className="text-xl mt-2 mb-4 text-slate-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sunt illo quidem.</h1>
        <Searchbar />
      </div>
      <div className="container mt-4 px-2 mx-auto">
       <h2 className="font-medium font-title">Categorías</h2>
       <CategorySlider />
      </div>
    </div>
  )
}
