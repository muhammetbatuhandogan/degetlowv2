
import React from 'react';

const ProposalContent: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="space-y-16">
        <div>
          <h2 className="text-sm font-bold tracking-[0.2em] text-red-500 uppercase mb-4">The Motivation</h2>
          <p className="text-2xl font-light text-gray-300 leading-relaxed italic">
            "The recent global shift towards at-home fitness has highlighted a critical challenge: the lack of accessible, expert guidance outside of traditional gym environments."
          </p>
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <h3 className="text-3xl font-bold mb-6 text-white">Project Summary</h3>
          <div className="grid md:grid-cols-2 gap-12 text-gray-400">
            <div className="space-y-6">
              <p>
                Our motivation for this project is to bridge the gap between convenience and safety by leveraging artificial intelligence. Performing exercises without professional supervision increases the risk of injury; we aim to empower users to pursue fitness goals safely from their homes.
              </p>
              <p>
                Our solution is a comprehensive AI-powered application serving as a digital fitness coach. The core is a real-time form analysis module utilizing computer vision and advanced pose estimation algorithms.
              </p>
            </div>
            <div className="space-y-6 border-l border-gray-800 pl-12">
              <p>
                The technology tracks body movements via a device's camera, evaluates technique against correct models, and provides immediate, actionable feedback to correct postural errors.
              </p>
              <p>
                Additionally, an intelligent conversational assistant will engage users to understand goals, preferences, and progress, offering personalized nutrition guidance and adaptive workout recommendations.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-red-500/5 rounded-3xl p-10 border border-red-500/10">
          <h3 className="text-2xl font-bold mb-6 text-white">Expected Outcome & Impact</h3>
          <p className="text-gray-400 leading-relaxed">
            The expected outcome is a robust and user-friendly virtual personal trainer application. We anticipate a profound impact by democratizing access to personal training, making it a viable option for those who cannot afford or access in-person coaching. Ultimately, we aim to help users build lasting, healthy habits more efficiently and safely than ever before.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProposalContent;
