
import React from 'react';

const BlogSection: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-16">
        <h2 className="text-4xl font-black mb-4 uppercase tracking-tighter">Development Blog</h2>
        <p className="text-gray-400">Technical insights into the development of De Get Low.</p>
      </div>

      <article className="group cursor-pointer">
        <div className="bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden hover:border-red-500/50 transition-all duration-300">
          <div className="aspect-video relative overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?q=80&w=2070&auto=format&fit=crop" 
              alt="Human Pose Estimation" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-6 left-6">
              <span className="bg-red-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Technical</span>
            </div>
          </div>
          
          <div className="p-8 lg:p-12 space-y-6">
            <div className="flex items-center space-x-3 text-xs text-gray-500 font-bold uppercase tracking-wider">
              <span>De Get Low Dev Team</span>
              <span>•</span>
              <span>March 2024</span>
            </div>
            <h3 className="text-3xl font-bold group-hover:text-red-500 transition-colors leading-tight">
              Human Pose Estimation: Translating Movement into Data
            </h3>
            <p className="text-gray-400 leading-relaxed">
              At the core of our project is the challenge of Human Pose Estimation (HPE). This technology allows the computer to understand human body orientation by identifying anatomical "keypoints" like shoulders, elbows, and knees from a standard video feed.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-gray-800">
              <div className="space-y-3">
                <h4 className="text-white font-bold">Landmark Identification</h4>
                <p className="text-gray-500 text-xs leading-relaxed">
                  The system scans each frame for skeletal landmarks. We are currently evaluating state-of-the-art frameworks like MediaPipe and YOLO-Pose to find the best balance between real-time inference speed and coordinate accuracy.
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="text-white font-bold">Biomechanical Analysis</h4>
                <p className="text-gray-500 text-xs leading-relaxed">
                  Once coordinates (X, Y, Z) are extracted, we apply geometric calculations. By analyzing the vectors between these keypoints, De Get Low can determine the exact angle of your joints during complex movements.
                </p>
              </div>
            </div>

            <div className="pt-6">
               <span className="text-red-500 font-bold text-sm">Read more on technical documentation →</span>
            </div>
          </div>
        </div>
      </article>

      <div className="mt-12 text-center">
        <p className="text-gray-600 text-xs italic">Upcoming post: Comparing RNN and LSTM models for movement classification.</p>
      </div>
    </div>
  );
};

export default BlogSection;
