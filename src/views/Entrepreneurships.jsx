import React, { useState, useEffect } from 'react'
import EntrepreneurshipCard from '../components/partials/EntrepreneurshipCard/EntrepreneurshipCard'
import Searchbar from '../components/partials/Searchbar/Searchbar'
import { getEntrepreneurshipData } from '../apiService/entrepreneurshipService'
import { getCategoriesData } from '../apiService/categoriesService'
import BackButton from '../components/partials/BackButton/BackButton'

export default function Entrepreneurships() {
  const [data, setData] = useState(null) // Data original
  const [filteredData, setFilteredData] = useState(null) // Data filtrada
  const [categories, setCategories] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function getData(){
      const entrepreneurships = await getEntrepreneurshipData();
      setData(entrepreneurships.data.entrepreneurships);
      setFilteredData(entrepreneurships.data.entrepreneurships);
      const response = await getCategoriesData();
      setCategories(response.categories)
      setLoading(false);
    }
    getData();
  }, []);

  function filterEntrepreneurships(id){
    const newData = data.filter(item => item.category_id == id)
    setFilteredData(newData)
  }

  return (
    <div className="container mb-6 px-2 md:mx-auto">
      <BackButton />
      <div className="flex flex-row mt-4 mb-4 overflow-x-scroll">
        {categories && categories.slice(0,6).map(item => (
            <div key={item.id} className="relative flex-shrink-0">
              <button onClick={(e) => filterEntrepreneurships(e.target.id)} id={item.id} className="mr-2 px-4 py-2 rounded text-base text-slate-100 font-semibold bg-blue-700 active:bg-blue-700 active:text-slate-100">{item.name}</button>
            </div>
        ))}
      </div>
        <Searchbar />

      <div className="flex flex-col justify-center sm:justify-between md:gap-4 md:flex-shrink-0 md:flex-row md:flex-wrap">
        {filteredData && filteredData.map(item => (
          <EntrepreneurshipCard key={item.id} id={item.id} title={item.title} email={item.email} description={item.description} image={item.product_img} />
        ))} 
      </div>
    </div>
  )
}
