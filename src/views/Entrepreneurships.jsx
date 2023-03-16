import React, { useState, useEffect } from "react";
import EntrepreneurshipCard from "../components/partials/EntrepreneurshipCard/EntrepreneurshipCard";
import Searchbar from "../components/partials/Searchbar/Searchbar";
import BackButton from "../components/partials/BackButton/BackButton";
import { getEntrepreneurships } from "../services/entrepreneurships.service";
import { getCategories } from "../services/categories.service";

export default function Entrepreneurships() {
  const [data, setData] = useState(null); // Data original
  const [filteredData, setFilteredData] = useState(null); // Data filtrada
  const [categories, setCategories] = useState(null);
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
    <div className="container mb-6 px-2 md:mx-auto">
      <BackButton />
      <div className="flex flex-row mt-4 mb-4 overflow-x-scroll">
        {data?.slice(0, 6).map(({ id, name }) => (
          <div key={id} className="relative flex-shrink-0">
            <button
              onClick={filterEntrepreneurships}
              id={id}
              className="mr-2 px-4 py-2 rounded text-base text-slate-100 font-semibold bg-blue-700 active:bg-blue-700 active:text-slate-100"
            >
              {name}
            </button>
          </div>
        ))}
      </div>
      <Searchbar />

      <div className="flex flex-col justify-center sm:justify-between md:gap-4 md:flex-shrink-0 md:flex-row md:flex-wrap">
        {filteredData?.map(({id, title, email, description, product_img}) => (
            <EntrepreneurshipCard
              key={id}
              id={id}
              title={title}
              email={email}
              description={description}
              image={product_img}
            />
          ))}
      </div>
    </div>
  );
}
