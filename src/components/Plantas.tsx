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
  const [showModal, setShowModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
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
    },
    {
      id: 3,
      nome: 'Jockey Ville Residence',
      status: 'Em Construção',
      localizacao: 'Uberaba - MG',
      area: 'Casas prontas a partir de 109 até 153m²',
      areaIcon: faHome,
      imagem: '/imagens/joc.jpg',
      descricao: 'O Jockey Ville é a combinação perfeita de sofisticação, conforto e segurança com infraestrutura de clube completo. Um residencial exclusivo em Uberaba, projetado para quem busca qualidade de vida e um investimento seguro.',
      link: '/lancamentos/jockey-ville'
    },
    {
      id: 4,
      nome: 'Villa Gávea',
      status: 'Últimas Unidades',
      localizacao: 'Uberaba - MG',
      area: 'Apartamento com 73m²',
      areaIcon: faBuilding,
      imagem: '/imagens/villa.png',
      descricao: 'Residencial no Villa Gávea (R$ 100.000 DE DESCONTO), descubra os benefícios, o conforto e a facilidade de morar em um local que oferece para você lazer, moradia e trabalho, tudo a menos de 5 minutos da sua casa!',
      link: '/lancamentos/villa-gavea'
    },
    {
      id: 5,
      nome: 'Damha Fit 2',
      status: 'Breve Lançamento',
      localizacao: 'Uberaba - MG',
      area: 'Lotes de 250m²',
      areaIcon: faRulerCombined,
      imagem: '/imagens/damha-fit/danha.jpeg',
      descricao: 'Condomínio de alto padrão com infraestrutura moderna, segurança, lazer completo e selo Damha de qualidade. Seu novo lar em localização privilegiada.',
      link: '/lancamentos/damha-fit-2'
    },
    {
      id: 6,
      nome: 'Jardins Jockey',
      status: 'Em Lançamento',
      localizacao: 'Uberaba - MG',
      area: 'Lotes a partir de 264m²',
      areaIcon: faRulerCombined,
      imagem: '/imagens/jardins-jockey/Book Jardins Jockey - Cliente-1 (4)_page-0001.jpg',
      descricao: 'Descubra o Jardins Jockey, um loteamento fechado com infraestrutura de resort, localizado na nova Avenida Ramid Mauad, ao lado do Jockey Club. Um empreendimento que une sofisticação, conforto e segurança para proporcionar momentos inesquecíveis com a sua família.',
      link: '/lancamentos/jardins-jockey'
    }
  ];

  const jockeyImages = [
    '/imagens/jockey-ville/Book Digital Jockey Ville_page-0001.jpg',
    '/imagens/jockey-ville/Book Digital Jockey Ville_page-0002.jpg',
    '/imagens/jockey-ville/Book Digital Jockey Ville_page-0003.jpg',
    '/imagens/jockey-ville/Book Digital Jockey Ville_page-0004.jpg',
    '/imagens/jockey-ville/Book Digital Jockey Ville_page-0005.jpg',
    '/imagens/jockey-ville/Book Digital Jockey Ville_page-0006.jpg',
    '/imagens/jockey-ville/Book Digital Jockey Ville_page-0007.jpg',
    '/imagens/jockey-ville/Book Digital Jockey Ville_page-0008.jpg',
    '/imagens/jockey-ville/Book Digital Jockey Ville_page-0009.jpg',
    '/imagens/jockey-ville/Book Digital Jockey Ville_page-0010.jpg'
  ];

  const villaGaveaImages = [
    '/imagens/villa-gavea/BOOK DIGITAL_BRISA DA FONTE_page-0001.jpg',
    '/imagens/villa-gavea/BOOK DIGITAL_BRISA DA FONTE_page-0002.jpg',
    '/imagens/villa-gavea/BOOK DIGITAL_BRISA DA FONTE_page-0003.jpg',
    '/imagens/villa-gavea/BOOK DIGITAL_BRISA DA FONTE_page-0004.jpg',
    '/imagens/villa-gavea/BOOK DIGITAL_BRISA DA FONTE_page-0005.jpg',
    '/imagens/villa-gavea/BOOK DIGITAL_BRISA DA FONTE_page-0006.jpg',
    '/imagens/villa-gavea/BOOK DIGITAL_BRISA DA FONTE_page-0007.jpg',
    '/imagens/villa-gavea/BOOK DIGITAL_BRISA DA FONTE_page-0008.jpg',
    '/imagens/villa-gavea/BOOK DIGITAL_BRISA DA FONTE_page-0009.jpg',
    '/imagens/villa-gavea/BOOK DIGITAL_BRISA DA FONTE_page-0010.jpg',
    '/imagens/villa-gavea/BOOK DIGITAL_BRISA DA FONTE_page-0011.jpg',
    '/imagens/villa-gavea/BOOK DIGITAL_BRISA DA FONTE_page-0012.jpg',
    '/imagens/villa-gavea/BOOK DIGITAL_BRISA DA FONTE_page-0013.jpg',
    '/imagens/villa-gavea/BOOK DIGITAL_BRISA DA FONTE_page-0014.jpg',
    '/imagens/villa-gavea/BOOK DIGITAL_BRISA DA FONTE_page-0015.jpg',
    '/imagens/villa-gavea/BOOK DIGITAL_BRISA DA FONTE_page-0016.jpg',
    '/imagens/villa-gavea/BOOK DIGITAL_BRISA DA FONTE_page-0017.jpg',
    '/imagens/villa-gavea/BOOK DIGITAL_BRISA DA FONTE_page-0018.jpg',
    '/imagens/villa-gavea/BOOK DIGITAL_BRISA DA FONTE_page-0019.jpg'
  ];

  const goldenHillsImages = [
    '/imagens/golden-hills/Golden Hills_page-0001.jpg',
    '/imagens/golden-hills/Golden Hills_page-0002.jpg',
    '/imagens/golden-hills/Golden Hills_page-0003.jpg',
    '/imagens/golden-hills/Golden Hills_page-0004.jpg',
    '/imagens/golden-hills/Golden Hills_page-0005.jpg'
  ];

  const oceanViewImages = [
    '/imagens/ocean-view/Ocean View_page-0001.jpg',
    '/imagens/ocean-view/Ocean View_page-0002.jpg',
    '/imagens/ocean-view/Ocean View_page-0003.jpg',
    '/imagens/ocean-view/Ocean View_page-0004.jpg',
    '/imagens/ocean-view/Ocean View_page-0005.jpg'
  ];

  const jardinsJockeyImages = [
    '/imagens/jardins-jockey/Book Jardins Jockey - Cliente-1 (4)_page-0001.jpg',
    '/imagens/jardins-jockey/Book Jardins Jockey - Cliente-1 (4)_page-0003.jpg',
    '/imagens/jardins-jockey/Book Jardins Jockey - Cliente-1 (4)_page-0004.jpg',
    '/imagens/jardins-jockey/Book Jardins Jockey - Cliente-1 (4)_page-0005.jpg',
    '/imagens/jardins-jockey/Book Jardins Jockey - Cliente-1 (4)_page-0006.jpg',
    '/imagens/jardins-jockey/Book Jardins Jockey - Cliente-1 (4)_page-0007.jpg',
    '/imagens/jardins-jockey/Book Jardins Jockey - Cliente-1 (4)_page-0008.jpg',
    '/imagens/jardins-jockey/Book Jardins Jockey - Cliente-1 (4)_page-0009.jpg',
    '/imagens/jardins-jockey/Book Jardins Jockey - Cliente-1 (4)_page-0010.jpg',
    '/imagens/jardins-jockey/Book Jardins Jockey - Cliente-1 (4)_page-0011.jpg',
    '/imagens/jardins-jockey/Book Jardins Jockey - Cliente-1 (4)_page-0012.jpg',
    '/imagens/jardins-jockey/Book Jardins Jockey - Cliente-1 (4)_page-0013.jpg',
    '/imagens/jardins-jockey/Book Jardins Jockey - Cliente-1 (4)_page-0014.jpg',
    '/imagens/jardins-jockey/Book Jardins Jockey - Cliente-1 (4)_page-0015.jpg',
    '/imagens/jardins-jockey/Book Jardins Jockey - Cliente-1 (4)_page-0016.jpg',
    '/imagens/jardins-jockey/Book Jardins Jockey - Cliente-1 (4)_page-0017.jpg',
    '/imagens/jardins-jockey/Book Jardins Jockey - Cliente-1 (4)_page-0018.jpg',
    '/imagens/jardins-jockey/Book Jardins Jockey - Cliente-1 (4)_page-0019.jpg'
  ];

  const damhaFitImages = [
    '/imagens/damha-fit/danha.jpeg'
  ];

  const getImagesForEmpreendimento = (id: number) => {
    switch (id) {
      case 3:
        return jockeyImages;
      case 4:
        return villaGaveaImages;
      case 5:
        return damhaFitImages;
      case 6:
        return jardinsJockeyImages;
      default:
        return [];
    }
  };

  const [selectedEmpreendimento, setSelectedEmpreendimento] = useState<number | null>(null);

  const handleClick = (link: string, id: number) => {
    if (id === 1 || id === 2) {
      window.open(link, '_blank');
    } else {
      setSelectedEmpreendimento(id);
      setShowModal(true);
    }
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % getImagesForEmpreendimento(selectedEmpreendimento || 0).length);
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + getImagesForEmpreendimento(selectedEmpreendimento || 0).length) % getImagesForEmpreendimento(selectedEmpreendimento || 0).length);
  };

  const closeModal = () => {
    setShowModal(false);
    setCurrentImageIndex(0);
    setSelectedEmpreendimento(null);
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
    <>
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
              Conheça nossos empreendimentos exclusivos em localização privilegiada. 
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
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                  <div className="overlay" style={{
                    background: empreendimento.id === 1 ? 
                      'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.8) 100%)' :
                      'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))'
                  }}>
                    <div className="status-tag">{empreendimento.status}</div>
                    <div className="info-container" style={{
                      marginTop: empreendimento.id === 1 ? 'auto' : '0'
                    }}>
                      {empreendimento.id !== 1 && <h3>{empreendimento.nome}</h3>}
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

      {/* Modal do Carrossel */}
      {showModal && selectedEmpreendimento && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close" 
              onClick={closeModal}
              aria-label="Fechar modal"
            >
              ×
            </button>
            <div className="carousel-container">
              <button 
                className="carousel-button prev" 
                onClick={handlePrevImage}
                aria-label="Imagem anterior"
              >
                ‹
              </button>
              <div className="carousel-image">
                <Image
                  src={getImagesForEmpreendimento(selectedEmpreendimento)[currentImageIndex]}
                  alt={`Imagem ${currentImageIndex + 1}`}
                  width={1200}
                  height={800}
                  style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                  priority
                />
                <div className="carousel-indicators">
                  {currentImageIndex + 1} / {getImagesForEmpreendimento(selectedEmpreendimento).length}
                </div>
              </div>
              <button 
                className="carousel-button next" 
                onClick={handleNextImage}
                aria-label="Imagem seguinte"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}