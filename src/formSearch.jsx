import React from "react";

const formSearch = () => {
  return (
    <div>
      <form id="animalForm">
        <div>
          <div class="mb-3">
            <label for="especie" class="form-label">
              Espécie
            </label>
            <select id="especie" name="especie" class="form-select" required>
              <option value="" disabled selected>
                Escolha a espécie
              </option>
              <option value="Gato">GATO</option>
              <option value="Cachorro">CACHORRO</option>
            </select>
          </div>

          <div class="mb-3">
            <label for="porte" class="form-label">
              Porte
            </label>
            <select id="porte" name="porte" class="form-select" required>
              <option value="" disabled selected>
                Escolha o porte
              </option>
              <option value="Pequeno">Pequeno</option>
              <option value="Médio">Médio</option>
              <option value="Grande">Grande</option>
            </select>
          </div>

          <div class="mb-3">
            <label for="idade" class="form-label">
              Idade
            </label>
            <select id="idade" name="idade" class="form-select" required>
              <option value="" disabled selected>
                Escolha a idade
              </option>
              <option value="Filhote">Filhote</option>
              <option value="Jovem">Jovem</option>
              <option value="Adulto">Adulto</option>
              <option value="Senil">Senil</option>
            </select>
          </div>

          <div class="mb-3">
            <label for="sexo" class="form-label">
              Sexo
            </label>
            <select id="sexo" name="sexo" class="form-select" required>
              <option value="" disabled selected>
                Escolha o sexo
              </option>
              <option value="Macho">Macho</option>
              <option value="Fêmea">Fêmea</option>
            </select>
          </div>
        </div>
        <button type="submit" class="btn btn-primary">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default formSearch;
