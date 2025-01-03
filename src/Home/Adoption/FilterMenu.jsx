import React, { useContext } from "react";
import styles from "./FilterMenu.module.css";
import { useState, useMemo } from "react";
import { DataContext } from "./DataContext";

const FilterMenu = () => {
  const [state, setState] = useState({
    searchQuery: "",
    selectedEspecie: "",
    selectedRace: {
      criancas: false,
      cachorro: false,
      gatos: false,
      esterilizado: false,
      vacinado: false,
      desparasitado: false,
    },
  });

  const { data, loading, error } = useContext(DataContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const filteredData =
    (() => {
      return (data || []).filter(
        (cat) =>
          (state.selectedEspecie === "" ||
            cat.especie.toLowerCase() ===
              state.selectedEspecie.toLowerCase()) &&
          cat.name.toLowerCase().includes(state.searchQuery.toLowerCase()) &&
          (state.selectedRace.criancas === false || cat.lidaBem.crianca) &&
          (state.selectedRace.cachorro === false || cat.lidaBem.cachorro) &&
          (state.selectedRace.gatos === false || cat.lidaBem.gato) &&
          (state.selectedRace.esterilizado === false ||
            cat.saude.esterilizado === state.selectedRace.esterilizado) &&
          (state.selectedRace.vacinado === false ||
            cat.saude.vacinado === state.selectedRace.vacinado) &&
          (state.selectedRace.desparasitado === false ||
            cat.saude.desparasitado === state.selectedRace.desparasitado)
      );
    },
    [data, state.selectedEspecie, state.searchQuery, state.selectedRace]);

  // const handleCheckboxChange = (event) => {
  //   const { name, checked } = event.target;
  //   onFilterChange((filters) => ({
  //     ...filters,
  //     [name]: checked,
  //   }));
  // };

  
  return (
    <>
      <label className="form-label">Filtrar por Saúde</label>

      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="esterilizadoCheck"
          name="esterilizado"
          checked={selectedEspecie.esterilizado}
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
    </>
  );
};

export default FilterMenu;
