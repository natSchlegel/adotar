import React, { useState, useEffect } from "react";
import FlipCard from "./cards/Flipcart";
import styles from "./searchRect.module.css";

const SearchRect = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

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

  const filteredData = data.filter((cat) =>
    cat.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Search by name..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <div className={styles.catCards}>
        {filteredData.length > 0 ? (
          filteredData.map((cat) => <FlipCard key={cat.id} data={cat} />)
        ) : (
          <p>No matches found</p>
        )}
      </div>
    </div>
  );
};

export default SearchRect;
