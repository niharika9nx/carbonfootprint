import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { EcoMascot } from './EcoMascot';
import { Car, Zap, Utensils, ShoppingBag, Trash, Plane } from 'lucide-react';

interface CauseCard {
  title: string;
  icon: React.ReactNode;
  color: string;
  badgeText: string;
  points: string[];
  description: string;
}

export const Causes: React.FC = () => {
  const causesList: CauseCard[] = [
    {
      title: "Transport",
      icon: <div className="flex gap-1"><Car size={32} /><Plane size={32} /></div>,
      color: "bg-comic-red",
      badgeText: "VROOOM! 🚗",
      description: "Getting around burns fossil fuels, creating high levels of CO2.",
      points: [
        "Solo driving creates 4x more emissions than taking a train.",
        "Planes release heavy CO2 and other gases directly into high altitudes.",
        "Cruises and large ships burn heavy oils."
      ]
    },
    {
      title: "Home Energy",
      icon: <Zap size={44} />,
      color: "bg-comic-yellow",
      badgeText: "ZAP! ⚡",
      description: "Electricity and gas use at home might depend on coal and natural gas.",
      points: [
        "Keeping air conditioning running constantly uses heavy grid energy.",
        "Heating homes in cold weather burns natural gas or oil.",
        "Leaving vampire devices plugged in drains power around the clock."
      ]
    },
    {
      title: "Food Choices",
      icon: <Utensils size={44} />,
      color: "bg-comic-orange",
      badgeText: "CHOMP! 🍔",
      description: "What we eat and how it's grown makes up 25% of global emissions.",
      points: [
        "Beef and dairy release methane gas from livestock digestion.",
        "Flying food from overseas creates huge shipping emissions.",
        "Rotting food waste in plastic bags makes methane in dumps."
      ]
    },
    {
      title: "Shopping & Stuff",
      icon: <ShoppingBag size={44} />,
      color: "bg-comic-blue",
      badgeText: "SHOP! 🛍️",
      description: "Factories use massive amounts of energy to make toys, clothes, and tech.",
      points: [
        "Fast fashion makes cheap clothes that are thrown away fast.",
        "New electronics need rare materials mined with high energy.",
        "Single-use plastic packages end up in landfills or oceans."
      ]
    },
    {
      title: "Landfill Waste",
      icon: <Trash size={44} />,
      color: "bg-comic-green",
      badgeText: "TRASH! 🗑️",
      description: "Dumping garbage rather than recycling or composting hurts the Earth.",
      points: [
        "Buried organic waste decomposes without oxygen, producing methane.",
        "Burning trash creates immediate carbon pollution.",
        "Making new packaging from scratch uses double the energy."
      ]
    }
  ];

  // Grid animation container
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  // Card slide-up & pop animation
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  return (
    <section id="causes" className="min-h-screen py-24 bg-white border-t-8 border-b-8 border-black relative overflow-hidden">
      
      {/* Decorative Halftone Border Accents */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-halftone opacity-40"></div>

      <div className="max-w-6xl mx-auto px-4">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-16 relative">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
            className="text-4xl sm:text-5xl font-black uppercase text-comic-dark inline-block bg-comic-orange text-white px-6 py-2.5 comic-border comic-shadow-lg transform -rotate-1"
          >
            What Causes Carbon Footprints? 🌋
          </motion.h2>
          <p className="mt-6 text-lg font-comic font-bold text-slate-600 max-w-xl mx-auto">
            Everything we buy, eat, or ride in contributes to our total footprint. Check out the top 5 contributors!
          </p>
        </div>

        {/* CONTENT ROW: MASCOT & CARD GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Eco Mascot pointing */}
          <div className="lg:col-span-3 flex flex-col items-center lg:sticky lg:top-32 mb-10 lg:mb-0">
            <div className="bg-comic-cream comic-border comic-shadow p-5 rounded-2xl relative text-center max-w-xs mb-4">
              <span className="font-comic font-black text-sm text-comic-dark block">
                Look closely! These daily actions add up to form your carbon footprint! 👇
              </span>
              <div className="absolute -bottom-3 right-1/2 translate-x-1/2 w-0 h-0 border-style:solid border-t-[12px] border-t-black border-x-[12px] border-x-transparent"></div>
            </div>
            
            <motion.div
              animate={{ rotate: [-1, 1, -1] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              <EcoMascot pose="point" size={240} />
            </motion.div>
          </div>

          {/* RIGHT: Grid of cards */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {causesList.map((cause, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.03, 
                  y: -5,
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
                className="bg-white comic-border comic-shadow flex flex-col justify-between overflow-hidden group hover:shadow-comic-lg transition-shadow duration-200"
              >
                {/* Card Header (Colored background) */}
                <div className={`p-4 ${cause.color} border-b-4 border-black flex justify-between items-center text-comic-dark`}>
                  <h3 className="text-2xl font-comic font-black uppercase text-white drop-shadow-[2px_2px_0px_#000]">
                    {cause.title}
                  </h3>
                  <span className="bg-white text-comic-dark font-comic font-black text-xs px-2.5 py-1 comic-border-sm rounded-full">
                    {cause.badgeText}
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-grow flex flex-col justify-between bg-comic-cream bg-opacity-30">
                  <div>
                    <div className="flex justify-center items-center h-20 w-20 bg-white comic-border rounded-2xl mx-auto mb-4 comic-shadow-sm group-hover:rotate-3 transition-transform duration-200">
                      {cause.icon}
                    </div>
                    <p className="font-comic font-bold text-base text-comic-dark text-center mb-4">
                      {cause.description}
                    </p>
                    <ul className="text-sm text-slate-700 space-y-2 border-t border-dashed border-slate-300 pt-4">
                      {cause.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <span className="text-comic-red font-bold select-none">•</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>

      </div>

    </section>
  );
};
