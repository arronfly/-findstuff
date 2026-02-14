
import React from 'react';

const FAB: React.FC = () => {
  return (
    <div className="fixed bottom-28 right-6 z-40">
      <button className="flex size-14 items-center justify-center rounded-full bg-primary/90 text-white backdrop-blur-lg shadow-2xl shadow-primary/30 border border-white/20 hover:bg-primary transition-all active:scale-90 ring-8 ring-primary/5 group">
        <span className="material-symbols-outlined text-3xl font-light group-hover:rotate-90 transition-transform">add</span>
      </button>
    </div>
  );
};

export default FAB;
