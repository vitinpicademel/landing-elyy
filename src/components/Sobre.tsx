'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Sobre() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="sobre" className="sobre-section" ref={ref}>
      <div className="container">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.8 }}
          className="intro-text text-center"
        >
        </motion.div>
      </div>
    </section>
  );
} 