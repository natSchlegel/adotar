import React, { useContext } from "react";
import styles from "./Adoption.module.css";
import FilterMenu from "./FilterMenu";
import { DataProvider } from "./DataContext";

const Adoption = () => {

  return (
    <div className={styles.search}>
      <div className={styles.searchLeft}>
        <DataProvider>
          <FilterMenu />
        </DataProvider>
      </div>
    </div>
  );
};

export default Adoption;
