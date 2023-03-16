import React, { useState, useEffect, useContext } from "react";
import CategoryPopularSlider from "../components/partials/CategorySlider/CategoryPopularSlider";
import Searchbar from "../components/partials/Searchbar/Searchbar";
import CategoryHomeCard from "../components/partials/CategoryCard/CategoryHomeCard";
import InfoHome from "../components/InfoHome/InfoHome";
import { Link } from "react-router-dom";
import { SearchEntrepreneurshipsProvider } from "../context/SearchEntrepreneurshipsContext";
import { getEntrepreneurships } from "../services/entrepreneurships.service";
import { getCategories } from "../services/categories.service";

export default function Home() {
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null); // Data filtrada
  const [categories, setCategories] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getAllEntrepreneurships = async () => {
    const { data } = await getEntrepreneurships();
    setData(data.entrepreneurships);
  };

  const getAllCategories = async () => {
    const { data } = await getCategories();
    setData(data.categories);
  };

  useEffect(() => {
    getAllEntrepreneurships();
    getAllCategories();
  }, []);

  function filterEntrepreneurships(id) {
    const newData = data.filter((item) => item.category_id == id);
    setFilteredData(newData);
  }

  return (
    <div className="font-sans bg-slate-50">
      <section className="bg-blue-800 w-full p-2 sm:mx-auto sm:px-20">
        <h1 className="text-xl mt-2 mb-4 text-slate-100">
          Somos el mejor servicio para emprendimientos de Colombia. No esperes
          más a publicar el tuyo!
        </h1>
        <SearchEntrepreneurshipsProvider>
          <Searchbar />
        </SearchEntrepreneurshipsProvider>
      </section>

      <section className="container mt-4 mb-6 px-2 mx-auto">
        <h2 className="text-base font-medium font-title">
          Emprendimientos populares
        </h2>
        <div className="flex flex-row gap-2 flex-nowrap mt-4 mb-4 overflow-x-scroll">
        {data?.slice(0, 5).map(({ id, title, product_img }) => (
          <Link to={`/entrepreneurship/${id}`} key={id}>
            <CategoryPopularSlider title={title} image={product_img} />
          </Link>
        ))}
        </div>

        <h2 className="text-base font-medium font-title">Categorías</h2>
        <div className="flex flex-row mt-4 mb-4 overflow-x-scroll">
        {data?.slice(0, 6).map(({ id, name }) => (
          <div key={id} className="relative flex-shrink-0">
            <button
              id={id}
              onClick={filterEntrepreneurships}
              className="mr-2 px-4 py-2 rounded text-base text-slate-100 font-semibold bg-blue-700 active:bg-blue-700 active:text-slate-100"
            >
              {name}
            </button>
          </div>
        ))}
        </div>

        <div className="relative flex-shrink-0 w-full h-full">
        {data?.slice(0, 3).map(({ id, title, product_img }) => (
          <Link
            to={`/entrepreneurship/${id}`}
            key={id}
            className="flex flex-row mt-4 mb-4 flex-wrap gap-2"
          >
            <CategoryHomeCard title={title} image={product_img} />
          </Link>
        ))}
        </div>

        <h2 className="mt-6 text-base font-medium md:text-lg font-title">
          Publica tu emprendimiento o producto de forma segura en Beevip!
        </h2>
        <InfoHome />
      </section>
    </div>
  );
}
