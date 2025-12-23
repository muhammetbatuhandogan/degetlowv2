
import React from 'react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'methodology', label: 'Methodology' },
    { id: 'blog', label: 'Blog' },
    { id: 'team', label: 'Team' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 hacettepe-bg rounded-xl flex items-center justify-center">
              <span className="text-white font-black text-xl italic leading-none">D</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-black tracking-tighter text-white leading-none uppercase">De Get Low</span>
              <span className="text-[10px] text-gray-500 font-bold tracking-widest leading-none mt-1 uppercase">AI Trainer</span>
            </div>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                  activeSection === item.id ? 'text-red-500' : 'text-gray-400 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <span className="text-[10px] font-mono text-gray-500 px-3 py-1 border border-gray-800 rounded-full">BBM479 DEV</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
