import React, { useState, useEffect } from 'react'
import EntrepreneurshipCard from '../components/partials/EntrepreneurshipCard/EntrepreneurshipCard'
import Searchbar from '../components/partials/Searchbar/Searchbar'
import CategoryMainSlider from '../components/partials/CategorySlider/CategoryMainSlider'
import Coffee from '../assets/coffee.jpg'
import { getEntrepreneurshipData } from '../apiService/entrepreneurshipService'
import { getCategoriesData } from '../apiService/categoriesService'
import BackButton from '../components/partials/BackButton/BackButton'

export default function Entrepreneurships() {
  const [search, setSearch] = useState('')

  const [data, setData] = useState(null)
  const [categories, setCategories] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function getData(){
      const entrepreneurships = await getEntrepreneurshipData();
      setData(entrepreneurships.data);
      const categories = await getCategoriesData();
      setCategories(categories.data.categories)
      console.log(categories)
      setLoading(false);
    }
    getData();
  }, []);

  return (
    <div className="container mb-6 px-2 md:mx-auto">
      <BackButton />
      <div className="flex flex-row mt-4 mb-4 overflow-x-scroll">
        {categories && categories.slice(0,6).map(item => (
          <CategoryMainSlider key={item.id} name={item.name} />
        ))}
      </div>

      <Searchbar />
      
      <div className="flex flex-col md:gap-4 md:flex-shrink-0 md:flex-row md:flex-wrap">
        {data && data.entrepreneurships.slice(0,6).map(item => (
          <a href={`/entrepreneurship/${item.id}`}>
            <EntrepreneurshipCard key={item.id} id={item.id} title={item.title} email={item.email} description={item.description} image={Coffee} />
          </a>
        ))} 
      </div>
    </div>
  )
}
