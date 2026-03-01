import React from 'react';

const HomePage = ({ setView }) => {
  return (
    <div className="w-full">
      <div className="relative h-screen w-full bg-black overflow-hidden mb-8">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 px-4 text-center">
          <h1 className="text-8xl md:text-[12rem] font-serif italic mb-10 leading-none">Timeless <br/> Elegance</h1>
          <button 
            onClick={() => setView('collection')} 
            className="bg-transparent border-2 border-white text-white px-16 py-5 text-sm uppercase tracking-[0.3em] font-bold hover:bg-white hover:text-black transition-all rounded-full"
          >
            Explore
          </button>
        </div>
        <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600" className="absolute inset-0 w-full h-full object-cover opacity-60" />
      </div>

      <div className="w-full grid md:grid-cols-3 gap-8 px-8 mb-12">
        {[
          { t: "Collections", img: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800", v: "collection" },
          { t: "Customize", img: "https://th.bing.com/th/id/OIP.tSvhXKqaOJ79wG5TFLcmVgHaJS?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3", v: "customize" },
          { t: "New Arrivals", img: "https://dynamic.brandcrowd.com/template/preview/design/626be448-ee30-497f-8f09-787178ab343c?v=4&designTemplateVersion=1&size=design-preview-standalone-1x", v: "arrivals" }
        ].map((item, i) => (
          <div key={i} onClick={() => setView(item.v)} className="h-[700px] relative group cursor-pointer overflow-hidden rounded-[3rem] shadow-2xl">
            <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/60 flex items-center justify-center transition-all duration-500">
              <h3 className="text-white text-5xl font-serif">{item.t}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;