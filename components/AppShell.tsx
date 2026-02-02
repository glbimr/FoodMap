import React from 'react';
import { DeviceType } from '../types';
import { Battery, Wifi, Signal, Globe, ChevronLeft, Menu, MoreHorizontal } from 'lucide-react';

interface AppShellProps {
  children: React.ReactNode;
  device: DeviceType;
  title?: string;
  accentColor?: string;
}

const AppShell: React.FC<AppShellProps> = ({ children, device, title, accentColor = 'bg-slate-900' }) => {
  const isMobile = device === 'mobile';

  return (
    <div 
      className={`
        relative overflow-hidden bg-white shadow-2xl transition-all duration-500 ease-in-out
        ${isMobile ? 'rounded-[2rem] border-[6px] border-slate-800' : 'rounded-lg border border-slate-200 shadow-xl'}
      `}
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {/* Device Header */}
      {isMobile ? (
        <div className="bg-white px-4 py-2 border-b border-slate-50 flex justify-between items-center select-none">
          <span className="text-[9px] font-semibold text-slate-800">9:41</span>
          <div className="flex items-center gap-1 text-slate-800">
            <Signal size={8} />
            <Wifi size={8} />
            <Battery size={8} />
          </div>
        </div>
      ) : (
        <div className="bg-slate-100 px-2 py-1.5 border-b border-slate-200 flex items-center gap-2 select-none">
          <div className="flex gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
            <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 bg-white rounded-md px-2 py-0.5 flex items-center gap-1 shadow-sm border border-slate-200 mx-2">
            <Globe size={8} className="text-slate-400" />
            <span className="text-[8px] text-slate-500 font-medium">foodapp.com/orders</span>
          </div>
        </div>
      )}

      {/* App Header (Contextual) */}
      <div className={`flex items-center justify-between px-3 py-2 ${isMobile ? 'border-b border-slate-50' : 'border-b border-slate-100'}`}>
        {title === 'Login' ? (
          <div className="h-3 w-3" /> 
        ) : (
          <button className="text-slate-600 hover:text-slate-900">
            <ChevronLeft size={isMobile ? 14 : 12} />
          </button>
        )}
        
        <h3 className="text-[10px] font-bold text-slate-800 tracking-tight truncate max-w-[120px]">
          {title || 'FoodApp'}
        </h3>

        {title === 'Login' ? (
             <div className="h-3 w-3" />
        ) : (
             <button className="text-slate-600">
              {isMobile ? <Menu size={14} /> : <MoreHorizontal size={12} />}
            </button>
        )}
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-hidden relative bg-slate-50">
        <div className="absolute inset-0 overflow-y-auto no-scrollbar">
          {children}
        </div>
      </div>

      {/* Mobile Home Indicator */}
      {isMobile && (
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-16 h-1 bg-slate-900 rounded-full opacity-20 pointer-events-none" />
      )}
    </div>
  );
};

export default AppShell;
