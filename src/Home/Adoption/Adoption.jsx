import React, { useContext } from "react";
import styles from "./Adoption.module.css";
import FilterMenu from "./FilterMenu";
import { DataProvider } from "./DataContext";
import Results from "./Results";

const Adoption = () => {
  return (
    <div className={styles.search}>
      <DataProvider>
        <div className={styles.searchLeft}>
          <FilterMenu />
        </div>
        <div className={styles.searchRight}>
          <Results />
        </div>
      </DataProvider>
    </div>
  );
};

export default Adoption;
