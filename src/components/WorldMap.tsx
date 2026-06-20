import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EcoMascot } from './EcoMascot';
import { Globe, Info } from 'lucide-react';

interface CountryData {
  id: string;
  name: string;
  footprint: number;
  reason: string;
  coords: { x: number; y: number };
  marker: string; // Emoji or simple icon representation
  color: string;
}

export const WorldMap: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<CountryData | null>(null);

  const countries: CountryData[] = [
    {
      id: 'usa',
      name: 'United States',
      footprint: 13.8,
      reason: 'Big cars, spacious homes, and high energy usage add up fast!',
      coords: { x: 200, y: 150 },
      marker: '🗽',
      color: 'bg-comic-red'
    },
    {
      id: 'canada',
      name: 'Canada',
      footprint: 14.5,
      reason: 'Freezing cold winters mean running heating systems for months!',
      coords: { x: 220, y: 90 },
      marker: '🍁',
      color: 'bg-comic-blue'
    },
    {
      id: 'australia',
      name: 'Australia',
      footprint: 15.0,
      reason: 'Heavy reliance on coal energy combined with very long driving distances!',
      coords: { x: 820, y: 400 },
      marker: '🦘',
      color: 'bg-comic-orange'
    },
    {
      id: 'uae_saudi',
      name: 'UAE & Saudi Arabia',
      footprint: 20.2,
      reason: 'Intense desert heat requires air conditioning 24/7, powered by oil and gas!',
      coords: { x: 575, y: 230 },
      marker: '🐪',
      color: 'bg-comic-yellow'
    },
    {
      id: 'uk_france',
      name: 'UK, France & Portugal',
      footprint: 5.5,
      reason: 'Renewable power grids, smaller homes, and public transit keep footprints lower.',
      coords: { x: 470, y: 120 },
      marker: '🗼',
      color: 'bg-comic-green'
    },
    {
      id: 'germany',
      name: 'Germany',
      footprint: 8.5,
      reason: 'A large, industrial economy. Manufacturing cars and machinery uses lots of energy.',
      coords: { x: 505, y: 110 },
      marker: '🏰',
      color: 'bg-comic-red'
    },
    {
      id: 'china',
      name: 'China',
      footprint: 7.5,
      reason: 'Massive manufacturing sector. Overall emissions are high, but per person it is moderate.',
      coords: { x: 730, y: 180 },
      marker: '🐉',
      color: 'bg-comic-orange'
    },
    {
      id: 'india',
      name: 'India',
      footprint: 2.0,
      reason: 'A huge population, but average energy consumption per person remains very low.',
      coords: { x: 670, y: 230 },
      marker: '🕌',
      color: 'bg-comic-green'
    },
    {
      id: 'ssa',
      name: 'Sub-Saharan Africa',
      footprint: 0.1,
      reason: 'Minimal industrial development and limited access to electricity keep footprints tiny!',
      coords: { x: 510, y: 330 },
      marker: '🐘',
      color: 'bg-comic-blue'
    },
    {
      id: 'global',
      name: 'Global Average',
      footprint: 4.8,
      reason: 'The worldwide baseline we compare everyone against to see our progress.',
      coords: { x: 900, y: 80 },
      marker: '🌍',
      color: 'bg-comic-dark'
    }
  ];

  return (
    <section id="map" className="min-h-screen py-24 bg-comic-cream relative overflow-hidden bg-halftone">
      <div className="max-w-6xl mx-auto px-4 w-full">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-black uppercase text-comic-dark inline-block bg-comic-blue text-white px-6 py-2.5 comic-border comic-shadow-lg transform rotate-1"
          >
            Footprints Around the World 🗺️
          </motion.h2>
          <p className="mt-6 text-lg font-comic font-bold text-slate-600 max-w-2xl mx-auto">
            Click on the country markers to see how footprints differ around the globe! Some places use way more energy than others.
          </p>
        </div>

        {/* INTERACTIVE AREA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* MAP CANVAS (12 columns on small, 8 columns on large) */}
          <div className="lg:col-span-8 bg-white comic-border comic-shadow p-4 relative overflow-x-auto select-none min-w-[320px]">
            
            <div className="relative w-[1000px] h-[500px]">
              
              {/* STYLIZED SVG WORLD MAP */}
              <svg 
                viewBox="0 0 1000 500" 
                className="w-full h-full filter drop-shadow-[2px_2px_0px_rgba(0,0,0,0.05)]"
              >
                {/* Oceans grid background */}
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#f1f5f9" strokeWidth="2"/>
                  </pattern>
                </defs>
                <rect width="1000" height="500" fill="url(#grid)" />

                {/* Greenland */}
                <path d="M300 30 C340 30, 360 40, 350 80 C330 90, 300 70, 280 60 Z" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="3" />

                {/* North America */}
                <path 
                  d="M100 80 C150 60, 280 40, 320 80 C340 100, 320 180, 260 210 C240 220, 210 250, 190 280 C180 300, 170 300, 160 280 C150 250, 150 220, 120 200 C80 180, 70 120, 100 80 Z" 
                  fill="#93c5fd" 
                  stroke="black" 
                  strokeWidth="4" 
                />

                {/* South America */}
                <path 
                  d="M190 290 C220 290, 260 320, 250 360 C240 400, 210 450, 190 480 C180 490, 170 495, 170 480 C160 450, 150 380, 165 340 C170 310, 180 290, 190 290 Z" 
                  fill="#fed7aa" 
                  stroke="black" 
                  strokeWidth="4" 
                />

                {/* Europe */}
                <path 
                  d="M430 100 C470 70, 530 80, 550 120 C540 160, 500 180, 460 190 C440 180, 420 150, 430 100 Z" 
                  fill="#d8b4fe" 
                  stroke="black" 
                  strokeWidth="4" 
                />

                {/* Africa */}
                <path 
                  d="M440 205 C500 200, 560 220, 580 270 C590 300, 560 380, 530 420 C510 440, 490 420, 480 380 C460 350, 420 300, 425 260 C428 230, 432 210, 440 205 Z" 
                  fill="#fef08a" 
                  stroke="black" 
                  strokeWidth="4" 
                />

                {/* Asia */}
                <path 
                  d="M550 120 C620 60, 850 50, 920 100 C950 130, 930 250, 880 280 C840 290, 820 320, 780 310 C760 300, 750 280, 720 280 C680 280, 650 320, 620 300 C580 270, 540 210, 550 120 Z" 
                  fill="#86efac" 
                  stroke="black" 
                  strokeWidth="4" 
                />

                {/* Australia */}
                <path 
                  d="M780 360 C840 350, 890 370, 880 410 C860 440, 800 450, 770 420 C750 400, 750 370, 780 360 Z" 
                  fill="#fbcfe8" 
                  stroke="black" 
                  strokeWidth="4" 
                />
              </svg>

              {/* MAP MARKERS */}
              {countries.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedCountry(c)}
                  style={{ left: `${c.coords.x}px`, top: `${c.coords.y}px` }}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full comic-border comic-shadow-sm font-bold text-xl cursor-pointer hover:scale-125 transition-transform bg-white ${
                    selectedCountry?.id === c.id ? 'bg-comic-yellow ring-4 ring-black ring-offset-2' : ''
                  }`}
                >
                  <span className="animate-float" style={{ animationDelay: `${Math.random() * 2}s` }}>
                    {c.marker}
                  </span>
                </button>
              ))}

            </div>

          </div>

          {/* SIDE PANEL DETAILS (4 columns on large) */}
          <div className="lg:col-span-4 flex flex-col justify-center items-center w-full min-h-[380px]">
            <AnimatePresence mode="wait">
              {selectedCountry ? (
                <motion.div
                  key={selectedCountry.id}
                  initial={{ opacity: 0, x: 50, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -50, scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="bg-white comic-border comic-shadow p-6 rounded-3xl w-full relative"
                >
                  {/* Close button */}
                  <button 
                    onClick={() => setSelectedCountry(null)}
                    className="absolute top-3 right-3 font-comic font-black text-sm bg-slate-100 hover:bg-slate-200 comic-border-sm rounded-full px-2 py-0.5"
                  >
                    X
                  </button>

                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">{selectedCountry.marker}</span>
                    <h3 className="text-2xl font-comic font-black uppercase text-comic-dark border-b-4 border-black pb-1">
                      {selectedCountry.name}
                    </h3>
                  </div>

                  <div className="bg-comic-cream comic-border-sm p-4 rounded-xl mb-4 text-left">
                    <span className="text-xs uppercase font-black text-slate-500 block mb-1">
                      Average Carbon Footprint
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-comic font-black text-comic-red">
                        {selectedCountry.footprint}
                      </span>
                      <span className="font-comic font-bold text-slate-700 text-sm">
                        tonnes CO2 / person / year
                      </span>
                    </div>
                  </div>

                  <p className="font-comic font-medium text-slate-700 text-sm text-left leading-relaxed mb-6">
                    <strong>Why?</strong> {selectedCountry.reason}
                  </p>

                  {/* Eco mascot thumbsup */}
                  <div className="flex items-center gap-4 bg-slate-50 p-3 comic-border-sm rounded-xl">
                    <div className="flex-shrink-0">
                      <EcoMascot pose="thumbsup" size={90} />
                    </div>
                    <div className="text-left">
                      <span className="font-comic font-black text-xs text-comic-dark block">Eco says:</span>
                      <span className="text-xs text-slate-600 font-sans leading-tight block mt-0.5">
                        {selectedCountry.footprint > 10 
                          ? "Wow! That's a giant footprint. We need to save energy!" 
                          : selectedCountry.footprint < 2
                          ? "Incredible! A tiny footprint. They live very simply!"
                          : "Let's work together to bring this footprint down even more!"}
                      </span>
                    </div>
                  </div>

                </motion.div>
              ) : (
                <motion.div
                  key="empty-state"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-white comic-border comic-shadow p-8 rounded-3xl w-full text-center flex flex-col justify-center items-center"
                >
                  <div className="bg-comic-blue text-white p-4 rounded-full comic-border mb-4 animate-bounce">
                    <Globe size={40} className="stroke-[3]" />
                  </div>
                  <h3 className="text-xl font-comic font-black uppercase text-comic-dark mb-2">
                    Select a Region!
                  </h3>
                  <p className="text-sm font-comic font-bold text-slate-500 max-w-[240px]">
                    Click any marker on the map to explore its carbon details!
                  </p>
                  
                  <div className="mt-8 opacity-60">
                    <EcoMascot pose="point" size={120} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* Footnote */}
        <div className="mt-8 flex justify-center items-center gap-2 text-xs text-slate-500 font-sans">
          <Info size={14} className="flex-shrink-0" />
          <span>Note: approximate figures for awareness purposes, based on public data such as Our World in Data / Global Carbon Project.</span>
        </div>

      </div>
    </section>
  );
};
