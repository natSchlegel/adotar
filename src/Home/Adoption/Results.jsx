import React, { useContext } from "react";
import FlipCard from "./Flipcart";
import { DataContext } from "./DataContext";
import FiltersApplied from "./FiltersApplied";

const Results = () => {
  const { data, error, loading, filteredData } = useContext(DataContext);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!data) {
    return <p>No data available.</p>;
  }

  return (
    <>
      <div className="">
        <FiltersApplied />
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 g-4">
          {filteredData.length > 0 ? (
            filteredData.map((cat) => <FlipCard key={cat.id} data={cat} />)
          ) : (
            <p>No matches found</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Results;
