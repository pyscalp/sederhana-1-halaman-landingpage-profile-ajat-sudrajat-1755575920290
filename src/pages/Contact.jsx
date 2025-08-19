import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { Mail, Phone, MapPin } from 'lucide-react';

function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="container mx-auto py-16 px-4"
    >
      <SectionHeader title="Hubungi Kami" subtitle="Mari Berkolaborasi" />
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-3xl mx-auto">
        <p className="text-lg text-gray-700 text-center mb-8">
          Jangan ragu untuk menghubungi Ajat Sudrajat untuk pertanyaan, kolaborasi, atau proyek baru.
          Kami siap membantu Anda mewujudkan ide-ide digital.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-10">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-col items-center p-4 rounded-lg bg-blue-50"
          >
            <Mail size={40} className="text-primary mb-3" />
            <h3 className="font-semibold text-lg mb-1">Email</h3>
            <p className="text-gray-600">ajatsudrajat@example.com</p>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col items-center p-4 rounded-lg bg-indigo-50"
          >
            <Phone size={40} className="text-secondary mb-3" />
            <h3 className="font-semibold text-lg mb-1">Telepon</h3>
            <p className="text-gray-600">+62 812-3456-7890</p>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col items-center p-4 rounded-lg bg-purple-50"
          >
            <MapPin size={40} className="text-accent mb-3" />
            <h3 className="font-semibold text-lg mb-1">Lokasi</h3>
            <p className="text-gray-600">Jakarta, Indonesia</p>
          </motion.div>
        </div>

        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
              placeholder="Nama Anda"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
              placeholder="email@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Pesan</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
              placeholder="Tulis pesan Anda di sini..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-accent text-white py-3 px-6 rounded-md font-semibold hover:bg-purple-700 transition-colors duration-300 shadow-md"
          >
            Kirim Pesan
          </button>
        </form>
      </div>
    </motion.section>
  );
}

export default Contact;