
import React, { useState, useEffect } from 'react';
import { NavTab, Insight } from './types';
import { MOCK_INSIGHTS, HERO_IMAGE } from './constants';
import Header from './components/Header';
import Hero from './components/Hero';
import InsightList from './components/InsightList';
import BottomNav from './components/BottomNav';
import FAB from './components/FAB';
import Modal from './components/Modal';
import { getArchitecturalAnalysis } from './services/geminiService';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<NavTab>(NavTab.HOME);
  const [selectedInsight, setSelectedInsight] = useState<Insight | null>(null);
  const [analysis, setAnalysis] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleInsightClick = async (insight: Insight) => {
    setSelectedInsight(insight);
    setIsLoading(true);
    setAnalysis('');
    
    // Simulate/Fetch analysis from Gemini
    const result = await getArchitecturalAnalysis(insight.title, insight.subtitle);
    setAnalysis(result);
    setIsLoading(false);
  };

  const closeModal = () => {
    setSelectedInsight(null);
    setAnalysis('');
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col max-w-md mx-auto bg-background-light dark:bg-background-dark overflow-x-hidden shadow-2xl">
      <Header />
      
      <main className="flex-1 overflow-y-auto pb-32 no-scrollbar">
        {activeTab === NavTab.HOME && (
          <>
            <Hero />
            <InsightList insights={MOCK_INSIGHTS} onItemClick={handleInsightClick} />
          </>
        )}
        
        {activeTab === NavTab.DISCOVER && (
          <div className="p-6 flex flex-col items-center justify-center min-h-[50vh]">
            <span className="material-symbols-outlined text-6xl text-gray-300 mb-4">explore</span>
            <h2 className="text-xl font-bold text-gray-400">Discover New Horizons</h2>
          </div>
        )}

        {activeTab === NavTab.SAVED && (
          <div className="p-6 flex flex-col items-center justify-center min-h-[50vh]">
            <span className="material-symbols-outlined text-6xl text-gray-300 mb-4">bookmark</span>
            <h2 className="text-xl font-bold text-gray-400">Your Curated Collection</h2>
          </div>
        )}

        {activeTab === NavTab.MENU && (
          <div className="p-6 flex flex-col items-center justify-center min-h-[50vh]">
            <span className="material-symbols-outlined text-6xl text-gray-300 mb-4">menu</span>
            <h2 className="text-xl font-bold text-gray-400">Settings & Profile</h2>
          </div>
        )}
      </main>

      <FAB />
      
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />

      {selectedInsight && (
        <Modal 
          insight={selectedInsight} 
          analysis={analysis} 
          isLoading={isLoading} 
          onClose={closeModal} 
        />
      )}
    </div>
  );
};

export default App;
