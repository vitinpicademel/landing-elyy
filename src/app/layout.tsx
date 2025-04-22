'use client';

import React, { useState } from 'react'
import { Inter } from 'next/font/google'
import './globals.css'
import Image from 'next/image'
import Header from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <html lang="pt-BR">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
      </head>
      <body className={inter.className}>
        <Header />
        <header className="header">
          <div className="nav-container">
            <div className="left-logo">
              <Image src="/logo.png" alt="Logo" width={40} height={40} priority />
            </div>
            <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
              <a href="#lancamentos" onClick={closeMenu}>Lançamentos</a>
              <a href="https://wa.me/553433339576" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Contato</a>
            </nav>
            <button className="menu-toggle" onClick={toggleMenu} aria-label="Menu">
              {isMenuOpen ? '✕' : '☰'}
            </button>
            <div className={`overlay ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu}></div>
          </div>
        </header>
        {children}
      </body>
    </html>
  )
}