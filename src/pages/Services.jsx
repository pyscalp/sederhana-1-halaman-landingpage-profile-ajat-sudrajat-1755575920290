import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import ServiceCard from '../components/ServiceCard';

function Services() {
  const servicesData = [
    {
      icon: '/images/service-web.svg',
      title: 'Pengembangan Web Kustom',
      description: 'Membangun aplikasi web yang kuat dan skalabel sesuai kebutuhan spesifik bisnis Anda.'
    },
    {
      icon: '/images/service-uiux.svg',
      title: 'Desain UI/UX Responsif',
      description: 'Menciptakan antarmuka pengguna yang intuitif dan pengalaman pengguna yang mulus di semua perangkat.'
    },
    {
      icon: '/images/service-consulting.svg',
      title: 'Konsultasi Teknologi',
      description: 'Memberikan panduan ahli untuk strategi teknologi, pemilihan platform, dan optimasi digital.'
    },
    {
      icon: '/images/service-seo.svg',
      title: 'Optimasi Kinerja Website',
      description: 'Meningkatkan kecepatan dan performa website Anda untuk pengalaman pengguna yang lebih baik.'
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="container mx-auto py-16 px-4"
    >
      <SectionHeader title="Layanan Kami" subtitle="Solusi Digital Profesional" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </motion.section>
  );
}

export default Services;