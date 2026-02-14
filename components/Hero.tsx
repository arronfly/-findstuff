
import React from 'react';
import { HERO_IMAGE } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="group relative w-full overflow-hidden bg-gray-200 dark:bg-gray-800 shadow-xl aspect-[3/4] border-b border-white/10">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" 
        style={{ 
          backgroundImage: `linear-gradient(to top, rgba(20, 75, 184, 0.8) 0%, rgba(20, 75, 184, 0.2) 40%, rgba(0,0,0,0) 100%), url("${HERO_IMAGE}")` 
        }}
      />
      <div className="absolute bottom-0 left-0 w-full p-10 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
        <span className="inline-block px-4 py-1.5 mb-6 text-[10px] font-bold uppercase tracking-[0.25em] text-white bg-white/10 backdrop-blur-xl border border-white/20 rounded-full">
          Editorial Pick
        </span>
        <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight text-white mb-4" style={{ letterSpacing: '-0.02em' }}>
          Curated<br/>Excellence
        </h1>
        <p className="text-base font-light text-white/90 max-w-[280px] leading-relaxed">
          Explore the world's most sophisticated architectural retreats.
        </p>
      </div>
    </div>
  );
};

export default Hero;
