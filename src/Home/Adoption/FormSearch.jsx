import React from "react";
import { useState,useMemo } from "react";
import styles from "./FormSearch.module.css";
import FlipCard from "./Flipcart";

const FormSearch = ({data}) => {

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEspecie, setSelectedEspecie] = useState("");
  const [selectedRace, setselectedRace] = useState({
    criancas: false,
    cachorro: false,
    gatos: false,
    esterilizado: false,
    vacinado: false,
    desparasitado: false
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setselectedRace((prevCriteria) => ({
      ...prevCriteria,
      [name]: checked
    }));
  };

  const filteredData = useMemo(() => {
    return (data || []).filter((cat) =>
      (selectedEspecie === "" || cat.especie.toLowerCase() === selectedEspecie.toLowerCase()) &&
      cat.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedRace.criancas === false || cat.lidaBem.crianca) &&
      (selectedRace.cachorro === false || cat.lidaBem.cachorro) &&
      (selectedRace.gatos === false || cat.lidaBem.gato) &&
      (selectedRace.esterilizado === false || cat.saude.esterilizado === selectedRace.esterilizado) &&
      (selectedRace.vacinado === false || cat.saude.vacinado === selectedRace.vacinado) &&
      (selectedRace.desparasitado === false || cat.saude.desparasitado === selectedRace.desparasitado)
    );
  }, [data, selectedEspecie, searchQuery, selectedRace]);

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
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 g-4">

          {filteredData.length > 0 ? (
            filteredData.map((cat) => <FlipCard key={cat.id} data={cat} />)
          ) : (
            <p>No matches found</p>
          )}

        </div>
      </div>
    </>
  );
};

export default FormSearch;
