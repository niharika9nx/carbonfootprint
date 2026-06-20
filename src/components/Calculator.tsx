import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EcoMascot } from './EcoMascot';
import { Sparkles, RefreshCw, ChevronLeft, Lightbulb } from 'lucide-react';

interface Question {
  id: string;
  title: string;
  category: 'transport' | 'energy' | 'diet' | 'shopping';
  options: {
    label: string;
    points: number;
    description: string;
    icon: string;
  }[];
}

export const Calculator: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showResult, setShowResult] = useState(false);

  const questions: Question[] = [
    {
      id: 'transport',
      title: 'How do you usually get to school or travel around?',
      category: 'transport',
      options: [
        { label: 'Solo Drive', points: 5.5, description: 'By yourself in a car', icon: '🚗' },
        { label: 'Carpool', points: 2.8, description: 'Sharing a ride with friends', icon: '🚙' },
        { label: 'Bus / Train', points: 1.0, description: 'Public transport', icon: '🚌' },
        { label: 'Walk / Bike', points: 0.0, description: 'Using your own energy!', icon: '🚲' }
      ]
    },
    {
      id: 'flights',
      title: 'How many airplane trips does your family take a year?',
      category: 'transport',
      options: [
        { label: 'None', points: 0.0, description: 'Staycations rule!', icon: '🏡' },
        { label: '1 - 2 Flights', points: 1.8, description: 'Occasional holidays', icon: '✈️' },
        { label: '3 or More', points: 4.5, description: 'Frequent flying', icon: '🛫' }
      ]
    },
    {
      id: 'home',
      title: 'What size is your home?',
      category: 'energy',
      options: [
        { label: 'Large House', points: 4.5, description: 'Lots of rooms to heat & cool', icon: '🏰' },
        { label: 'Medium House', points: 2.5, description: 'Standard size family home', icon: '🏡' },
        { label: 'Apartment', points: 1.2, description: 'Shared walls save heating!', icon: '🏢' }
      ]
    },
    {
      id: 'diet',
      title: 'What do you eat most of the time?',
      category: 'diet',
      options: [
        { label: 'Meat-Heavy', points: 3.2, description: 'Steaks, burgers, dairy daily', icon: '🥩' },
        { label: 'Balanced', points: 1.8, description: 'Mixed meat and veggies', icon: '🍲' },
        { label: 'Vegetarian', points: 1.0, description: 'No meat, but eat milk & cheese', icon: '🍳' },
        { label: 'Vegan', points: 0.4, description: '100% plants - veggies, beans, fruit', icon: '🥦' }
      ]
    },
    {
      id: 'shopping',
      title: 'How often do you buy new stuff (clothes, toys, tech)?',
      category: 'shopping',
      options: [
        { label: 'All the time!', points: 2.5, description: 'Love shopping and fast fashion', icon: '🛍️' },
        { label: 'Moderately', points: 1.2, description: 'Mostly when I really need it', icon: '🧸' },
        { label: 'Hardly ever', points: 0.3, description: 'Repair, borrow, and reuse!', icon: '🔧' }
      ]
    }
  ];

  const handleSelectOption = (points: number) => {
    const qId = questions[currentStep].id;
    setAnswers({ ...answers, [qId]: points });

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetCalculator = () => {
    setAnswers({});
    setCurrentStep(0);
    setShowResult(false);
  };

  // Calculations
  const totalFootprint = Object.values(answers).reduce((sum, val) => sum + val, 0);
  
  // Categorize for tips
  const transportScore = (answers['transport'] || 0) + (answers['flights'] || 0);
  const energyScore = answers['home'] || 0;
  const dietScore = answers['diet'] || 0;
  const shoppingScore = answers['shopping'] || 0;

  // Determine highest impact category
  const scores = [
    { category: 'transport', score: transportScore, tips: [
      "Try biking or walking for short trips to school or the park!",
      "Whenever possible, hop on a bus or train instead of driving alone.",
      "Consider staycations or trains for family trips instead of flying!"
    ]},
    { category: 'energy', score: energyScore, tips: [
      "Turn off the lights and TV whenever you leave a room!",
      "Put on a cozy sweater in winter instead of turning up the heating.",
      "Unplug idle chargers and devices - they drain 'vampire' power!"
    ]},
    { category: 'diet', score: dietScore, tips: [
      "Try 'Meatless Mondays' - skipping meat one day a week saves a lot!",
      "Eat fresh, local food that doesn't have to travel in airplanes.",
      "Finish your plate! Reducing food waste keeps methane out of landfills."
    ]},
    { category: 'shopping', score: shoppingScore, tips: [
      "Buy clothes from thrift shops or trade toys with friends!",
      "Keep electronic devices for longer instead of upgrading every year.",
      "Say 'No' to plastic bags and single-use packaging!"
    ]}
  ];

  const highestImpact = [...scores].sort((a, b) => b.score - a.score)[0];

  // Eco Mascot Pose selection based on result
  let ecoPose: 'excited' | 'thumbsup' | 'point' = 'thumbsup';
  let ecoMessage = "";
  let ratingColor = "";
  let ratingText = "";

  if (totalFootprint <= 4.0) {
    ecoPose = 'excited';
    ecoMessage = "Outstanding! Your footprint is tiny. You are a true Green Superhero! 🦸‍♂️💚";
    ratingColor = "text-comic-green bg-green-100 border-comic-green";
    ratingText = "Low Footprint (Super Green!)";
  } else if (totalFootprint <= 10.0) {
    ecoPose = 'thumbsup';
    ecoMessage = "Nice! You have a moderate footprint. A few small tweaks and you can be a hero! 👍✨";
    ratingColor = "text-comic-orange bg-orange-100 border-comic-orange";
    ratingText = "Medium Footprint (Average)";
  } else {
    ecoPose = 'point';
    ecoMessage = "Yikes! That's a giant footprint. Let's look at the tips to shrink it down! 🚨🌲";
    ratingColor = "text-comic-red bg-red-100 border-comic-red";
    ratingText = "High Footprint (Energy Heavy)";
  }

  // Radial Dial needle angle calculation (0 to 22 scale)
  // 0 tonnes = -90 degrees, 22 tonnes = 90 degrees
  const angle = Math.min(180, Math.max(0, (totalFootprint / 22) * 180)) - 90;

  return (
    <section id="calculator" className="min-h-screen py-24 bg-white border-t-8 border-b-8 border-black relative overflow-hidden">
      
      {/* Halftone Top Border Accent */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-halftone opacity-40"></div>

      <div className="max-w-6xl mx-auto px-4">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-black uppercase text-comic-dark inline-block bg-comic-green text-white px-6 py-2.5 comic-border comic-shadow-lg transform -rotate-1"
          >
            Eco Footprint Calculator 🧮
          </motion.h2>
          <p className="mt-6 text-lg font-comic font-bold text-slate-600 max-w-xl mx-auto">
            Answer a few quick questions to measure your carbon footprint and get personalized action tips!
          </p>
        </div>

        {/* INTERACTIVE WORKSPACE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center justify-center">
          
          {/* LEFT: Eco reaction mascot */}
          <div className="lg:col-span-4 flex flex-col items-center">
            
            {/* Dynamic bubble speech */}
            <div className="bg-comic-cream comic-border comic-shadow p-5 rounded-2xl relative text-center max-w-xs mb-4">
              <span className="font-comic font-black text-sm text-comic-dark block">
                {showResult ? ecoMessage : `Question ${currentStep + 1} of 5. Be honest, it helps us compute!`}
              </span>
              <div className="absolute -bottom-3 right-1/2 translate-x-1/2 w-0 h-0 border-style:solid border-t-[12px] border-t-black border-x-[12px] border-x-transparent"></div>
            </div>

            <EcoMascot pose={showResult ? ecoPose : 'calculator'} size={240} />
          </div>

          {/* RIGHT: Quiz Cards / Result Display */}
          <div className="lg:col-span-8 w-full flex justify-center">
            
            <AnimatePresence mode="wait">
              {!showResult ? (
                // QUIZ CARD
                <motion.div
                  key="quiz-card"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  className="bg-white comic-border comic-shadow p-6 sm:p-8 rounded-3xl w-full max-w-2xl min-h-[440px] flex flex-col justify-between"
                >
                  {/* Progress Indicator */}
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <span className="font-comic font-black text-xs uppercase text-slate-400">
                        Category: {questions[currentStep].category}
                      </span>
                      <span className="font-comic font-black text-sm bg-comic-cream px-3 py-1 comic-border-sm rounded-full">
                        {currentStep + 1} / 5
                      </span>
                    </div>

                    <div className="w-full bg-slate-100 h-4 comic-border-sm mb-6 rounded-full overflow-hidden">
                      <div 
                        className="bg-comic-green h-full transition-all duration-300"
                        style={{ width: `${((currentStep + 1) / 5) * 100}%` }}
                      ></div>
                    </div>

                    {/* Question text */}
                    <h3 className="text-xl sm:text-2xl font-comic font-black text-comic-dark mb-6 text-left">
                      {questions[currentStep].title}
                    </h3>

                    {/* Options list */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {questions[currentStep].options.map((opt, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSelectOption(opt.points)}
                          className="flex items-center gap-4 bg-comic-cream bg-opacity-30 hover:bg-comic-yellow border-2 border-black p-4 rounded-2xl text-left comic-shadow-sm hover:translate-y-[-2px] hover:shadow-comic active:translate-y-[1px] active:shadow-none transition-all duration-150 group"
                        >
                          <span className="text-3xl bg-white p-2 comic-border-sm rounded-xl group-hover:rotate-6 transition-transform">
                            {opt.icon}
                          </span>
                          <div>
                            <span className="font-comic font-black text-base text-comic-dark block">
                              {opt.label}
                            </span>
                            <span className="text-xs text-slate-500 font-sans block mt-0.5">
                              {opt.description}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Back / Navigation button */}
                  <div className="flex justify-start border-t border-dashed border-slate-300 pt-6 mt-6">
                    {currentStep > 0 && (
                      <button
                        onClick={() => setCurrentStep(currentStep - 1)}
                        className="flex items-center gap-1 font-comic font-bold text-sm bg-slate-100 hover:bg-slate-200 comic-border-sm px-3 py-1.5 transition-colors"
                      >
                        <ChevronLeft size={16} /> Back
                      </button>
                    )}
                  </div>

                </motion.div>
              ) : (
                // RESULT DISPLAY CARD
                <motion.div
                  key="result-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-white comic-border comic-shadow p-6 sm:p-8 rounded-3xl w-full max-w-2xl"
                >
                  
                  {/* Results Heading */}
                  <div className="flex items-center gap-2 mb-6 border-b-4 border-black pb-4">
                    <Sparkles className="text-comic-yellow fill-comic-yellow stroke-[3]" />
                    <h3 className="text-2xl sm:text-3xl font-comic font-black uppercase text-comic-dark">
                      Your Carbon Score Card!
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center mb-6">
                    
                    {/* Dial Gauge visualization (5 columns) */}
                    <div className="md:col-span-5 flex flex-col justify-center items-center">
                      <div className="relative w-40 h-28">
                        {/* Semi-circle SVG dial */}
                        <svg width="160" height="110" viewBox="0 0 100 60" className="w-full h-full">
                          {/* Low (Green) zone */}
                          <path d="M 10 50 A 40 40 0 0 1 35 15" fill="none" stroke="#22c55e" strokeWidth="12" strokeLinecap="square" />
                          {/* Medium (Yellow) zone */}
                          <path d="M 35 15 A 40 40 0 0 1 65 15" fill="none" stroke="#facc15" strokeWidth="12" strokeLinecap="square" />
                          {/* High (Red) zone */}
                          <path d="M 65 15 A 40 40 0 0 1 90 50" fill="none" stroke="#ef4444" strokeWidth="12" strokeLinecap="square" />
                          {/* Inner border */}
                          <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="#000000" strokeWidth="1.5" />
                          
                          {/* Dial Needle */}
                          <g transform="translate(50, 50)">
                            <line 
                              x1="0" y1="0" 
                              x2="0" y2="-42" 
                              stroke="#000000" 
                              strokeWidth="3.5" 
                              strokeLinecap="round"
                              style={{ 
                                transform: `rotate(${angle}deg)`, 
                                transition: 'transform 1.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                transformOrigin: '0 0'
                              }}
                            />
                            <circle cx="0" cy="0" r="6" fill="#000" />
                            <circle cx="0" cy="0" r="3.5" fill="#fff" />
                          </g>
                        </svg>

                        {/* Dial label indicators */}
                        <span className="absolute bottom-1 left-2 text-[10px] font-comic font-black text-comic-green">LOW</span>
                        <span className="absolute -top-1 left-1/2 transform -translate-x-1/2 text-[10px] font-comic font-black text-comic-yellow">MID</span>
                        <span className="absolute bottom-1 right-2 text-[10px] font-comic font-black text-comic-red">HIGH</span>
                      </div>
                      
                      <div className="mt-2 text-center">
                        <span className="text-[10px] text-slate-500 font-sans block">Estimate only, for awareness</span>
                      </div>
                    </div>

                    {/* Numeric breakdown & badge (7 columns) */}
                    <div className="md:col-span-7 space-y-4">
                      
                      <div className="bg-comic-cream comic-border-sm p-4 rounded-2xl flex items-center justify-between">
                        <div>
                          <span className="text-xs font-black uppercase text-slate-500 block">Total Footprint</span>
                          <div className="flex items-baseline gap-1.5">
                            <span className="text-4xl font-comic font-black text-comic-dark">
                              {totalFootprint.toFixed(1)}
                            </span>
                            <span className="font-comic font-black text-slate-700 text-sm">
                              tonnes/year
                            </span>
                          </div>
                        </div>

                        {/* Comparison box */}
                        <div className="border-l-2 border-slate-300 pl-4 text-left">
                          <span className="text-[10px] text-slate-500 font-black block">GLOBAL AVG</span>
                          <span className="text-lg font-comic font-black text-slate-700">4.8 tonnes</span>
                        </div>
                      </div>

                      {/* Badge status */}
                      <div className={`comic-border-sm px-4 py-2 rounded-xl text-center font-comic font-black text-sm uppercase ${ratingColor}`}>
                        {ratingText}
                      </div>

                    </div>

                  </div>

                  {/* ACTION TIPS BASED ON HIGHEST IMPACT */}
                  <div className="bg-yellow-50 comic-border-sm p-5 rounded-2xl mb-6 text-left relative overflow-hidden">
                    
                    <div className="absolute top-0 right-0 bg-comic-yellow text-comic-dark text-[10px] font-black uppercase px-2 py-0.5 border-b-2 border-l-2 border-black rounded-bl-lg">
                      Personalized Action Plan!
                    </div>

                    <h4 className="font-comic font-black text-base text-comic-dark mb-3 flex items-center gap-1.5">
                      <Lightbulb size={18} className="text-comic-orange fill-comic-orange" />
                      Tips for your highest area ({highestImpact.category}):
                    </h4>
                    
                    <ul className="space-y-2 text-sm text-slate-700">
                      {highestImpact.tips.map((tip, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="bg-comic-yellow text-comic-dark font-comic font-black text-xs h-5 w-5 flex items-center justify-center rounded-full border border-black flex-shrink-0">
                            {idx + 1}
                          </span>
                          <span className="font-medium">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Reset/Try Again */}
                  <div className="flex justify-end">
                    <button
                      onClick={resetCalculator}
                      className="flex items-center gap-2 font-comic font-black text-base bg-comic-orange text-white comic-border comic-shadow-sm px-5 py-2.5 hover:translate-y-[-2px] hover:shadow-comic active:translate-y-[1px] active:shadow-none transition-all duration-150"
                    >
                      <RefreshCw size={18} className="stroke-[3]" /> Calculate Again
                    </button>
                  </div>

                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>

    </section>
  );
};
