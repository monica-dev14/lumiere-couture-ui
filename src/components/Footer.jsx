import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-zinc-900 text-white px-6 md:px-12 py-24">
      <div className="w-full grid md:grid-cols-4 gap-16"> {/* Grid columns increased to 4 for better spacing */}
        
        {/* 1. Address Section */}
          <div className="space-y-6">
          <h4 className="font-serif text-4xl italic">Lumière Boutique</h4>
          <div className="flex items-start gap-4 text-zinc-400 text-lg italic leading-relaxed">
            <MapPin size={24} className="mt-1 text-white shrink-0" />
            <p>No: 42, Elegant Street, Nungambakkam, <br />Chennai - 600034.</p>
          </div>
        </div>

        {/* 2. Contact Section */}
        <div className="space-y-6">
          <h4 className="font-bold text-xs uppercase tracking-[0.3em] text-zinc-500">Contact Channels</h4>
          <div className="space-y-4 text-zinc-400 text-lg italic">
            <div className="flex items-center gap-4">
              <Phone size={20} className="text-white shrink-0" />
              <p>+91 98400 12345</p>
            </div>
            <div className="flex items-center gap-4">
              <Mail size={20} className="text-white shrink-0" />
              <p>hello@lumiereboutique.com</p>
            </div>
          </div>
        </div>

        {/* 3. Social Media Section */}
        <div className="space-y-6">
          <h4 className="font-bold text-xs uppercase tracking-[0.3em] text-zinc-500">Social Channels</h4>
          <div className="flex gap-8 text-zinc-400">
            <a href="#" className="hover:text-pink-500 transition-colors" aria-label="Instagram">
              <Instagram size={28} />
            </a>
            <a href="#" className="hover:text-blue-600 transition-colors" aria-label="Facebook">
              <Facebook size={28} />
            </a>
            <a href="#" className="hover:text-red-600 transition-colors" aria-label="YouTube">
              <Youtube size={28} />
            </a>
          </div>
        </div>

        {/* 4. Copyright Section */}
        <div className="md:text-right flex flex-col justify-end">
          <p className="text-xs text-zinc-600 uppercase tracking-widest">
            © 2026 LUMIÈRE FASHIONS | Crafted for Elegance
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;