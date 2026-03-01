import React from 'react';

const NewArrivals = ({ addToBag }) => {
  const products = [
    { id: 201, name: 'Summer Cotton Set', price: 2200, img: 'https://wforwoman.com/cdn/shop/files/23AUWS10161-122807_2.jpg?v=1721297389' },
    { id: 202, name: 'Floral Kurti', price: 1800, img: 'https://th.bing.com/th/id/R.dcc91908a8b3cc4a361fddb8571802b9?rik=J1Fxm564MhN35g&riu=http%3a%2f%2ffabgirlwear.in%2fcdn%2fshop%2ffiles%2fIMG-20240926_184024.jpg%3fv%3d1741026677&ehk=qZpJXFizBSF71mBOCSvXaPFjlIxtszhUkfoS%2bc17PRE%3d&risl=&pid=ImgRaw&r=0' },
    { id: 203, name: 'Indo-Western Tunic', price: 3100, img: 'https://janasya.com/cdn/shop/files/JAA25TU01505.jpg?v=1738916262&width=400' },
  ];

  return (
    <div className="w-full px-8 py-24 bg-white">
      <h2 className="text-6xl font-serif mb-20 italic underline decoration-pink-100 underline-offset-8">New Arrivals</h2>
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

export default NewArrivals;