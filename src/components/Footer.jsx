import '../App.css';


function Footer() {
    return (
        <footer id="contato" className="footer">
            <div className="footer-container">
                <p>
                Atendemos Balneário Camboriú, Itapema e Porto Belo com serviços de pintura,
                elétrica e manutenção predial.
                </p>
            </div>

            <div className="footer-bottom">
                <div className="footer-icons">
                <a href="https://wa.link/g9hm8d" target="_blank" rel="noopener noreferrer">
                    <div className="footer-icon">
                    <i className="fab fa-whatsapp"></i>
                    </div>
                </a>

                <a href="https://www.instagram.com/arte_tintassc" target="_blank" rel="noopener noreferrer">
                    <div className="footer-icon">
                    <i className="fab fa-instagram"></i>
                    </div>
                </a>
                </div>

                <p>© 2025 Arte Tintas SC | Todos os direitos reservados</p>
            </div>
        </footer>
      
    )
  }
  
export default Footer