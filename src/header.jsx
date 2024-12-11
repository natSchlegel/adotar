import React from "react";
import styles from "./header.module.css";

const header = () => {
  return (
    <div>
      <header className="p-3 text-bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              <svg
                className="bi me-2"
                width="40"
                height="32"
                role="img"
                aria-label="Bootstrap"
              >
                <use xlinkHref="#bootstrap" />
              </svg>
            </a>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <a href="#" className="nav-link px-2 text-secondary">
                  Início
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 text-white">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 text-white">
                  Doações
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 text-white">
                  Perguntas Frequentes
                </a>
              </li>
            </ul>

            <div className="text-end">
              <button type="button" className="btn btn-outline-light me-2">
                Entrar
              </button>
              <button type="button" className="btn btn-warning">
                Registrar
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default header;
