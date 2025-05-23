import React, { useRef } from 'react';
import '../Servico.css';
import Pintor from '../img/pintor.jpeg';
import Servico1 from '../img/pintor2.jpeg';
import Servico2 from '../img/pintor3.jpeg';
import Predio from  '../img/predio.jpeg';
import Pincel from '../img/pincel.png';
import FerramentasA from '../img/ferramentas2.png';
import Ferramentas from '../img/ferramentas.png'
import Predio1 from '../img/predio2.jpeg';
// FALTA ADD IMAGENS


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

      {/* Manutenção predial */}
      <div className="servico-intro">
        <h2>Manutenção Predial</h2>
        <p>
          Trabalho com capricho, responsabilidade e sempre deixo tudo limpo e bem feito.
          O meu objetivo é facilitar a sua vida e deixar seu espaço do jeitinho que você imaginou.
          Se quiser um serviço bem feito e com confiança, é só me chamar!
        </p>
      </div>

      {/* Alpinismo Industrial */}
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
            <img src={Servico2} alt="Serviço 3" />
            <img src={Predio1} alt="Serviço 4" />
        </div>
        <button className="carousel-btn right" onClick={scrollRight}>›</button>
      </div>


      <div className="servico-cards">
        <div className="servico-card">
          <div>
            <h3>Pintura</h3>
            <p>Trabalho com capricho, responsabilidade e sempre deixo tudo limpo e bem feito. O meu objetivo é facilitar a sua vida e deixar seu espaço do jeitinho que você imaginou. Se quiser um serviço bem feito e com confiança, é só me chamar!</p>
          </div>
          <img src={Pincel} alt="Pintura" />
        </div>
        <div className="servico-card">
          <img src={FerramentasA} alt="Hidráulica" />
          <div>
            <h3>Hidráulica</h3>
            <p> Trabalho com capricho, responsabilidade e sempre deixo tudo limpo e bem feito. O meu objetivo é facilitar a sua vida e deixar seu espaço do jeitinho que você imaginou. Se quiser um serviço bem feito e com confiança, é só me chamar! </p>
          </div>
        </div>
        <div className="servico-card">
            <div>
                <h3>Elétrica</h3>
                <p>Trabalho com capricho, responsabilidade e sempre deixo tudo limpo e bem feito. O meu objetivo é facilitar a sua vida e deixar seu espaço do jeitinho que você imaginou. Se quiser um serviço bem feito e com confiança, é só me chamar!</p>
            </div>
            <img src={Ferramentas} alt="Elétrica" />
        </div>
      </div>

    </section>
  );
}

export default Servico;
