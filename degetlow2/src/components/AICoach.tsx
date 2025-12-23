
import React, { useState, useRef, useEffect } from 'react';
import { getTrainerAdvice } from '../services/geminiService';
import { Message } from '../types';

const AICoach: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', text: "Welcome to the FitGenius Assistant prototype. I'm here to simulate the conversational coaching component of our project. Ask me about workout planning, nutrition, or how our form analysis works!" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage: Message = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    const aiResponse = await getTrainerAdvice(input);
    setMessages(prev => [...prev, { role: 'assistant', text: aiResponse || "I missed that, can you repeat?" }]);
    setLoading(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-5 gap-12 items-center">
        <div className="lg:col-span-2 space-y-8">
          <div className="inline-block p-3 rounded-2xl bg-red-500/10 border border-red-500/20 mb-4">
            <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </div>
          <h2 className="text-4xl font-bold leading-tight text-white">The Conversational Assistant Component</h2>
          <p className="text-gray-400 leading-relaxed">
            Beyond physical performance analysis, our application integrates an intelligent conversational assistant to offer personalized nutrition and adaptive workout recommendations.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center text-sm text-gray-300">
              <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3"></div>
              Goal Tracking & Motivation
            </li>
            <li className="flex items-center text-sm text-gray-300">
              <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3"></div>
              Nutrition Guidance Simulation
            </li>
            <li className="flex items-center text-sm text-gray-300">
              <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3"></div>
              Context-Aware Feedback
            </li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <div className="bg-gray-900 border border-gray-800 rounded-3xl flex flex-col h-[550px] overflow-hidden shadow-2xl relative">
            <div className="p-5 border-b border-gray-800 flex justify-between items-center bg-gray-950/50">
               <div className="flex items-center space-x-3">
                 <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                 <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Assistant Demo (Gemini 3.0)</span>
               </div>
            </div>

            <div className="flex-1 overflow-y-auto p-8 space-y-6">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] rounded-2xl p-4 ${
                    m.role === 'user' 
                    ? 'bg-red-600 text-white rounded-tr-none shadow-lg shadow-red-900/10' 
                    : 'bg-gray-800 border border-gray-700 text-gray-100 rounded-tl-none shadow-sm'
                  }`}>
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">{m.text}</p>
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-gray-800 border border-gray-700 rounded-2xl rounded-tl-none p-4 flex space-x-2">
                    <div className="w-1.5 h-1.5 bg-gray-600 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-gray-600 rounded-full animate-bounce delay-100"></div>
                    <div className="w-1.5 h-1.5 bg-gray-600 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            <form onSubmit={handleSend} className="p-6 bg-gray-950/80 border-t border-gray-800 backdrop-blur-md">
              <div className="flex gap-3">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Inquire about nutrition, goals, or AI tech..."
                  className="flex-1 bg-gray-900 border border-gray-800 rounded-xl px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 transition-all border-gray-700 hover:border-gray-600"
                />
                <button 
                  type="submit"
                  disabled={loading}
                  className="bg-red-500 hover:bg-red-600 text-white px-5 rounded-xl transition-all disabled:opacity-50 flex items-center justify-center"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9-7-9-7v14z" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AICoach;
