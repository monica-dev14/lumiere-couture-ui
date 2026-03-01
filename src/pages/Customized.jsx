import React from 'react';

const Customized = ({ addToBag }) => {
  const products = [
    { 
      id: 301, 
      name: 'Custom Hand-work Blouse', 
      price: 4500, 
      // Image direct link optimized for the grid
      img: 'https://i.pinimg.com/736x/66/50/91/665091c17f8b093518a4b4abb2df5f13.jpg' 
    },
    { id: 302, name: 'Embroidered Dupatta', price: 1200, img: 'https://cdn.exoticindia.com/images/products/original/textiles-2019/gaf274_a04.jpg' },
    { id: 303, name: 'Tailored Anarkali', price: 7800, img: 'https://tse2.mm.bing.net/th/id/OIP.UKTmazK0b0p5_Dwckxkv8QHaLH?w=1000&h=1500&rs=1&pid=ImgDetMain&o=7&rm=3'},
  ];

  return (
    <div className="w-full px-8 py-24 bg-white">
      <h2 className="text-6xl font-serif mb-20 italic underline decoration-pink-100 underline-offset-8">Customized Style</h2>
      <div className="grid md:grid-cols-3 gap-16">
        {products.map(p => (
          <div key={p.id} className="group">
            <div className="aspect-[3/4] overflow-hidden relative mb-8 rounded-[3rem] shadow-2xl">
              <img 
                src={p.img} 
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-700" 
                alt={p.name}
              />
              <button 
                onClick={() => addToBag(p)} 
                className="absolute bottom-0 w-full bg-black text-white py-8 text-xs font-bold uppercase tracking-widest translate-y-full group-hover:translate-y-0 transition-transform"
              >
                Add to Bag
              </button>
            </div>
            <p className="text-xl font-bold uppercase tracking-widest">{p.name}</p>
            <p className="text-gray-400 text-2xl italic mt-3">₹{p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Customized;