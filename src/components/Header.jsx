import { useState } from 'react';
import logo from '../img/logo.png';
import { Menu, X } from 'lucide-react';
import '../App.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header>
      <div className="header-container">
        <div className="logo-nav">
            <img src={logo} alt="Logo" className="logo" />
            <nav className="nav-desktop">
                <a href="#sobre">Quem sou eu?</a>
                <a href="#servicos">Serviços</a>
                <a href="#habilidades">Habilidades</a>
                <a href="#contato">Contato</a>
            </nav>
        </div>


        <a href="#whatsApp" className="whatsapp-btn">
          <i className="fa-brands fa-whatsapp"></i> WhatsApp
        </a>

        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <div className="menu-mobile">
          <a href="#sobre">Quem sou eu?</a>
          <a href="#servicos">Serviços</a>
          <a href="#trabalhos">Habilidades</a>
          <a href="#contato">Contato</a>
          <a href="#whatsApp" className="whatsapp-btn">
            <i className="fa-brands fa-whatsapp"></i> WhatsApp
          </a>
        </div>
      )}
    </header>
  )
}

export default Header
