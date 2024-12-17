import React, { useState, useEffect } from "react";
import FlipCard from "./cards/Flipcart";
import styles from "./searchRect.module.css";

const SearchRect = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEspecie, setSelectedEspecie] = useState("");
  const [selectedRace, setselectedRace] = useState({
    criancas: false,
    cachorro: false,
    gatos: false
  });
  const [selectedHealth, setselectedHealth] = useState({
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
    setselectedHealth((prevCriteria) => ({
      ...prevCriteria,
      [name]: checked
    }));
  };


  useEffect(() => {
    fetch("https://natschlegel.github.io/adotar-api/animals-api.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const filteredData = data.filter((cat) =>
    (selectedEspecie === "" || cat.especie.toLowerCase() === selectedEspecie.toLowerCase()) &&
    cat.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (selectedRace.criancas === false || cat.lidaBem.crianca) &&
    (selectedRace.cachorro === false || cat.lidaBem.cachorro) &&
    (selectedRace.gatos === false || cat.lidaBem.gato) &&
    (selectedHealth.esterilizado === false || cat.saude.esterilizado === selectedHealth.esterilizado) &&
    (selectedHealth.vacinado === false || cat.saude.vacinado === selectedHealth.vacinado) &&
    (selectedHealth.desparasitado === false || cat.saude.desparasitado === selectedHealth.desparasitado)
  );

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Search by name..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

<label className="form-label">Filtrar por Saúde</label>

{/* Esterilizado Filter */}
<div className="form-check">
  <input
    type="checkbox"
    className="form-check-input"
    id="esterilizadoCheck"
    name="esterilizado"  // Important: This matches the state property name
    checked={selectedHealth.esterilizado}
    onChange={handleCheckboxChange}  // Use handleCheckboxChange function
  />
  <label className="form-check-label" htmlFor="esterilizadoCheck">
    Esterilizado
  </label>
</div>

{/* Vacinado Filter */}
<div className="form-check">
  <input
    type="checkbox"
    className="form-check-input"
    id="vacinadoCheck"
    name="vacinado"  // Matches state property
    checked={selectedHealth.vacinado}
    onChange={handleCheckboxChange}  // Use handleCheckboxChange function
  />
  <label className="form-check-label" htmlFor="vacinadoCheck">
    Vacinado
  </label>
</div>

{/* Desparasitado Filter */}
<div className="form-check">
  <input
    type="checkbox"
    className="form-check-input"
    id="desparasitadoCheck"
    name="desparasitado"  // Matches state property
    checked={selectedHealth.desparasitado}
    onChange={handleCheckboxChange}  // Use handleCheckboxChange function
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
        <option value="">All</option> {/* Default option to show all */}
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
  );
};

export default SearchRect;
