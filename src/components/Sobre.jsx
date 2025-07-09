import React from 'react';
import personagem from '../img/TrabalhadorSorrindoIcon.png'; 
import '../App.css';

function Sobre() {
  return (
    <section id="sobre" className="sobre">
      <div className="sobre-container">
        <div className="sobre-texto">
          <h2>Quem somos?</h2>
          <p>
            Olá! Somos uma equipe de profissionais com mais de 10 anos de experiência em reformas, manutenções e serviços especializados. Atendemos Balneário Camboriú, Itapema e Porto Belo, oferecendo soluções em pintura, elétrica, hidráulica e manutenção predial. Nosso compromisso é realizar um trabalho limpo, seguro e exatamente como nossos clientes imaginam.
          </p>
          <a target="_blank" rel="noopener noreferrer" href="https://wa.link/g9hm8d" className="btn-sobre">Entre em Contato <i className="fa-brands fa-whatsapp"></i></a>
        </div>
        <div className="sobre-imagem">
          <img src={personagem} alt="Personagem" />
        </div>
      </div>
    </section>
  );
}

export default Sobre;
