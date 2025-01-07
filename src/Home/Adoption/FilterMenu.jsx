import React, { useContext, useState, useMemo, useEffect } from "react";
import styles from "./FilterMenu.module.css";
import { DataContext } from "./DataContext";

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
          cat.especie.toLowerCase() === selectedFilters.especie.toLowerCase()) &&
        cat.name.toLowerCase().includes(selectedFilters.searchQuery.toLowerCase()) &&
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
      <h2 className={styles.title}>Filtrar Animais</h2>

      <div
  className={`filterCard ${isSelected("Cachorro") ? "selected" : "light"}`}
  onClick={() => handleCardClick("Cachorro")}
>
  <img src="/img/cat.svg" alt="Cachorro" className="filter-icon" />
  <span>Gato</span>
</div>

      <input
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
        </div>
      </div>
    </div>
  );
};

export default FilterMenu;
