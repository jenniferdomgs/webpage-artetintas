import '../App.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
            <p>Entre em contato</p>
            
            <div className="footer-icons">
                <a href="https://wa.me/SEUNUMERO" target="_blank" rel="noopener noreferrer">
                <div className="footer-icon">
                    <i className="fab fa-whatsapp"></i>
                </div>
                </a>
        
                <a href="https://www.instagram.com/SEUINSTAGRAM" target="_blank" rel="noopener noreferrer">
                <div className="footer-icon">
                    <i className="fab fa-instagram"></i>
                </div>
                </a>
            </div>
        
            
            </div>
        
            <div className="footer-bottom"></div>
        </footer>      
    )
  }
  
export default Footer
