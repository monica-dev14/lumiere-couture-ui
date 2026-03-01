import React from 'react';

const StoryPage = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row min-h-screen bg-white">
      <div className="w-full lg:w-1/2 px-8 md:px-24 py-32 flex flex-col justify-center">
        <h2 className="text-7xl md:text-8xl font-serif italic mb-8 text-pink-600 leading-tight">Our Heritage</h2>
        <p className="text-3xl text-zinc-400 leading-relaxed italic font-light mb-16">"At Lumière, we don't just dress bodies; we honor souls."</p>
        <div className="p-16 bg-zinc-50 rounded-[4rem] italic border-l-[16px] border-pink-500 shadow-xl text-2xl font-light">
          Every fabric is handpicked from the looms of Kanchipuram and Banaras to bring you nothing but pure luxury.
        </div>
      </div>
      <div className="w-full lg:w-1/2 h-screen overflow-hidden">
        <img src="https://i.pinimg.com/originals/e1/a0/3c/e1a03c5cb92651a9fd9227bd8b0b748d.jpg" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default StoryPage;