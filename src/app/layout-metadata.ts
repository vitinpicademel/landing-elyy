import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Landing Page Elyy',
  description: 'Landing Page para Elyy',
  keywords: ['empreendimentos', 'imóveis', 'alto padrão', 'São Paulo', 'construção', 'incorporação'],
  authors: [{ name: 'Elyy Empreendimentos' }],
  creator: 'Elyy Empreendimentos',
  publisher: 'Elyy Empreendimentos',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://www.elyy.com.br',
    siteName: 'Elyy Empreendimentos',
    title: 'Elyy Empreendimentos - Excelência em Construção',
    description: 'Descubra empreendimentos exclusivos e de alto padrão em São Paulo.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Elyy Empreendimentos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elyy Empreendimentos',
    description: 'Descubra empreendimentos exclusivos e de alto padrão em São Paulo.',
    images: ['/og-image.jpg'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  themeColor: '#C5A47E',
} 