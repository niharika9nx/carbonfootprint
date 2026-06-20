import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EcoMascot } from './EcoMascot';
import { Footprints, Cloud, ArrowDown, Car, Lightbulb, Trash2 } from 'lucide-react';

export const Hero: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  // Mini actions simulation
  const steps = [
    {
      action: "Driving a Car",
      emission: "CO2 exhaust gas!",
      icon: <Car size={28} className="text-comic-red" />,
      color: "bg-comic-red",
      desc: "Burning gasoline releases heavy clouds of CO2 into our sky."
    },
    {
      action: "Leaving Lights On",
      emission: "Coal-powered electricity!",
      icon: <Lightbulb size={28} className="text-comic-yellow" />,
      color: "bg-comic-yellow",
      desc: "Electricity often comes from power plants burning fossil fuels."
    },
    {
      action: "Throwing Food Waste",
      emission: "Methane gas in landfill!",
      icon: <Trash2 size={28} className="text-comic-orange" />,
      color: "bg-comic-orange",
      desc: "Rotting trash in landfill dumps creates powerful warming gases."
    }
  ];

  const handleNextSection = () => {
    const el = document.querySelector('#causes');
    if (el) {
      const top = (el as HTMLElement).offsetTop - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen pt-28 pb-16 flex flex-col justify-center items-center relative overflow-hidden bg-halftone"
    >
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
        
        {/* LEFT COLUMN: HERO INTRO */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
          
          {/* Badge */}
          <motion.span 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="bg-comic-blue text-white comic-border-sm comic-shadow-sm px-4 py-1.5 font-comic font-black text-sm uppercase tracking-widest mb-6 rotate-[-2deg] inline-block"
          >
            Hackathon Edition 🚀
          </motion.span>

          {/* Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="text-4xl sm:text-6xl font-black text-comic-dark leading-tight uppercase mb-6"
          >
            What is a <br/>
            <span className="bg-comic-yellow px-4 py-1 comic-border comic-shadow-lg inline-block transform rotate-1 my-2">
              Carbon Footprint?
            </span>
          </motion.h1>

          {/* Definition speech bubble */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white comic-border comic-shadow p-6 rounded-3xl relative mb-8 max-w-xl"
          >
            <p className="font-comic font-bold text-lg text-comic-dark leading-relaxed">
              Hey there! A <strong className="text-comic-orange underline">carbon footprint</strong> is the total amount of greenhouse gases (mainly CO2) produced by our daily choices.
            </p>
            <p className="mt-3 font-sans text-slate-600 text-sm">
              Every time you drive a car, turn on the TV, or buy stuff, you leave a little "invisible footprint" of CO2 emissions in the atmosphere. We measure this footprint in tonnes of CO2 per year!
            </p>
          </motion.div>

          {/* Call to action */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNextSection}
            className="font-comic font-black text-xl bg-comic-green text-white comic-border comic-shadow px-8 py-4 flex items-center gap-3 group hover:bg-comic-green-dark transition-colors"
          >
            Start the Adventure!
            <ArrowDown className="animate-bounce group-hover:translate-y-1 transition-transform stroke-[3]" />
          </motion.button>
        </div>

        {/* RIGHT COLUMN: MASCOT & MINI EXPLAINER */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative mt-10 lg:mt-0">
          
          {/* ECO Waving with Speech Bubble */}
          <div className="relative flex flex-col items-center">
            
            {/* Mascot bubble */}
            <motion.div 
              initial={{ scale: 0, rotate: -15 }}
              animate={{ scale: 1, rotate: -5 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute -top-16 bg-white comic-border-sm comic-shadow-sm px-4 py-2 rounded-xl bubble-tail-bottom z-10"
            >
              <div className="bubble-tail-bottom-border"></div>
              <span className="font-comic font-black text-sm text-comic-dark">Hi! I'm Eco. Let's explore together! 👋</span>
            </motion.div>

            {/* Eco Mascot Wave */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <EcoMascot pose="wave" size={260} />
            </motion.div>
          </div>

          {/* INTERACTIVE ACTIONS TO CO2 EMISSIONS CARD */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white comic-border comic-shadow w-full max-w-sm mt-6 p-5 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 bg-comic-orange text-white text-xs font-black uppercase px-3 py-1 comic-border-sm border-t-0 border-r-0 rounded-bl-lg">
              Interactive!
            </div>
            
            <h3 className="font-comic font-black text-lg text-left uppercase mb-4 flex items-center gap-2">
              <Footprints size={22} className="text-comic-green" /> Footprint Simulator
            </h3>

            {/* Tabs for actions */}
            <div className="flex gap-2 mb-4">
              {steps.map((step, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`flex-1 flex justify-center py-2.5 comic-border-sm transition-all duration-100 ${
                    activeStep === idx 
                      ? `${step.color} text-white comic-shadow-sm` 
                      : 'bg-comic-cream hover:bg-yellow-100 text-comic-dark'
                  }`}
                >
                  {step.icon}
                </button>
              ))}
            </div>

            {/* Simulated Action Visual */}
            <div className="bg-comic-cream p-4 comic-border-sm rounded-xl min-h-[140px] flex flex-col justify-between">
              <div>
                <h4 className="font-comic font-black text-base text-comic-dark flex items-center gap-1.5">
                  Action: <span className="underline decoration-comic-orange">{steps[activeStep].action}</span>
                </h4>
                <p className="text-xs text-slate-600 mt-1 font-sans">{steps[activeStep].desc}</p>
              </div>

              {/* CO2 Puff Animation */}
              <div className="flex items-center justify-between border-t border-dashed border-slate-300 pt-3 mt-3">
                <span className="text-xs font-comic font-bold text-comic-dark">Result:</span>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, scale: 0.8, x: -10 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.8, x: 10 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-1 bg-slate-200 comic-border-sm px-2 py-0.5 rounded-full"
                  >
                    <Cloud size={14} className="text-slate-500 fill-slate-400" />
                    <span className="text-xs font-comic font-black text-slate-700">{steps[activeStep].emission}</span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
