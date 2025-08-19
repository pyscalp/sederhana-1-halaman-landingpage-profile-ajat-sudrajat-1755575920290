import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';

function About() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="container mx-auto py-16 px-4"
    >
      <SectionHeader title="Tentang Ajat Sudrajat" subtitle="Mengenal Lebih Dekat" />
      <div className="flex flex-col md:flex-row items-center gap-10 bg-white p-8 rounded-lg shadow-xl">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 rounded-full overflow-hidden shadow-md border-4 border-primary"
        >
          <img src="/images/profile.svg" alt="Ajat Sudrajat" className="w-full h-full object-cover" />
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-lg text-gray-700 leading-relaxed"
        >
          <p className="mb-4">
            Ajat Sudrajat adalah seorang profesional berpengalaman di bidang pengembangan web dan desain UI/UX. Dengan passion dalam menciptakan pengalaman digital yang intuitif dan fungsional, Ajat berdedikasi untuk membantu klien mencapai tujuan bisnis mereka melalui teknologi.
          </p>
          <p className="mb-4">
            Berbekal keahlian dalam React, Tailwind CSS, dan berbagai teknologi modern lainnya, Ajat mampu menerjemahkan ide-ide kompleks menjadi solusi web yang elegan dan efisien. Fokus utamanya adalah pada performa, responsivitas, dan pengalaman pengguna yang optimal.
          </p>
          <p>
            Selain itu, Ajat juga aktif dalam memberikan konsultasi teknologi, membantu bisnis mengidentifikasi dan mengimplementasikan strategi digital terbaik untuk pertumbuhan berkelanjutan.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default About;