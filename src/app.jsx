import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./home";
import Sobre from "./Sobre";
import Header from  "./Home/Header/Header";
import Adoption from "./Home/Adoption/Adoption";
import Forms from "./Home/Adoption/Forms/Forms";

function App() {
  return (
    <>
      <HashRouter>
      {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="sobre/*" element={<Sobre />} />
          <Route path="adocao/" element={<Adoption />} />
          <Route path="formulario/" element={<Forms />}/>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
