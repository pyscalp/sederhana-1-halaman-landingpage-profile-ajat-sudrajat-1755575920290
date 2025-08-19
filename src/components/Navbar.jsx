import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Beranda', path: '/' },
    { name: 'Tentang', path: '/about' },
    { name: 'Layanan', path: '/services' },
    { name: 'Galeri', path: '/gallery' },
    { name: 'Kontak', path: '/contact' },
  ];

  return (
    <nav className="bg-primary text-white p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white hover:text-accent transition-colors duration-300">
          Ajat Sudrajat
        </Link>
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-lg hover:text-accent transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-primary mt-4 py-2 px-4 space-y-2"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="block text-lg text-white hover:text-accent transition-colors duration-300 py-2"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
}

export default Navbar;