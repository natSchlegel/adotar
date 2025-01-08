import React, { useContext, useState, useMemo, useEffect } from "react";
import styles from "./FilterMenu.module.css";
import { DataContext } from "./DataContext";
import cachorro from "../../../img/filterMenu/dog.svg";
import gato from "../../../img/filterMenu/cat.svg";
import peixe from "../../../img/filterMenu/fish.svg";
import passaro from "../../../img/filterMenu/bird.svg";

const FilterMenu = () => {
  const { data, loading, error, setFilteredData } = useContext(DataContext);

  const [selectedFilters, setSelectedFilters] = useState({
    searchQuery: "",
    especie: "",
    criancas: false,
    cachorro: false,
    gatos: false,
    esterilizado: false,
    vacinado: false,
    desparasitado: false,
  });

  const handleFilterToggle = (filterKey) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filterKey]: !prev[filterKey],
    }));
  };

  const handleCardClick = (filterKey) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      especie: prevFilters.especie === filterKey ? "" : filterKey,
    }));
  };

  const isSelected = (filterKey) => selectedFilters.especie === filterKey;

  const filteredData = useMemo(() => {
    return (data || []).filter(
      (cat) =>
        (selectedFilters.especie === "" ||
          cat.especie.toLowerCase() ===
            selectedFilters.especie.toLowerCase()) &&
        cat.name
          .toLowerCase()
          .includes(selectedFilters.searchQuery.toLowerCase()) &&
        (!selectedFilters.criancas || cat.lidaBem.crianca) &&
        (!selectedFilters.cachorro || cat.lidaBem.cachorro) &&
        (!selectedFilters.gatos || cat.lidaBem.gato) &&
        (!selectedFilters.esterilizado || cat.saude.esterilizado) &&
        (!selectedFilters.vacinado || cat.saude.vacinado) &&
        (!selectedFilters.desparasitado || cat.saude.desparasitado)
    );
  }, [data, selectedFilters]);

  useEffect(() => {
    setFilteredData(filteredData);
  }, [filteredData, setFilteredData]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const renderFilterCards = (filters, clickHandler) =>
    filters.map((item) => (
      <div
        key={item.key}
        className={`${styles.filterCard} ${
          selectedFilters[item.key] ? styles.dark : styles.light
        }`}
        onClick={() => clickHandler(item.key)}
      >
        <img src={item.img} alt={item.label} className={styles.filterIcon} />
        <span>{item.label}</span>
      </div>
    ));

  return (
    <div className={styles.filterMenu}>
      <h2 className={styles.titleFilterMenu}>Filtrar Animais</h2>
      <div className={styles.filterSection}>
        <h3 className={styles.filterSubtitle}>Espécie</h3>
        <div className={styles.filterGrid}>
          {renderFilterCards(
            [
              { key: "Gato", img: gato, label: "Gato" },
              { key: "Cachorro", img: cachorro, label: "Cachorro" },
              { key: "Peixe", img: peixe, label: "Peixe" },
              { key: "Pássaro", img: passaro, label: "Pássaro" },
            ],
            handleCardClick
          )}
        </div>
      </div>
      <div className={styles.filterSection}>
        <h3 className={styles.filterSubtitle}>Compatibilidade</h3>
        <div className={styles.filterGrid}>
          {renderFilterCards(
            [
              { key: "gatos", img: "/img/cat-friendly.png", label: "Gatos" },
              {
                key: "cachorro",
                img: "/img/dog-friendly.png",
                label: "Cachorros",
              },
              { key: "criancas", img: "/img/baby.png", label: "Bebês" },
            ],
            handleFilterToggle
          )}
        </div>
      </div>
      <div className={styles.filterSection}>
        <h3 className={styles.filterSubtitle}>Saúde</h3>
        <div className={styles.filterGrid}>
          {renderFilterCards(
            [
              { key: "vacinado", img: "/img/vaccine.png", label: "Vacinado" },
              {
                key: "esterilizado",
                img: "/img/sterilized.png",
                label: "Esterilizado",
              },
              {
                key: "desparasitado",
                img: "/img/dewormed.png",
                label: "Vermifugado",
              },
            ],
            handleFilterToggle
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterMenu;
