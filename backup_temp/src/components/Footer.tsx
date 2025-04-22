'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>Donna Negociações Imobiliárias</h3>
        </div>
        
        <div className="social-links">
          <a href="https://www.instagram.com/donnaimob/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.facebook.com/p/Donna-Negociações-Imobiliárias-100089334065194/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://wa.me/553433339576?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20Grand%20Hill%20[002]" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© 2024 Donna Negociações Imobiliárias. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer; 