
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between px-6 pt-8 pb-4 sticky top-0 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md z-30">
      <div className="flex flex-col">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-primary/60 dark:text-primary/80">Premium Access</span>
        <h2 className="text-2xl font-bold tracking-tight text-primary dark:text-white tracking-widest uppercase">Curated</h2>
      </div>
      <button className="flex size-11 items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 transition-transform active:scale-90">
        <span className="material-symbols-outlined text-primary">person</span>
      </button>
    </header>
  );
};

export default Header;
