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
            Olá! Sou pintor profissional com mais de 10 anos de experiência em reformas e manutenções. Atuo em Balneário Camboriú, Itapema e Porto Belo com serviços de pintura, elétrica, hidráulica e manutenção predial. Meu compromisso é entregar um trabalho limpo, seguro e do jeito que você imaginou.
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
