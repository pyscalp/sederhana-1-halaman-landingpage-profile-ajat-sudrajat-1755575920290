import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import GalleryItem from '../components/GalleryItem';

function Gallery() {
  const galleryData = [
    {
      image: '/images/gallery-1.svg',
      title: 'Proyek E-commerce',
      description: 'Platform belanja online dengan fitur lengkap dan desain modern.'
    },
    {
      image: '/images/gallery-2.svg',
      title: 'Situs Portofolio Kreatif',
      description: 'Desain minimalis dan responsif untuk menampilkan karya seni digital.'
    },
    {
      image: '/images/gallery-3.svg',
      title: 'Aplikasi Manajemen Proyek',
      description: 'Dashboard intuitif untuk kolaborasi tim dan pelacakan tugas.'
    },
    {
      image: '/images/gallery-4.svg',
      title: 'Website Korporat',
      description: 'Situs resmi perusahaan dengan informasi lengkap dan branding kuat.'
    },
    {
      image: '/images/gallery-5.svg',
      title: 'Landing Page Event',
      description: 'Halaman pendaftaran event dengan desain menarik dan CTA jelas.'
    },
    {
      image: '/images/gallery-6.svg',
      title: 'Sistem Informasi Akademik',
      description: 'Platform untuk pengelolaan data mahasiswa dan jadwal perkuliahan.'
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="container mx-auto py-16 px-4"
    >
      <SectionHeader title="Galeri Proyek" subtitle="Lihat Karya-karya Kami" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {galleryData.map((item, index) => (
          <GalleryItem
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </motion.section>
  );
}

export default Gallery;