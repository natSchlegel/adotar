import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import Sobre from "./sobre";
import Header from "./header";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="sobre/*" element={<Sobre />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
