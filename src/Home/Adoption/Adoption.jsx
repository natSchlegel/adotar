import React, { useContext } from "react";
import styles from "./Adoption.module.css";
import FilterMenu from "./FilterMenu";
import { DataProvider } from "./DataContext";
import Results from "./Results";

const Adoption = () => {

  return (
    <div className={styles.search}>
      <div className={styles.searchLeft}>
        <DataProvider>
          <FilterMenu />
          <Results filteredData={filteredData} />
        </DataProvider>
      </div>
    </div>
  );
};

export default Adoption;
