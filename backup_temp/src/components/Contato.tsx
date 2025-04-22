'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';

const Contato = () => {
  return (
    <section className="contato-section">
      <div className="separator">
        <span className="line"></span>
        <span className="diamond">♦</span>
        <span className="line"></span>
      </div>
      
      <h2>Entre em Contato</h2>
      
      <div className="contato-container">
        <h3>Quer saber mais sobre o Grand Hill?</h3>
        
        <div className="contato-cards">
          <div className="contato-card">
            <FontAwesomeIcon icon={faPhone} className="icon" />
            <p>34 3333-9576</p>
          </div>
          
          <div className="contato-card">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <p>vendas@donnanegocios.com.br</p>
          </div>
          
          <div className="contato-card">
            <FontAwesomeIcon icon={faClock} className="icon" />
            <p>Seg à Sáb 8h às 18h</p>
          </div>
        </div>

        <a href="https://wa.me/553433339576?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20Grand%20Hill%20[002]" target="_blank" rel="noopener noreferrer" className="whatsapp-button">
          Fale com um Especialista
        </a>
      </div>
    </section>
  );
};

export default Contato; 