import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-[calc(100vh-120px)] flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-50 py-16 px-4"
    >
      <div className="text-center max-w-4xl mx-auto">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-5xl md:text-6xl font-extrabold text-primary mb-4 leading-tight"
        >
          Selamat Datang di Profil <span className="text-secondary">Ajat Sudrajat</span>
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-xl md:text-2xl text-gray-700 mb-8"
        >
          Membangun Solusi Digital Inovatif untuk Masa Depan Bisnis Anda.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          <Link
            to="/contact"
            className="inline-block bg-accent text-white text-lg font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            Hubungi Saya
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Home;