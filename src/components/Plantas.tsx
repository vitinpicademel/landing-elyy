'use client';

import { useState } from 'react';
import Image from 'next/image';
import { faMapMarkerAlt, faRulerCombined, faBuilding, faHome, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

interface Empreendimento {
  id: number;
  nome: string;
  status: string;
  localizacao: string;
  area: string;
  areaIcon: IconDefinition;
  imagem: string;
  descricao: string;
  link: string;
}

export default function Plantas() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  
  const empreendimentos: Empreendimento[] = [
    {
      id: 1,
      nome: 'Estilo Urba',
      status: 'Lançamento 2025',
      localizacao: 'Uberaba - MG',
      area: 'Terrenos com 300m²',
      areaIcon: faRulerCombined,
      imagem: '/imagens/imagemurba.jpeg',
      descricao: 'Oportunidade única em Uberaba. Aproveite, condições exclusivas de breve lançamento. Loteamento fechado com sofisticação, lazer completo e contato com a natureza.',
      link: 'http://estilourba.donnanegociacoes.com.br'
    },
    {
      id: 2,
      nome: 'Grand Hill',
      status: 'Pré-Lançamento',
      localizacao: 'Rifaina - São Paulo',
      area: 'Apartamentos de 55,87 a 145,62m²',
      areaIcon: faBuilding,
      imagem: '/imagens/segundaqa.jpg',
      descricao: 'No coração da Represa de Jaguara, o Grand Hill está conectado aos principais pontos turísticos da região, e esse mapa exclusivo mostra como cada detalhe foi pensado para você viver o extraordinário!',
      link: 'https://grandhill.donnanegociacoes.com.br'
    }
  ];

  const handleClick = (link: string, id: number) => {
    window.open(link, '_blank');
  };

  const toggleDescricao = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    setExpandedId(expandedId === id ? null : id);
  };

  const handleWhatsAppClick = (e: React.MouseEvent, nome: string) => {
    e.stopPropagation();
    const message = `Olá, gostaria de saber mais sobre o empreendimento ${nome}`;
    const whatsappUrl = `https://wa.me/553433339576?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="lancamentos" className="lancamentos-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Lançamentos Imobiliários</h2>
          <div className="separator">
            <div className="line"></div>
            <div className="diamond">♦</div>
            <div className="line"></div>
          </div>
          <p className="lancamentos-descricao">
            Projetos únicos que combinam sofisticação, conforto e qualidade de vida.
          </p>
        </div>
        <div className="lancamentos-grid">
          {empreendimentos.map((empreendimento) => (
            <div 
              key={empreendimento.id} 
              className="lancamento-card"
              onClick={() => handleClick(empreendimento.link, empreendimento.id)}
            >
              <div className="lancamento-imagem">
                <Image
                  src={empreendimento.imagem}
                  alt={empreendimento.nome}
                  fill
                  style={{ objectFit: 'cover', zIndex: 1 }}
                  className="rounded-lg"
                  priority
                />
                <div className="overlay">
                  <div className="status-tag">{empreendimento.status}</div>
                  <div className="info-container">
                    <h3>{empreendimento.nome}</h3>
                    <p className="localizacao">
                      <FontAwesomeIcon icon={faMapMarkerAlt} />
                      {empreendimento.localizacao}
                    </p>
                    <div className="area">
                      <FontAwesomeIcon icon={empreendimento.areaIcon} />
                      {empreendimento.area}
                    </div>
                    <p className={`descricao ${expandedId === empreendimento.id ? 'expanded' : ''}`}>
                      {empreendimento.descricao}
                    </p>
                    <div className="buttons-container">
                      <button 
                        className={`btn-ler-mais ${expandedId === empreendimento.id ? 'expanded' : ''}`}
                        onClick={(e) => toggleDescricao(e, empreendimento.id)}
                      >
                        {expandedId === empreendimento.id ? 'Ler menos' : 'Ler mais'}
                        <FontAwesomeIcon 
                          icon={faChevronDown} 
                          className={`btn-icon ${expandedId === empreendimento.id ? 'expanded' : ''}`}
                        />
                      </button>
                      <button
                        className="btn-whatsapp-card"
                        onClick={(e) => handleWhatsAppClick(e, empreendimento.nome)}
                      >
                        <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" />
                        Falar com Corretor
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}