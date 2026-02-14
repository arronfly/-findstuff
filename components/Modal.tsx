
import React from 'react';
import { Insight } from '../types';

interface ModalProps {
  insight: Insight;
  analysis: string;
  isLoading: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ insight, analysis, isLoading, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center px-4 pb-12 sm:items-center sm:p-0">
      <div 
        className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      <div className="relative transform overflow-hidden rounded-3xl bg-white dark:bg-background-dark text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-sm animate-in slide-in-from-bottom duration-300">
        <div className="relative h-64 overflow-hidden">
          <img className="h-full w-full object-cover" src={insight.imageUrl} alt={insight.title} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/20 backdrop-blur-md rounded-full text-white hover:bg-black/40 transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-[10px] font-bold uppercase tracking-widest opacity-80 mb-1">{insight.subtitle}</p>
            <h2 className="text-2xl font-bold tracking-tight">{insight.title}</h2>
          </div>
        </div>
        
        <div className="p-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-primary text-xl">auto_awesome</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary">AI Curator Analysis</span>
          </div>
          
          {isLoading ? (
            <div className="space-y-2 animate-pulse">
              <div className="h-4 bg-gray-100 dark:bg-gray-800 rounded w-full"></div>
              <div className="h-4 bg-gray-100 dark:bg-gray-800 rounded w-[90%]"></div>
              <div className="h-4 bg-gray-100 dark:bg-gray-800 rounded w-[70%]"></div>
            </div>
          ) : (
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-light italic">
              "{analysis}"
            </p>
          )}
          
          <div className="mt-8 flex gap-4">
            <button className="flex-1 bg-primary text-white py-4 rounded-xl font-bold text-xs uppercase tracking-widest active:scale-95 transition-transform">
              Learn More
            </button>
            <button className="p-4 border border-gray-200 dark:border-gray-700 rounded-xl text-primary active:scale-95 transition-transform">
              <span className="material-symbols-outlined">bookmark</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
