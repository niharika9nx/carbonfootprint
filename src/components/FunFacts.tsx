import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { EcoMascot } from './EcoMascot';
import { HelpCircle, RefreshCw, Zap, Moon, Plane, Flame, Heart } from 'lucide-react';

interface FactCard {
  id: number;
  teaser: string;
  factTitle: string;
  frontIcon: React.ReactNode;
  backIcon: React.ReactNode;
  factDetails: string;
  actionTip: string;
  color: string;
}

export const FunFacts: React.FC = () => {
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});

  const toggleFlip = (id: number) => {
    setFlippedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const facts: FactCard[] = [
    {
      id: 1,
      teaser: "How much carbon does skipping just one flight save?",
      factTitle: "Flying is heavy!",
      frontIcon: <Plane size={40} className="text-comic-red stroke-[2.5]" />,
      backIcon: <Plane size={36} className="text-white fill-white" />,
      factDetails: "Skipping just one long-haul plane flight saves up to 1.6 tonnes of CO2. That is the same as recycling your household trash for almost 5 full years!",
      actionTip: "Consider road trips by train, electric car, or holiday locally! Staycations are awesome adventures.",
      color: "bg-comic-red"
    },
    {
      id: 2,
      teaser: "Can changing your dinner menu really fight climate change?",
      factTitle: "Veggie Power! 🥦",
      frontIcon: <Heart size={40} className="text-comic-orange stroke-[2.5]" />,
      backIcon: <Heart size={36} className="text-white fill-white" />,
      factDetails: "Eating just one plant-based meal a day for a whole year saves about 200,000 gallons of water and cuts your personal footprint by 0.5 tonnes of CO2!",
      actionTip: "Try a veggie burger or plant-based nuggets. Join the Meatless Mondays movement with your family!",
      color: "bg-comic-orange"
    },
    {
      id: 3,
      teaser: "Which bulb shines bright but keeps the air cleaner?",
      factTitle: "LED Revolution 💡",
      frontIcon: <Zap size={40} className="text-comic-yellow stroke-[2.5]" />,
      backIcon: <Zap size={36} className="text-white fill-white" />,
      factDetails: "LED lightbulbs use 80% less energy than old incandescent bulbs and last 25 times longer! They produce the same brightness for a fraction of the coal burned.",
      actionTip: "Ask your parents to check your home lightbulbs and replace old warm ones with energy-smart LEDs!",
      color: "bg-comic-yellow"
    },
    {
      id: 4,
      teaser: "What happens when you hang clothes out in the breeze?",
      factTitle: "Breeze Dry! 👕",
      frontIcon: <RefreshCw size={40} className="text-comic-green stroke-[2.5]" />,
      backIcon: <RefreshCw size={36} className="text-white" />,
      factDetails: "A clothes dryer is one of the biggest electricity hogs in the house, producing about 2-3 kg of CO2 per load. Air drying on a line produces exactly zero!",
      actionTip: "Hang your t-shirts and jeans out in the sunshine! They will smell fresh and save the planet money and energy.",
      color: "bg-comic-green"
    },
    {
      id: 5,
      teaser: "Are electronics drinking electricity while they sleep?",
      factTitle: "Vampire Power! 🧛‍♂️",
      frontIcon: <Moon size={40} className="text-comic-blue stroke-[2.5]" />,
      backIcon: <Moon size={36} className="text-white fill-white" />,
      factDetails: "Devices left plugged in on standby mode (like game consoles, TVs, microwave clocks) drain power 24/7. This 'vampire load' makes up 10% of home electric bills!",
      actionTip: "Unplug chargers when your phone is done, and use power strips with switchable buttons to turn off gaming sets at night.",
      color: "bg-comic-blue"
    },
    {
      id: 6,
      teaser: "Is a short solo car ride really that bad for a quick trip?",
      factTitle: "Bike over Fuel! 🚲",
      frontIcon: <Flame size={40} className="text-comic-dark stroke-[2.5]" />,
      backIcon: <Flame size={36} className="text-white fill-white" />,
      factDetails: "Over 60% of all car trips are shorter than 5 miles. Starting up a combustion engine for tiny errands produces massive amounts of cold-engine emissions.",
      actionTip: "For close trips to the store or a friend's house, walk, skate, scoot, or hop on a bicycle. It is healthy for you AND the sky!",
      color: "bg-comic-dark"
    }
  ];

  return (
    <section id="facts" className="min-h-screen py-24 bg-comic-cream relative overflow-hidden bg-halftone">
      <div className="max-w-6xl mx-auto px-4 w-full">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-black uppercase text-comic-dark inline-block bg-comic-orange text-white px-6 py-2.5 comic-border comic-shadow-lg transform rotate-1"
          >
            Fun Facts (Tips in Disguise!) 🧠
          </motion.h2>
          <p className="mt-6 text-lg font-comic font-bold text-slate-600 max-w-xl mx-auto">
            Click on any card to flip it and reveal the secret carbon-saving power hidden inside!
          </p>
        </div>

        {/* CONTENT ROW */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Grid of 3D Cards */}
          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facts.map((fact) => {
              const isFlipped = !!flippedCards[fact.id];
              return (
                <div 
                  key={fact.id}
                  className="w-full h-80 relative cursor-pointer group"
                  onClick={() => toggleFlip(fact.id)}
                  style={{ perspective: 1000 }}
                >
                  <motion.div
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                    style={{ transformStyle: "preserve-3d" }}
                    className="w-full h-full relative"
                  >
                    
                    {/* CARD FRONT */}
                    <div 
                      className="absolute inset-0 bg-white comic-border comic-shadow rounded-2xl p-6 flex flex-col justify-between"
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      <div className="flex justify-between items-start">
                        <span className="bg-comic-cream font-comic font-black text-xs px-2.5 py-1 comic-border-sm rounded-full">
                          FACT #{fact.id}
                        </span>
                        <HelpCircle size={24} className="text-slate-400" />
                      </div>
                      
                      <div className="flex flex-col items-center flex-grow justify-center mt-2">
                        <div className="bg-slate-50 p-4 comic-border-sm rounded-full mb-4 group-hover:scale-110 transition-transform">
                          {fact.frontIcon}
                        </div>
                        <p className="font-comic font-black text-base text-comic-dark text-center leading-snug">
                          {fact.teaser}
                        </p>
                      </div>

                      <div className="text-center font-comic font-black text-xs text-comic-orange animate-pulse">
                        TAP TO FLIP! 🔄
                      </div>
                    </div>

                    {/* CARD BACK */}
                    <div 
                      className={`absolute inset-0 ${fact.color} text-white comic-border comic-shadow rounded-2xl p-5 flex flex-col justify-between`}
                      style={{ 
                        backfaceVisibility: "hidden", 
                        transform: "rotateY(180deg)" 
                      }}
                    >
                      <div className="flex justify-between items-center border-b border-white/20 pb-2">
                        <span className="font-comic font-black text-xs bg-white text-comic-dark px-2 py-0.5 rounded-full">
                          The Secret! 💡
                        </span>
                        <span className="opacity-80">{fact.backIcon}</span>
                      </div>

                      <div className="flex-grow flex flex-col justify-center py-3">
                        <h4 className="font-comic font-black text-lg text-white mb-2 leading-tight drop-shadow-[1px_1px_0px_#000]">
                          {fact.factTitle}
                        </h4>
                        <p className="text-xs text-white/90 leading-relaxed font-medium">
                          {fact.factDetails}
                        </p>
                      </div>

                      {/* Action Tip footer */}
                      <div className="bg-white/10 p-2.5 rounded-xl border border-white/25">
                        <span className="text-[10px] uppercase font-black tracking-wide block text-comic-yellow">Eco-Action Tip:</span>
                        <p className="text-[11px] text-white/90 font-sans mt-0.5 leading-snug">
                          {fact.actionTip}
                        </p>
                      </div>
                    </div>

                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* RIGHT: Celebratory Eco Mascot */}
          <div className="lg:col-span-3 flex flex-col items-center justify-center lg:sticky lg:top-32 mt-10 lg:mt-0">
            <div className="bg-white comic-border comic-shadow p-5 rounded-2xl relative text-center max-w-xs mb-4">
              <span className="font-comic font-black text-sm text-comic-dark block">
                Amazing! Small changes by everyone add up to save our planet! 🌍💡
              </span>
              <div className="absolute -bottom-3 right-1/2 translate-x-1/2 w-0 h-0 border-style:solid border-t-[12px] border-t-black border-x-[12px] border-x-transparent"></div>
            </div>
            
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                y: [0, -6, 0]
              }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <EcoMascot pose="excited" size={240} />
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
