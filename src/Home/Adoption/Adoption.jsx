import React, { useContext } from "react";
import Search from "./Search";
import styles from "./Adoption.module.css";
import FilterMenu from "./FilterMenu";
import Results from "./Results";
import { useState, useMemo, useEffect } from "react";
import { DataProvider } from "./DataContext";

const Adoption = () => {

  return (
    <div className={styles.search}>
      <div className={styles.searchLeft}>
      <DataProvider>
          <FilterMenu/>
          <Results/>
          </DataProvider>
      </div>
    </div>
  );
};

export default Adoption;
