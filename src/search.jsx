import React from "react";
import Favorite from "../img/favorite.svg?react";
import Female from "../img/female.svg?react";
import Male from "../img/male.svg?react";
import Location from "../img/location.svg?react";
import SearchRect from "./searchRect";
import FormSearch from './formSearch';

const search = () => {
  return (
    <div className="album py-5 bg-body-tertiary">
      <div className="container">

      {/* <FormSearch /> */}

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 g-3">
          <SearchRect />
        </div>
      </div>
    </div>
  );
};

export default search;
