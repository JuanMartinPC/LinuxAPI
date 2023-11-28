import React from "react";
import image1 from "../img/image1.jpg";

function Card() {
    return (
        <div className="card">
            <img src={image1} alt="" />
            <div className="card-body">
            <h3 className="card-title">
                Título
            </h3>
            <p className="card-text">Acá va el texto de las cards</p>
            </div>
            <a href="#" className="btn btn-outline-secondary round">
                Página Web
            </a>
            <button>EDITAR</button>
            <button>ELIMINAR</button>
        </div>
    )
}

export default Card;
