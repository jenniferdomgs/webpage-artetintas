import React, { useRef } from 'react';
import '../Servico.css';
import Pintor from '../img/pintor.jpeg';
import Servico1 from '../img/pintor2.jpeg';
import Servico2 from '../img/pintor3.jpeg';
import Predio from  '../img/predio.jpeg';
import Pincel from '../img/pincel.png';
import FerramentasA from '../img/ferramentas2.png';
import Ferramentas from '../img/ferramentas.png'
import Predio1 from '../img/predio2.jpg';
import Trabalhadores from '../img/trabalhadores.jpg';
import ServicoInterno from '../img/servicointerno.jpg';
import Servico3 from '../img/pintor4.jpg';
import Servico4 from '../img/servicoCad.jpg';


function Servico() {

    const carouselRef = useRef(null);

    const scrollLeft = () => {
    if (carouselRef.current) {
        carouselRef.current.scrollBy({ left: -window.innerWidth, behavior: 'smooth' });
    }
    };

    const scrollRight = () => {
    if (carouselRef.current) {
        carouselRef.current.scrollBy({ left: window.innerWidth, behavior: 'smooth' });
    }
    };

  return (
    <section className="servico">

      <div className="servico-intro">
        <h2>Manutenção Predial</h2>
        <p>
          Trabalho com capricho, responsabilidade e sempre deixo tudo limpo e bem feito.
          O meu objetivo é facilitar a sua vida e deixar seu espaço do jeitinho que você imaginou.
          Se quiser um serviço bem feito e com confiança, é só me chamar!
        </p>
      </div>

      <div className="servico-bloco">
        <div className="servico-texto">
          <h3>Alpinismo industrial</h3>
          <p>
            Trabalho com capricho, responsabilidade e sempre deixo tudo limpo e bem feito.
            O meu objetivo é facilitar a sua vida e deixar seu espaço do jeitinho que você imaginou.
            <br></br>Se quiser um serviço bem feito e com confiança, é só me chamar!
          </p>
        </div>
        <div className="servico-img">
            <img src={Pintor} alt="pintor" />
        </div>
      </div>

      <div className="servico-carousel">
        <button className="carousel-btn left" onClick={scrollLeft}>‹</button>
        <div className="carousel-track" ref={carouselRef}>
            <img src={Servico1} alt="Serviço 1" />
            <img src={Predio} alt="Serviço 2" />
            <img src={Servico4} alt="Serviço 7" />
            <img src={Predio1} alt="Serviço 4" />
            <img src={Servico2} alt="Serviço 3" />
            <img src={ServicoInterno} alt="Serviço 5" />
            <img src={Servico3} alt="Serviço 6" />
            <img src={Trabalhadores} alt="Serviço 4" />
        </div>
        <button className="carousel-btn right" onClick={scrollRight}>›</button>
      </div>


      <div className="servico-cards">
        <div className="servico-card">
          <div>
            <h3>Pintura</h3>
            <p>Transforme seu ambiente com uma pintura feita com cuidado e atenção aos detalhes. Uso materiais de qualidade e deixo tudo limpo e organizado. Quer renovar sua casa ou espaço comercial? Pode contar comigo!</p>
          </div>
          <img src={Pincel} alt="Pintura" />
        </div>
        <div className="servico-card">
          <img src={FerramentasA} alt="Hidráulica" />
          <div>
            <h3>Hidráulica</h3>
            <p>Realizo serviços hidráulicos com precisão, agilidade e o mínimo de transtorno para você. Desde pequenos reparos a instalações completas, sempre com responsabilidade e compromisso com um bom resultado.</p>
          </div>
        </div>
        <div className="servico-card">
            <div>
                <h3>Elétrica</h3>
                <p>Faço instalações e manutenções elétricas com total segurança e seguindo os padrões corretos. Serviço confiável, limpo e eficiente, ideal para quem quer tranquilidade e tudo funcionando sem dor de cabeça.</p>
            </div>
            <img src={Ferramentas} alt="Elétrica" />
        </div>
      </div>

    </section>
  );
}

export default Servico;
