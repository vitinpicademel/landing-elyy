'use client';

import Hero from '@/components/Hero';
import Lancamentos from '@/components/Plantas';
import Contato from '@/components/Contato';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <Lancamentos />
      <Contato />
      <Footer />
    </main>
  );
} 