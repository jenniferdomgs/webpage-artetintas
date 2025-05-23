import React from 'react';
import personagem from '../img/TrabalhadorSorrindoIcon.png'; 
import '../App.css';

function Sobre() {
  return (
    <section className="sobre">
      <div className="sobre-container">
        <div className="sobre-texto">
          <h2>Quem sou eu?</h2>
          <p>
            Olá! Sou pintor profissional há mais de uma década. Comecei ainda jovem ajudando meu pai nas reformas da vizinhança, e desde então nunca mais larguei o pincel. 
          </p>
          <a href="#contato" className="btn-sobre">Converse comigo <i className="fa-brands fa-whatsapp"></i></a>
        </div>
        <div className="sobre-imagem">
          <img src={personagem} alt="Personagem" />
        </div>
      </div>
    </section>
  );
}

export default Sobre;
