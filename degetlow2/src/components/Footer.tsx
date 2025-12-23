
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 border-t border-gray-900 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div className="max-w-xs">
             <div className="flex items-center space-x-3 mb-4 justify-center md:justify-start">
               <div className="w-8 h-8 hacettepe-bg rounded-lg flex items-center justify-center text-white font-bold italic">D</div>
               <span className="text-lg font-bold tracking-tighter uppercase">DE GET LOW</span>
             </div>
             <p className="text-gray-500 text-xs leading-relaxed">
               An AI-powered academic project developed for Hacettepe University Computer Engineering Department.
             </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Course Info</h4>
            <div className="text-sm text-gray-400 font-medium text-right font-mono">
              <p>BBM479 - GRADUATION PROJECT</p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-900 flex justify-center text-[10px] font-mono text-gray-600 uppercase tracking-widest">
           © 2024 DE GET LOW Team • Hacettepe University
        </div>
      </div>
    </footer>
  );
};

export default Footer;
