
import React from 'react';

const members = [
  "Muhammet Batuhan Doğan",
  "Samet Emin Özen",
  "Nurşah Satılmış",
  "Alper Mert"
];

const Team: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-bold mb-4 uppercase tracking-tighter">Project Team</h2>
      <p className="text-gray-500 mb-16 text-sm">Hacettepe University Computer Engineering</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {members.map((member, i) => (
          <div key={i} className="group">
            <div className="w-24 h-24 bg-gray-900 rounded-3xl mx-auto mb-6 flex items-center justify-center border border-gray-800 group-hover:border-red-500 transition-all duration-300">
              <span className="text-3xl font-black text-gray-700 group-hover:text-red-500">{member.split(' ').pop()?.charAt(0)}</span>
            </div>
            <h4 className="font-bold text-sm text-white">{member}</h4>
          </div>
        ))}
      </div>

      <div className="mt-24 pt-12 border-t border-gray-900">
        <p className="text-gray-600 text-[10px] font-mono uppercase tracking-[0.2em]">Supervisor: Gülden Olgun</p>
      </div>
    </div>
  );
};

export default Team;
