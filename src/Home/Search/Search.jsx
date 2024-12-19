import { useState, useEffect, useMemo } from "react";
import React from "react";
import FormSearch from "./FormSearch.jsx";

const Search = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://natschlegel.github.io/adotar-api/animals-api.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="album py-5 bg-body-tertiary">
      <div className="container">
      <FormSearch data={data} />    
      </div>
    </div>
  );
};

export default Search;
