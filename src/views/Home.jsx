import React, { useState, useEffect } from 'react'
import CategoryPopularSlider from '../components/partials/CategorySlider/CategoryPopularSlider'
import CategoryMainSlider from '../components/partials/CategorySlider/CategoryMainSlider'
import Searchbar from '../components/partials/Searchbar/Searchbar'
import CategoryHomeCard from '../components/partials/CategoryCard/CategoryHomeCard'
import InfoHome from '../components/InfoHome/InfoHome'
import Coffee from '../assets/coffee.jpg'
import { getEntrepreneurshipData } from '../apiService/entrepreneurshipService'
import { getCategoriesData } from '../apiService/categoriesService'
import { Link } from 'react-router-dom'

export default function Home() {
  const [search, setSearch] = useState("")

  const [data, setData] = useState();
  const [categories, setCategories] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData(){
      const entrepreneurships = await getEntrepreneurshipData();
      setData(entrepreneurships.data);
      const categories = await getCategoriesData();
      setCategories(categories.data.categories)
      // console.log(categories)
      setLoading(false);
    }
    getData();
  }, []);

  return (
    <div className="font-sans bg-slate-50">
      <section className="bg-blue-800 w-full p-2 sm:mx-auto sm:px-20">
        <h1 className="text-xl mt-2 mb-4 text-slate-100">Somos el mejor servicio para emprendimientos de Colombia. No esperes más a publicar el tuyo!</h1>
        <Searchbar />
      </section>

      <section className="container mt-4 mb-6 px-2 mx-auto">
        <h2 className="text-base font-medium font-title">Emprendimientos populares</h2>
        <div className="flex flex-row gap-2 mt-4 mb-4 overflow-x-scroll">
          {!loading && data.entrepreneurships.slice(0,3).map(item => (
            <Link to={`/entrepreneurship/${item.id}`}>
              <CategoryPopularSlider title={item.title} key={item.id} image={Coffee} />
            </Link>
          ))}
        </div>
        
        <h2 className="text-base font-medium font-title">Categorías</h2>
        <div className="flex flex-row mt-4 mb-4 overflow-x-scroll">
          {!loading && categories.slice(0,6).map(item => (
            <CategoryMainSlider name={item.name} key={item.id} />
          ))}
        </div>
        
        <div className="relative flex-shrink-0 w-full h-full">
          {!loading && data.entrepreneurships.slice(0,3).map(item => (
            <Link to={`/entrepreneurship/${item.id}`} className="flex flex-row mt-4 mb-4 flex-wrap gap-2">
              <CategoryHomeCard title={item.title} key={item.id} />
            </Link>
          ))}
        </div>

        <h2 className="mt-6 text-base font-medium font-title">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, aut.</h2>
        <InfoHome />
      </section>
    </div>
  )
}
