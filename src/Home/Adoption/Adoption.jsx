import React, { useContext } from "react";
import styles from "./Adoption.module.css";
import FilterMenu from "./FilterMenu";
import { DataProvider } from "./DataContext";
import Results from "./Results";

const Adoption = () => {
  return (
    <>
    <div className={styles.headerSearch}>
    <h1 className={styles.headerTitle}>CENTRO DE ADOÇÃO</h1>
    <button className={styles.headerButton}>Doe um animal</button>
  </div>
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
    </>
  );
};

export default Adoption;
