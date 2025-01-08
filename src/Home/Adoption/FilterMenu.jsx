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

  const handleCardClick = (filterKey) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      especie: prevFilters.especie === filterKey ? "" : filterKey, // Toggle species filter
    }));
  };

  const isSelected = (filterKey) => selectedFilters.especie === filterKey;

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Filter data based on selected filters
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

  // Update filtered data whenever filters change
  useEffect(() => {
    setFilteredData(filteredData);
  }, [filteredData, setFilteredData]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={styles.filterMenu}>
      <h2 className={styles.titleFilterMenu}>Filtrar Animais</h2>
      <div className={styles.filterSection}>
        <h3 className={styles.filterSubtitle}>Espécie</h3>
        <div className={styles.filterGrid}>
          <div className={`${styles.filterCard} ${styles.dark}`}>
            <img src={gato} alt="Gato" className={styles.filterIcon} />
            <span>Gato</span>
          </div>
          <div className={`${styles.filterCard} ${styles.dark}`}>
            <img src={cachorro} alt="Cachorro" className={styles.filterIcon} />
            <span>Cachorro</span>
          </div>
          <div className={`${styles.filterCard} ${styles.dark}`}>
            <img src={peixe} alt="Peixe" className={styles.filterIcon} />
            <span>Peixe</span>
          </div>
          <div className={`${styles.filterCard} ${styles.dark}`}>
            <img src={passaro} alt="Pássaro" className={styles.filterIcon} />
            <span>Pássaro</span>
          </div>
        </div>
      </div>
      <div className={styles.filterSection}>
        <h3 className={styles.filterSubtitle}>Compatibilidade</h3>
        <div className={styles.filterGrid}>
          <div className={`${styles.filterCard} ${styles.dark}`}>
            <img
              src="/img/cat-friendly.png"
              alt="Gatos"
              className={styles.filterIcon}
            />
            <span>Gatos</span>
          </div>
          <div className={`${styles.filterCard} ${styles.light}`}>
            <img
              src="/img/dog-friendly.png"
              alt="Cachorros"
              className={styles.filterIcon}
            />
            <span>Cachorros</span>
          </div>
          <div className={`${styles.filterCard} ${styles.dark}`}>
            <img
              src="/img/baby.png"
              alt="Bebês"
              className={styles.filterIcon}
            />
            <span>Bebês</span>
          </div>
        </div>
        <div className={styles.filterSection}>
          <h3 className={styles.filterSubtitle}>Saúde</h3>
          <div className={styles.filterGrid}>
            <div className={`${styles.filterCard} ${styles.dark}`}>
              <img
                src="/img/vaccine.png"
                alt="Vacinado"
                className={styles.filterIcon}
              />
              <span>Vacinado</span>
            </div>
            <div className={`${styles.filterCard} ${styles.light}`}>
              <img
                src="/img/sterilized.png"
                alt="Esterilizado"
                className={styles.filterIcon}
              />
              <span>Esterilizado</span>
            </div>
            <div className={`${styles.filterCard} ${styles.dark}`}>
              <img
                src="/img/dewormed.png"
                alt="Vermifugado"
                className={styles.filterIcon}
              />
              <span>Vermifugado</span>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.filterCard} ${isSelected("Cachorro") ? styles.dark : styles.light}`} onClick={() => handleCardClick("Cachorro")}>
        <img src="/img/cat.svg" alt="Cachorro" className="filter-icon" />
        <span>Cachorro</span>
      </div>

      {/* <div
        className={`filterCard ${isSelected("Cachorro") ? "selected" : "light"
          }`}
        onClick={() => handleCardClick("Cachorro")}
      >
        <img src="/img/cat.svg" alt="Cachorro" className="filter-icon" />
        <span>Gato</span>
      </div>

      <div className={`${styles.filterCard} ${styles.dark}`}>
        <img src={cachorro} alt="Cachorro" class="filter-icon" />
        <span>Cachorro</span>
      </div>
      "filterCard dark" */}

      {/* <input
        type="text"
        name="searchQuery"
        className={styles.filterInput}
        placeholder="Nome do Animal"
        value={selectedFilters.searchQuery}
        onChange={handleInputChange}
      />

      <label className={styles.formLabel}>Espécie</label>
      <select
        name="especie"
        value={selectedFilters.especie}
        onChange={handleInputChange}
        className={styles.filterDropdown}
      >
        <option value="">Todos</option>
        <option value="Gato">Gato</option>
        <option value="Cachorro">Cachorro</option>
      </select>

      <label className={styles.formLabel}>Filtrar por Saúde</label>
      <div className={styles.filterGroup}>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="esterilizadoCheck"
            name="esterilizado"
            checked={selectedFilters.esterilizado}
            onChange={handleInputChange}
          />
          <label className="form-check-label" htmlFor="esterilizadoCheck">
            Esterilizado
          </label>
        </div>

        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="vacinadoCheck"
            name="vacinado"
            checked={selectedFilters.vacinado}
            onChange={handleInputChange}
          />
          <label className="form-check-label" htmlFor="vacinadoCheck">
            Vacinado
          </label>
        </div>

        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="desparasitadoCheck"
            name="desparasitado"
            checked={selectedFilters.desparasitado}
            onChange={handleInputChange}
          />
          <label className="form-check-label" htmlFor="desparasitadoCheck">
            Desparasitado
          </label>
        </div>
      </div>

      <label className={styles.formLabel}>Se dá bem com:</label>
      <div className={styles.filterGroup}>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="criancas"
            name="criancas"
            checked={selectedFilters.criancas}
            onChange={handleInputChange}
          />
          <label className="form-check-label" htmlFor="criancas">
            Crianças
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="cachorro"
            name="cachorro"
            checked={selectedFilters.cachorro}
            onChange={handleInputChange}
          />
          <label className="form-check-label" htmlFor="cachorro">
            Cachorros
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="gatos"
            name="gatos"
            checked={selectedFilters.gatos}
            onChange={handleInputChange}
          />
          <label className="form-check-label" htmlFor="gatos">
            Outros gatos
          </label>
        </div> */}
    </div>
  );
};

export default FilterMenu;
