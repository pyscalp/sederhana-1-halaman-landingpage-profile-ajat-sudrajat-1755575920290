import React from 'react';
import { motion } from 'framer-motion';

function ServiceCard({ icon, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
    >
      <img src={icon} alt={title} className="w-20 h-20 mx-auto mb-4 text-primary" />
      <h3 className="text-xl font-semibold text-secondary mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}

export default ServiceCard;