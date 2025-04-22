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
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={empreendimento.id <= 3}
              />
              <div className="status-tag">{empreendimento.status}</div>
              <div className="overlay">
                <div className="info-container">
                  <h3>{empreendimento.nome}</h3>
                  <div className="localizacao">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <span>{empreendimento.localizacao}</span>
                  </div>
                  <div className="area">
                    <FontAwesomeIcon icon={empreendimento.areaIcon} />
                    <span>{empreendimento.area}</span>
                  </div>
                  <div 
                    className={`descricao ${expandedId === empreendimento.id ? 'expanded' : ''}`}
                    onClick={(e) => toggleDescricao(e, empreendimento.id)}
                  >
                    {empreendimento.descricao}
                    <FontAwesomeIcon 
                      icon={faChevronDown} 
                      className={`expand-icon ${expandedId === empreendimento.id ? 'expanded' : ''}`}
                    />
                  </div>
                  <div className="buttons-container">
                    <button
                      className="whatsapp-button"
                      onClick={(e) => handleWhatsAppClick(e, empreendimento.nome)}
                    >
                      <FontAwesomeIcon icon={faWhatsapp} />
                      <span>Falar com Corretor</span>
                    </button>
                    <button className="saiba-mais-button">
                      Ler mais
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showModal && selectedEmpreendimento && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={closeModal}>
          <div className="relative w-full max-w-4xl bg-white rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="relative h-[80vh]">
              <Image
                src={getImagesForEmpreendimento(selectedEmpreendimento)[currentImageIndex]}
                alt={`Imagem ${currentImageIndex + 1}`}
                fill
                style={{ objectFit: 'contain' }}
                sizes="(max-width: 1536px) 100vw, 1536px"
              />
              <button
                className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75"
                onClick={closeModal}
              >
                ✕
              </button>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4">
                <button
                  className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200"
                  onClick={handlePrevImage}
                >
                  ←
                </button>
                <button
                  className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200"
                  onClick={handleNextImage}
                >
                  →
                </button>
              </div>
              <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full">
                {currentImageIndex + 1} / {getImagesForEmpreendimento(selectedEmpreendimento).length}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}