'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link href="/" onClick={closeMenu}>
          <Image
            src="/imagens/logonova.png"
            alt="Logo Donna Negócios"
            width={100}
            height={50}
            className="logo"
            priority
          />
        </Link>

        <button className="menu-toggle" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </button>

        <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <Link href="#lancamentos" onClick={closeMenu}>Lançamentos</Link>
          <Link href="#sobre" onClick={closeMenu}>Sobre</Link>
          <Link href="#diferenciais" onClick={closeMenu}>Diferenciais</Link>
          <Link href="#contato" onClick={closeMenu}>Contato</Link>
        </nav>
      </div>
    </header>
  );
} 