import React from "react";
import Favorite from "../img/favorite.svg?react";
import Female from "../img/female.svg?react";
import Male from "../img/male.svg?react";
import Location from "../img/location.svg?react";
import Cat from "../img/cat-3297664_1280.jpg";
import styles from "./search.module.css";

const search = () => {
  return (
    <div class="album py-5 bg-body-tertiary">
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div class="col">
            {/* <div class="card shadow-sm">
              <img
                className={`bd-placeholder-img card-img-top ${styles.cat}`}
                width="100%"
                src={Cat}
              />
              <div class="card-body">
                <div style="height: 40px; display: flex; justify-content: space-between;">
                  <h4>Nome do Animal</h4>
                  <div>
                    <Favorite />
                    <Female />
                  </div>
                </div>
                <div>
                  <Location /> Diamantina - MG
                </div>
                <div style="display: flex; gap: 20px;">
                  <div
                    style="width: 100px;
                  height: 100px;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                  background-color: #fce4ec;  
                  border-radius: 15px;
                  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                  text-align: center;"
                  >
                    Peso
                  </div>
                  <div
                    style="width: 100px;
                  height: 100px;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                  background-color: #fce4ec; 
                  border-radius: 15px;
                  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                  text-align: center;"
                  >
                    Idade
                  </div>
                  <div
                    style="width: 100px;
                  height: 100px;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                  background-color: #fce4ec; 
                  border-radius: 15px;
                  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                  text-align: center;"
                  >
                    Porte
                  </div>
                </div>

                <p class="card-text" style="padding-top: 10px;">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default search;
