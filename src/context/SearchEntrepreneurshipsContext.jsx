import React, { createContext, useState, useEffect } from "react";


export const SearchEntrepreneurshipsContext = createContext();

export const SearchEntrepreneurshipsProvider = ({ children }) => {
  const [searchData, setSearchData] = useState(null) // Data original
  const [searchFilteredData, setSearchFilteredData] = useState(null) // Data filtrada

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "http://localhost:8000/api/entrepreneurships"
        );
        if (response.status === 200) {
          const data = await response.json();
          setSearchData(data);
          setSearchFilteredData(data);
        } else {
          alert("Hubo un problema de conexion.");
        }
      } catch {
        alert("No pudimos hacer la solicitud.");
      }
    }
    fetchData();

  }, []);

  return (
    <SearchEntrepreneurshipsContext.Provider
      value={{
        searchData,
        setSearchData,
        searchFilteredData,
        setSearchFilteredData
      }}
    >
      {children}
    </SearchEntrepreneurshipsContext.Provider>
  );
};
