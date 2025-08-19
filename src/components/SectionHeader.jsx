import React from 'react';
import { motion } from 'framer-motion';

function SectionHeader({ title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-8"
    >
      <h2 className="text-4xl font-bold text-primary mb-2">{title}</h2>
      <p className="text-lg text-gray-600">{subtitle}</p>
    </motion.div>
  );
}

export default SectionHeader;