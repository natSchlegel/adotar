import React from "react";
import { useState,useMemo } from "react";
import styles from "./FormSearch.module.css";


const FormSearch = ({data}) => {

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setselectedRace((prevCriteria) => ({
      ...prevCriteria,
      [name]: checked
    }));
  };

  return (
    <>
      <div className={styles.searchContainer}>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search by name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <label className="form-label">Filtrar por Saúde</label>

        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="esterilizadoCheck"
            name="esterilizado" 
            checked={selectedRace.esterilizado}
            onChange={handleCheckboxChange} 
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
            checked={selectedRace.vacinado}
            onChange={handleCheckboxChange}  
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
            checked={selectedRace.desparasitado}
            onChange={handleCheckboxChange} 
          />
          <label className="form-check-label" htmlFor="desparasitadoCheck">
            Desparasitado
          </label>
        </div>

        <select
          value={selectedEspecie}
          onChange={(e) => setSelectedEspecie(e.target.value)}
          className={styles.filterDropdown}
        >
          <option value="">All</option>
          <option value="Gato">Gato</option>
          <option value="Cachorro">Cachorro</option>
        </select>

        <label className="form-label">Se dá bem com:</label>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="criancas"
            name="criancas"
            checked={selectedRace.criancas}
            onChange={handleCheckboxChange}
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
            checked={selectedRace.cachorro}
            onChange={handleCheckboxChange}
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
            checked={selectedRace.gatos}
            onChange={handleCheckboxChange}
          />
          <label className="form-check-label" htmlFor="gatos">
            Outros gatos
          </label>
        </div>

      </div>
    </>
  );
};

export default FormSearch;
