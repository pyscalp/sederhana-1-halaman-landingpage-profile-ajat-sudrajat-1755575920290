import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-secondary text-white p-6 mt-8">
      <div className="container mx-auto text-center">
        <div className="flex flex-wrap justify-center gap-6 mb-4">
          <div className="flex items-center gap-2">
            <Mail size={20} />
            <span>ajatsudrajat@example.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={20} />
            <span>+62 812-3456-7890</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={20} />
            <span>Jakarta, Indonesia</span>
          </div>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} Ajat Sudrajat. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;