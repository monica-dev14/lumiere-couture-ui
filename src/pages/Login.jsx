import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

const LoginPage = ({ setUser, setView }) => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  return (
    <div className="w-full h-screen flex bg-white overflow-hidden">
      <div className="hidden lg:block w-3/5 h-full relative">
        <img src="https://img.freepik.com/premium-photo/trendy-luxury-boutique-store_893571-19756.jpg" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      <div className="w-full lg:w-2/5 flex items-center justify-center p-8 md:p-20">
        <div className="w-full max-w-md">
          <button onClick={() => setView('home')} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-12 hover:text-black">
            <ArrowLeft size={16} /> Back
          </button>
          <h2 className="text-7xl font-serif italic mb-6">Login</h2>
          <p className="text-gray-400 mb-12 text-lg italic">Welcome to the inner circle of fashion.</p>
          <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); setUser({name: formData.name}); setView('home'); }}>
            <input required placeholder="Name" className="w-full border-b-2 py-4 text-2xl outline-none focus:border-black transition-all" onChange={(e)=>setFormData({...formData, name: e.target.value})} />
            <input required type="email" placeholder="Email" className="w-full border-b-2 py-4 text-2xl outline-none focus:border-black transition-all" />
            <button className="w-full bg-black text-white py-6 rounded-2xl font-bold uppercase tracking-[0.2em] text-xs shadow-2xl">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;