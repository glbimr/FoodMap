import React from 'react';

const FigmaEmbed: React.FC = () => {
  return (
    <div className="w-full h-full bg-slate-50 flex items-center justify-center p-4">
      <div className="w-full h-full bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <iframe 
          style={{ border: '1px solid rgba(0, 0, 0, 0.1)', width: '100%', height: '100%' }} 
          src="https://embed.figma.com/board/O56pFq7KEMCeQ9qmKbiftR/Food-Delivery-Flow?node-id=0-1&embed-host=share" 
          allowFullScreen
          title="Figma Embed"
        />
      </div>
    </div>
  );
};

export default FigmaEmbed;