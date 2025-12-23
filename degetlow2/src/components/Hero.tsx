
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gray-950">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden opacity-20">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-red-600 rounded-full blur-[120px] opacity-10"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-widest mb-8">
            Project Showcase
          </div>
          <h1 className="text-5xl lg:text-8xl font-black leading-tight mb-8 tracking-tighter">
            DE GET <span className="gradient-text">LOW</span>
          </h1>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            An AI-powered virtual trainer designed to analyze your movement, correct your posture, and optimize your home workouts in real-time.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="#methodology" className="hacettepe-bg hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-red-900/40">
              Our Methodology
            </a>
            <a href="#blog" className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all border border-gray-700">
              Technical Blog
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
