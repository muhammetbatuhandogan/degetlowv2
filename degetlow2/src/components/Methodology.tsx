
import React from 'react';

const steps = [
  {
    num: "01",
    title: "Requirement Analysis",
    description: "Focus on understanding the problem and setting clear requirements. Reviewing research on pose estimation, exercise recognition, and feedback systems."
  },
  {
    num: "02",
    title: "Data and Interaction Design",
    description: "Extracting body keypoints using pre-trained models like OpenPose or MediaPipe from both YouTube and proprietary recordings."
  },
  {
    num: "03",
    title: "Prototype Development",
    description: "Integrating pose detection with RNN or LSTM models to classify exercise sequences and validate form using geometric rules."
  }
];

const Methodology: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Technical Methodology</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">Dissecting the architecture from pose detection to corrective feedback.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 mb-20">
        <div className="space-y-8">
          <div className="p-8 bg-gray-900 rounded-3xl border border-gray-800">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="w-8 h-8 rounded-lg bg-red-500 flex items-center justify-center text-xs mr-3">A</span>
              Angle-Based Approach
            </h3>
            <p className="text-gray-400 text-sm">
              We calculate the specific angles between important joints (shoulder, elbow, wrist) to detect if the user's movement aligns with predefined ergonomic constants.
            </p>
          </div>
          <div className="p-8 bg-gray-900 rounded-3xl border border-gray-800">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center text-xs mr-3">D</span>
              Data-Driven Approach
            </h3>
            <p className="text-gray-400 text-sm">
              Labeling examples of incorrect forms ("elbow bent too much") to train an RNN/LSTM model to automatically recognize subtle postural deviations in real-time.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-red-500/10 blur-3xl rounded-full"></div>
          <div className="relative space-y-4">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-6 p-6 bg-gray-900/80 backdrop-blur-md rounded-2xl border border-gray-800 hover:border-red-500/30 transition-all">
                <span className="text-3xl font-black text-gray-800">{step.num}</span>
                <div>
                  <h4 className="font-bold text-white mb-1">{step.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-950 p-8 rounded-3xl border border-gray-800">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-2xl font-bold text-red-500 mb-1">Pose Tracking</div>
            <div className="text-xs text-gray-500 uppercase font-bold tracking-widest">MediaPipe / OpenPose</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-red-500 mb-1">Classification</div>
            <div className="text-xs text-gray-500 uppercase font-bold tracking-widest">RNN / LSTM Networks</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-red-500 mb-1">Interaction</div>
            <div className="text-xs text-gray-500 uppercase font-bold tracking-widest">Conversational Gemini AI</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Methodology;
