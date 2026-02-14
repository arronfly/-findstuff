
import React from 'react';
import { NavTab } from '../types';

interface BottomNavProps {
  activeTab: NavTab;
  onTabChange: (tab: NavTab) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: NavTab.HOME, label: 'Home', icon: 'home' },
    { id: NavTab.DISCOVER, label: 'Discover', icon: 'explore' },
    { id: NavTab.SAVED, label: 'Saved', icon: 'bookmark' },
    { id: NavTab.MENU, label: 'Menu', icon: 'more_horiz' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 mx-auto max-w-md dark:bg-background-dark/80 backdrop-blur-xl border-t border-gray-100 dark:border-gray-800/50 bg-white/40 border-white/20">
      <div className="flex items-center justify-around px-4 py-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex flex-col items-center gap-0.5 transition-all ${
              activeTab === tab.id ? 'text-primary' : 'text-gray-400 dark:text-gray-500'
            }`}
          >
            <span className={`material-symbols-outlined text-2xl ${activeTab === tab.id ? 'active-icon' : ''}`}>
              {tab.icon}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-wider">{tab.label}</span>
            {activeTab === tab.id && <div className="w-1 h-1 rounded-full bg-primary mt-0.5"></div>}
          </button>
        ))}
      </div>
      <div className="h-6 w-full flex justify-center items-center pb-2">
        <div className="h-1 w-24 rounded-full bg-gray-200 dark:bg-gray-800"></div>
      </div>
    </nav>
  );
};

export default BottomNav;
