import React, { useState, useEffect } from 'react';

const AnnouncementBar = () => {
  const announcements = [
    "FREE SHIPPING on all domestic orders above ₹6000/-",
    "WORLD WIDE SHIPPING Available",
    "NEW COLLECTIONS: Handcrafted for the Modern Woman"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % announcements.length);
    }, 3000); 
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-[#000000] text-white py-2 overflow-hidden relative h-10 flex items-center justify-center">
      <div className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] animate-in fade-in slide-in-from-bottom-2 duration-700">
        {announcements[index]}
      </div>
    </div>
  );
};

export default AnnouncementBar;