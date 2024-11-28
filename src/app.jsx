import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import Sobre from "./sobre";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login/*" element={<Sobre />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
