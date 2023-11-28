import React from "react";
import "../style/Versions.css";
import Cards from "../components/Card";

function Versions() {
  return (
    <section id="versions" className="versions">
      <div>
        <h2>DIVERSIDAD DE DISTRIBUCIONES</h2>
        <p>
          Existen numerosas distribuciones de Linux, cada una adaptada para
          diferentes propósitos y preferencias.
          <br />
          Desde distribuciones de propósito general como Ubuntu, hasta
          distribuciones especializadas como Kali Linux para seguridad,
          <br />
          la diversidad permite a los usuarios seleccionar la distribución que
          mejor se ajuste a sus necesidades.
        </p>
        <button>CREAR</button>
        <div className="card-container">
        <Cards />
        </div>
      </div>
    </section>
  );
}

export default Versions;
