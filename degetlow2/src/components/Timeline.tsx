
import React from 'react';

const phases = [
  { title: "Requirement Analysis", duration: "3 weeks", date: "27 Oct - 17 Nov 2025" },
  { title: "Data & Interaction Design", duration: "7 weeks", date: "18 Nov - 5 Jan 2026" },
  { title: "Prototype Development", duration: "6 weeks", date: "6 Jan - 17 Feb 2026" },
  { title: "Evaluation & Rebuilding", duration: "6 weeks", date: "18 Feb - 31 Mar 2026" },
  { title: "Final Integration & Reporting", duration: "5 weeks", date: "1 Apr - 5 May 2026" }
];

const Timeline: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-4">
        <div>
          <h2 className="text-3xl font-bold mb-2">Project Roadmap</h2>
          <p className="text-gray-400">Scheduled milestones from October 2025 to May 2026.</p>
        </div>
        <div className="px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500 text-xs font-bold uppercase tracking-widest">
          Academic Year 2025-2026
        </div>
      </div>

      <div className="space-y-4">
        {phases.map((phase, i) => (
          <div key={i} className="flex items-center gap-6 p-6 bg-gray-900 border border-gray-800 rounded-2xl hover:bg-gray-800/50 transition-all">
            <div className="hidden md:block w-32 text-xs font-bold text-gray-500 uppercase">{phase.duration}</div>
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="flex-1">
              <h4 className="font-bold text-white">{phase.title}</h4>
              <div className="text-xs text-gray-500 mt-1 md:hidden">{phase.duration} • {phase.date}</div>
            </div>
            <div className="hidden md:block text-xs font-mono text-gray-600">{phase.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
