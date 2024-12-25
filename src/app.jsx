import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Sobre from "./Sobre";
import Header from  "./Home/Header/Header";
import Adoption from "./Home/Adoption/Adoption";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="sobre/*" element={<Sobre />} />
          <Route path="adocao/" element={<Adoption />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
