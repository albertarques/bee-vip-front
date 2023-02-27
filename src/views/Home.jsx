import React from 'react'
import CategoryPopularSlider from '../components/partials/CategorySlider/CategoryPopularSlider'
import CategoryMainSlider from '../components/partials/CategorySlider/CategoryMainSlider'
import Searchbar from '../components/partials/Searchbar/Searchbar'
import CategoryHomeCard from '../components/partials/CategoryCard/CategoryHomeCard'
import InfoHome from '../components/InfoHome/InfoHome'

export default function Home() {
  return (
    <div className="font-sans bg-slate-50">
      <section className="bg-blue-800 w-full p-2 sm:mx-auto sm:px-20">
        <h1 className="text-xl mt-2 mb-4 text-slate-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sunt illo quidem.</h1>
        <Searchbar />
      </section>

      <section className="container mt-4 mb-4 px-2 mx-auto">
        <h2 className="text-base font-medium font-title">Categorías Populares</h2>
        <CategoryPopularSlider />

        <h2 className="text-base font-medium font-title">Categorías</h2>
        <CategoryMainSlider />
        <CategoryHomeCard />

        <h2 className="mt-6 text-base font-medium font-title">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, aut.</h2>
        <InfoHome />
      </section>
    </div>
  )
}
