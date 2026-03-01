import React from 'react';

const Collections = ({ addToBag }) => {
  const products = [
    { id: 101, name: 'Bridal Silk Saree', price: 12999, img: 'https://tse1.explicit.bing.net/th/id/OIP.xXdgO3v4rylFYQo8w9303AHaKY?rs=1&pid=ImgDetMain&o=7&rm=3' },
    { id: 102, name: 'Designer Lehanga', price: 8500, img: 'https://i.etsystatic.com/20889316/r/il/06ef81/4531085209/il_1080xN.4531085209_5bpx.jpg' },
    { id: 103, name: 'Partywear Gown', price: 4500, img: 'https://i.pinimg.com/736x/1b/05/0a/1b050aae7c540566fb0afbb65aaeb20c.jpg' }
  ];

  return (
    <div className="w-full px-8 py-24 bg-white">
      <h2 className="text-6xl font-serif mb-20 italic underline decoration-pink-100 underline-offset-8">Our Collections</h2>
      <div className="grid md:grid-cols-3 gap-16">
        {products.map(p => (
          <div key={p.id} className="group">
            <div className="aspect-[3/4] overflow-hidden relative mb-8 rounded-[3rem] shadow-2xl">
              <img src={p.img} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
              <button onClick={() => addToBag(p)} className="absolute bottom-0 w-full bg-black text-white py-8 text-xs font-bold uppercase tracking-widest translate-y-full group-hover:translate-y-0 transition-transform">Add to Bag</button>
            </div>
            <p className="text-xl font-bold uppercase tracking-widest">{p.name}</p>
            <p className="text-gray-400 text-2xl italic mt-3">₹{p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections;