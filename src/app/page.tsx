'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Lancamentos from '@/components/Plantas';
import Contato from '@/components/Contato';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Lancamentos />
      <Contato />
      <Footer />
    </main>
  );
} 