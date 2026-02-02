import React, { useRef, useState } from 'react';
import { DeviceType, ModuleData, Connection } from '../types';
import { DEVICE_DIMENSIONS } from '../constants';
import AppShell from './AppShell';
import { ScreenRenderer } from './Screens';
import { ZoomIn, ZoomOut, Maximize } from 'lucide-react';

interface BlueprintCanvasProps {
  modules: ModuleData[];
  connections: Connection[];
  device: DeviceType;
}

const BlueprintCanvas: React.FC<BlueprintCanvasProps> = ({ modules, connections, device }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.7); // Start zoomed out to see the larger layout
  const dimensions = DEVICE_DIMENSIONS[device];

  const handleZoomIn = () => setScale(prev => Math.min(prev + 0.1, 2));
  const handleZoomOut = () => setScale(prev => Math.max(prev - 0.1, 0.4));
  const handleResetZoom = () => setScale(1);

  const getConnectorPath = (start: {x: number, y: number}, end: {x: number, y: number}) => {
    // Calculate control points for a smooth Bezier S-curve
    const dist = Math.abs(end.x - start.x);
    
    // Check if we are going backwards (Right to Left)
    if (start.x > end.x) {
       // For backward connections (like Payment -> Tracking), we want to curve around
       // rather than creating a massive S-curve that expands outwards.
       
       // Simplified wrap-around curve:
       // If same Y level (horizontal wrap back), curve down and around
       if (Math.abs(start.y - end.y) < 50) {
          return `M ${start.x} ${start.y} C ${start.x + 400} ${start.y + 400}, ${end.x - 400} ${end.y + 400}, ${end.x} ${end.y}`;
       }
       
       const cpA = { x: start.x + 200, y: start.y };
       const cpB = { x: end.x - 200, y: end.y };
       return `M ${start.x} ${start.y} C ${cpA.x} ${cpA.y}, ${cpB.x} ${cpB.y}, ${end.x} ${end.y}`;
    }

    // Standard Forward Path (Left to Right)
    const cp1 = { x: start.x + dist * 0.5, y: start.y };
    const cp2 = { x: end.x - dist * 0.5, y: end.y };
    return `M ${start.x} ${start.y} C ${cp1.x} ${cp1.y}, ${cp2.x} ${cp2.y}, ${end.x} ${end.y}`;
  };

  // Blueprint Mode Calculations
  const CANVAS_WIDTH = 3000;
  const CANVAS_HEIGHT = 2000;

  return (
    <div className="w-full h-full relative overflow-hidden bg-slate-50">
      
      {/* Scrollable Container */}
      <div 
        className="w-full h-full overflow-auto cursor-grab active:cursor-grabbing custom-scrollbar"
        ref={containerRef}
      >
        <div 
          className="relative transform-gpu origin-top-left transition-transform duration-300 ease-out"
          style={{ 
            width: CANVAS_WIDTH, 
            height: CANVAS_HEIGHT, 
            transform: `scale(${scale})`,
            // Add padding to ensure content isn't cut off when scaling
            marginBottom: '500px',
            marginRight: '500px'
          }}
        >
          {/* Background Grid */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{
              backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}
          />

          {/* SVG Layer for Connections */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <defs>
               <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#64748b" />
               </marker>
            </defs>
            {connections.map((conn) => {
              const fromMod = modules.find(m => m.id === conn.from);
              const toMod = modules.find(m => m.id === conn.to);
              if (!fromMod || !toMod) return null;

              // Connection Points: From Right Side to Left Side
              const start = { 
                  x: fromMod.x + dimensions.width, 
                  y: fromMod.y + (dimensions.height / 2) 
              };
              const end = { 
                  x: toMod.x, 
                  y: toMod.y + (dimensions.height / 2) 
              };
              
              const pathD = getConnectorPath(start, end);

              return (
                <g key={`${conn.from}-${conn.to}`}>
                   <path 
                    d={pathD}
                    fill="none"
                    stroke="#64748b"
                    strokeWidth="2"
                    strokeDasharray="8 4"
                    className="animate-[dash_60s_linear_infinite]"
                    markerEnd="url(#arrowhead)"
                  />
                  {conn.label && (
                     <foreignObject 
                        x={(start.x + end.x) / 2 - 60} 
                        y={(start.y + end.y) / 2 - 15} 
                        width="120" 
                        height="30"
                        style={{ overflow: 'visible' }}
                     >
                         <div className="bg-white px-2 py-1 rounded-full text-[10px] font-medium text-slate-500 border border-slate-200 text-center shadow-sm whitespace-nowrap">
                             {conn.label}
                         </div>
                     </foreignObject>
                  )}
                </g>
              );
            })}
          </svg>

          {/* Modules */}
          {modules.map((mod) => (
            <div
              key={mod.id}
              className="absolute z-10 transition-all duration-500 ease-out hover:scale-[1.02]"
              style={{ 
                left: mod.x, 
                top: mod.y,
                width: dimensions.width,
                height: dimensions.height
              }}
            >
              <div className="absolute -top-12 left-0 right-0 text-center">
                 <h3 className="text-sm font-bold text-slate-800 bg-white/50 backdrop-blur-sm inline-block px-3 py-1 rounded-full border border-slate-200/50 shadow-sm">
                   {mod.title}
                 </h3>
              </div>
              
              <AppShell device={device} title={mod.title}>
                <ScreenRenderer id={mod.id} device={device} />
              </AppShell>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Zoom Controls */}
      <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col gap-2 bg-white rounded-lg shadow-xl border border-slate-200 p-1.5 z-50">
        <button 
          onClick={handleZoomIn}
          className="p-2 hover:bg-slate-100 rounded text-slate-600 hover:text-orange-600 transition-colors"
          title="Zoom In"
        >
          <ZoomIn size={20} />
        </button>
        <button 
          onClick={handleResetZoom}
          className="p-2 hover:bg-slate-100 rounded text-slate-600 hover:text-orange-600 transition-colors"
          title="Reset View"
        >
          <Maximize size={20} />
        </button>
        <button 
          onClick={handleZoomOut}
          className="p-2 hover:bg-slate-100 rounded text-slate-600 hover:text-orange-600 transition-colors"
          title="Zoom Out"
        >
          <ZoomOut size={20} />
        </button>
        <div className="text-[10px] font-medium text-center text-slate-400 py-1 border-t border-slate-100">
           {Math.round(scale * 100)}%
        </div>
      </div>
      
      {/* Styles for animation */}
      <style>{`
        @keyframes dash {
          to { stroke-dashoffset: -1000; }
        }
        .custom-scrollbar::-webkit-scrollbar {
            width: 8px;
            height: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: #f1f5f9; 
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #cbd5e1; 
            border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #94a3b8; 
        }
      `}</style>
    </div>
  );
};

export default BlueprintCanvas;