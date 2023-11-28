import React from "react";
import "../style/NavBar.css";
import penguinPet from "../img/linux_penguin.png";


function NavBar() {
  return (
    <div className="nav-container">
      <nav className="nav">
        <div className="nav-logo">
          <a href="nav-section">LinuxLab</a>
        </div>
        <a href="#">
          <img
            className="penguin-logo"
            src={penguinPet}
            alt="Logo de Linux (que bichito más chistoso)"
          />
        </a>
        <ul className="nav-list">
          <li>
            <a className="nav-section" href="#historia">
              HISTORIA
            </a>
          </li>
          <li>
            <a className="nav-section" href="#caracteristicas">
              CARACTERÍSTICAS
            </a>
          </li>
          <li>
            <a className="nav-section" href="#versions">
              VERSIONES
            </a>
          </li>
        </ul>
          <div className="icon-container">
                <i className="fa-solid fa-user"></i> 
          </div>
      </nav>
    </div>
  );
}

export default NavBar;
