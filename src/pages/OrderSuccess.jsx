import React from 'react';
import { CheckCircle } from 'lucide-react';

const OrderSuccess = ({ date, setView, setCart }) => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-white text-center p-0 m-0">
      <div className="w-full flex flex-col items-center justify-center px-6">
        <CheckCircle size={120} className="text-green-500 mb-12 animate-pulse" />
        <h2 className="text-7xl md:text-[10rem] font-serif italic mb-10 tracking-tighter leading-none">Order Received!</h2>
        <p className="text-gray-400 text-2xl md:text-4xl max-w-7xl mb-20 italic font-light leading-relaxed">
          Everything is set. Your luxury picks will arrive by <span className="text-black font-bold border-b-8 border-pink-100">{date}</span>.
        </p>
        <button onClick={() => { setView('home'); setCart([]); }} className="bg-black text-white px-24 py-8 text-sm font-bold uppercase tracking-[0.5em] rounded-full shadow-2xl hover:scale-110 transition-transform">
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default OrderSuccess;