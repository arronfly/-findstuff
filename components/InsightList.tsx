
import React from 'react';
import { Insight } from '../types';

interface InsightListProps {
  insights: Insight[];
  onItemClick: (insight: Insight) => void;
}

const InsightList: React.FC<InsightListProps> = ({ insights, onItemClick }) => {
  return (
    <section className="px-6 mt-12">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white uppercase tracking-widest">Exclusive Insights</h3>
        <a className="text-xs font-bold uppercase tracking-wider text-primary dark:text-primary/80 hover:underline" href="#">View All</a>
      </div>
      
      <div className="space-y-8">
        {insights.map((insight) => (
          <div 
            key={insight.id} 
            onClick={() => onItemClick(insight)}
            className="flex items-center gap-6 group cursor-pointer active:opacity-70 transition-opacity"
          >
            <div className="relative size-24 shrink-0 overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800 shadow-sm">
              <img 
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" 
                src={insight.imageUrl} 
                alt={insight.title} 
              />
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                {insight.title}
              </h4>
              <p className="text-[10px] font-semibold leading-relaxed text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                {insight.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InsightList;
