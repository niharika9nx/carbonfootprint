import React from 'react';
import { EcoMascot } from './EcoMascot';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t-8 border-black py-12 relative overflow-hidden select-none">
      {/* Decorative top dot border */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-halftone opacity-40"></div>

      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left Side: Description and details */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <span className="text-xl font-comic font-black uppercase tracking-wider bg-comic-yellow px-3 py-1 comic-border-sm comic-shadow-sm mb-4 inline-block">
            Eco Footprint 🌍
          </span>
          <p className="font-comic font-bold text-slate-700 text-sm max-w-sm mb-2 leading-relaxed">
            Let's keep our sky blue, our trees green, and our footprints small! Share this guide with friends to spread awareness.
          </p>
          <span className="text-xs text-slate-400 font-sans mt-2">
            Built for **PromptWars** by **hack2skill** 🏆
          </span>
        </div>

        {/* Center: Waving Goodbye Eco */}
        <div className="flex flex-col items-center">
          <div className="bg-comic-cream comic-border-sm comic-shadow-sm px-3.5 py-1.5 rounded-lg text-xs font-comic font-black text-comic-dark mb-1 relative">
            See you next time! Keep tracking! 👋
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-black"></div>
          </div>
          <EcoMascot pose="wave" size={130} />
        </div>

        {/* Right Side: Data Sources and copyright */}
        <div className="text-center md:text-right">
          <div className="flex justify-center md:justify-end items-center gap-1.5 text-xs text-slate-500 font-sans mb-3">
            <span>Made with</span>
            <Heart size={14} className="text-comic-red fill-comic-red animate-pulse" />
            <span>for the planet.</span>
          </div>
          <p className="text-xs text-slate-500 font-sans leading-relaxed">
            Data inspired by public repositories:<br/>
            <strong>Our World in Data</strong> & <strong>Global Carbon Project</strong>
          </p>
          <p className="text-[10px] text-slate-400 font-sans mt-4">
            &copy; {new Date().getFullYear()} Carbon Awareness Campaign. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};
