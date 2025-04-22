'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRulerCombined, faHome, faLocationDot, faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="hero-section" ref={ref}>
      <motion.div 
        className="hero-content"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeIn}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="hero-title"
          variants={fadeIn}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Lançamentos<br/>Exclusivos
        </motion.h1>
        
        <motion.p
          variants={fadeIn}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="hero-subtitle"
        >
          Descubra o seu próximo endereço em localizações privilegiadas
        </motion.p>
        
        <motion.div
          className="hero-features"
          variants={fadeIn}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="feature">
            <FontAwesomeIcon icon={faHome} className="feature-icon" />
            <span>Alto Padrão</span>
          </div>
          <div className="feature">
            <FontAwesomeIcon icon={faRulerCombined} className="feature-icon" />
            <span>Plantas Exclusivas</span>
          </div>
          <div className="feature">
            <FontAwesomeIcon icon={faLocationDot} className="feature-icon" />
            <span>Localizações Premium</span>
          </div>
        </motion.div>
        
        <motion.div
          className="hero-buttons"
          variants={fadeIn}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <a href="#lancamentos" className="btn btn-primary">
            Ver Lançamentos
            <FontAwesomeIcon icon={faArrowRight} className="btn-icon" />
          </a>
          <a href="https://wa.me/553433339576?text=Olá,%20gostaria%20de%20conhecer%20os%20lançamentos%20disponíveis" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
            Falar com Especialista
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
} 