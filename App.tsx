import React, { useState } from 'react';
import { Smartphone, Monitor, GitGraph, FileText, Figma } from 'lucide-react';
import BlueprintCanvas from './components/BlueprintCanvas';
import PRDDocument from './components/PRDDocument';
import FigmaEmbed from './components/FigmaEmbed';
import { MODULES, CONNECTIONS } from './constants';
import { DeviceType } from './types';

function App() {
  const [device, setDevice] = useState<DeviceType>('mobile');
  const [viewMode, setViewMode] = useState<'blueprint' | 'prd' | 'figma'>('blueprint');

  return (
    <div className="w-screen h-screen flex flex-col bg-slate-50 text-slate-900 font-sans overflow-hidden">
      
      {/* Top Toolbar */}
      <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 md:px-6 z-50 shadow-sm shrink-0">
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-200 shrink-0">
            {/* Burger Icon */}
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="text-white"
            >
              <path d="M6 10.5c.5-3.5 2.5-6.5 6-6.5s5.5 3 6 6.5" />
              <path d="M4 11h16" />
              <path d="M4 14.5h16" />
              <path d="M5 14.5v1a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4v-1" />
            </svg>
          </div>
          <div className="hidden sm:block">
            <h1 className="text-lg font-bold text-slate-900 leading-tight">FoodMap</h1>
            <p className="text-xs text-slate-500 font-medium">By Ankur Madan</p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-3 md:gap-6 overflow-x-auto no-scrollbar pl-2">
          {/* View Toggle */}
          <div className="flex bg-slate-100 p-1 rounded-lg border border-slate-200 shrink-0">
            <button
              onClick={() => setViewMode('blueprint')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-semibold transition-all whitespace-nowrap ${
                viewMode === 'blueprint' 
                  ? 'bg-white text-orange-600 shadow-sm' 
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              <GitGraph size={14} />
              <span className="hidden sm:inline">Blueprint</span>
            </button>
            <button
              onClick={() => setViewMode('prd')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-semibold transition-all whitespace-nowrap ${
                viewMode === 'prd' 
                  ? 'bg-white text-pink-600 shadow-sm' 
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              <FileText size={14} />
              <span className="hidden sm:inline">PRD</span>
            </button>
            <button
              onClick={() => setViewMode('figma')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-semibold transition-all whitespace-nowrap ${
                viewMode === 'figma' 
                  ? 'bg-white text-[#0ACF83] shadow-sm' 
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              <Figma size={14} />
              <span className="hidden sm:inline">Figma</span>
            </button>
          </div>

          <div className="w-px h-8 bg-slate-200 shrink-0 hidden sm:block" />

          {/* Device Toggle (Only visible in Blueprint mode) */}
          <div className={`flex bg-slate-100 p-1 rounded-lg border border-slate-200 transition-opacity duration-300 shrink-0 ${viewMode !== 'blueprint' ? 'opacity-30 pointer-events-none' : 'opacity-100'}`}>
            <button
              onClick={() => setDevice('mobile')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-semibold transition-all whitespace-nowrap ${
                device === 'mobile' 
                  ? 'bg-white text-slate-900 shadow-sm' 
                  : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              <Smartphone size={14} />
              <span className="hidden sm:inline">Mobile</span>
            </button>
            <button
              onClick={() => setDevice('desktop')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-semibold transition-all whitespace-nowrap ${
                device === 'desktop' 
                  ? 'bg-white text-slate-900 shadow-sm' 
                  : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              <Monitor size={14} />
              <span className="hidden sm:inline">Desktop</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 relative overflow-hidden bg-slate-50/50">
        {viewMode === 'blueprint' && (
          <BlueprintCanvas 
            modules={MODULES}
            connections={CONNECTIONS}
            device={device}
          />
        )}
        {viewMode === 'prd' && (
          <PRDDocument />
        )}
        {viewMode === 'figma' && (
          <FigmaEmbed />
        )}
      </main>
    </div>
  );
}

export default App;