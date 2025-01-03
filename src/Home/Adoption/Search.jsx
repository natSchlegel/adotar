import { useState, useEffect, useMemo } from "react";
import React from "react";
import FormSearch from "./FormSearch.jsx";
import styles from "./Search.module.css";

const Search = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return data;
};

export default Search;
