import React, { useState, useEffect } from 'react'
import CategoryPopularSlider from '../components/partials/CategorySlider/CategoryPopularSlider'
import CategoryMainSlider from '../components/partials/CategorySlider/CategoryMainSlider'
import Searchbar from '../components/partials/Searchbar/Searchbar'
import CategoryHomeCard from '../components/partials/CategoryCard/CategoryHomeCard'
import InfoHome from '../components/InfoHome/InfoHome'
import axios from 'axios'
import Coffee from '../assets/coffee.jpg'

export default function Home() {
  const [search, setSearch] = useState("")

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/entrepreneurships')
        console.log(response.data)
        setData(response.data)
        setError(null)
      } catch (err) {
        setError(err.message)
        setData(null)
      } finally {
        setLoading(false)
      }
    };
    getData()
  }, [])

  return (
    <div className="font-sans bg-slate-50">
      <section className="bg-blue-800 w-full p-2 sm:mx-auto sm:px-20">
        <h1 className="text-xl mt-2 mb-4 text-slate-100">Somos el mejor servicio para emprendimientos de Colombia. No esperes más a publicar el tuyo!</h1>
        <Searchbar />
      </section>

      <section className="container mt-4 mb-6 px-2 mx-auto">
        <h2 className="text-base font-medium font-title">Emprendimientos populares</h2>
        <div className="flex flex-row gap-2 mt-4 mb-4 overflow-x-scroll">
          {data && data.entrepreneurships.slice(0,3).map(item => (
            <a href={`/entrepreneurship/${item.id}`}>
              <CategoryPopularSlider key={item.id} title={item.title} image={Coffee} />
            </a>
          ))}
        </div>
        
        <h2 className="text-base font-medium font-title">Categorías</h2>
        <div className="flex flex-row mt-4 mb-4 overflow-x-scroll">
          {data && data.categories.slice(0,6).map(item => (
            <CategoryMainSlider key={item.id} name={item.name} />
          ))}
        </div>
        
        <div className="flex flex-row mt-4 mb-4 flex-wrap gap-2">
          {data && data.entrepreneurships.slice(0,3).map(item => (
            <CategoryHomeCard key={item.id} title={item.title} image={Coffee} />
          ))}
        </div>

        <h2 className="mt-6 text-base font-medium font-title">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, aut.</h2>
        <InfoHome />
      </section>
    </div>
  )
}
