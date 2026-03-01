import React from 'react';
import { ShoppingBag, User } from 'lucide-react';

const Navbar = ({ setView, user, setUser, cartLength }) => {
  return (
    <nav className="w-full flex items-center justify-between px-6 md:px-10 py-6 sticky top-0 bg-white/95 backdrop-blur-sm z-50 border-b">
      <div className="text-4xl font-serif tracking-tighter cursor-pointer" onClick={() => setView('home')}>LUMIÈRE</div>
      <div className="hidden md:flex space-x-12 text-[12px] font-bold uppercase tracking-[0.2em] text-gray-500">
        <button onClick={() => setView('home')} className="hover:text-black transition-all">Home</button>
        <button onClick={() => setView('story')} className="hover:text-black transition-all">Our Story</button>
        <button onClick={() => setView('collection')} className="hover:text-black transition-all">Collections</button>
        <button onClick={() => setView('customize')} className="hover:text-black transition-all">Customize</button>
        <button onClick={() => setView('arrivals')} className="hover:text-black transition-all">New Arrivals</button>
      </div>
      <div className="flex items-center space-x-8">
        {user ? (
          <div className="flex flex-col items-end">
            <span className="text-[10px] font-bold uppercase text-pink-600 tracking-widest italic">Welcome, {user.name}</span>
            <button onClick={() => setUser(null)} className="text-[9px] underline text-gray-400">LOGOUT</button>
          </div>
        ) : (
          <button onClick={() => setView('login')} className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest hover:text-pink-600 transition-all">
            <User size={20} /> Login
          </button>
        )}
        <div className="relative cursor-pointer" onClick={() => setView('checkout')}>
          <ShoppingBag size={24} />
          {cartLength > 0 && <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold animate-bounce">{cartLength}</span>}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;