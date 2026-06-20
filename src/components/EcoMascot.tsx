import React from 'react';

interface EcoMascotProps {
  pose: 'wave' | 'point' | 'thumbsup' | 'calculator' | 'excited';
  className?: string;
  size?: number;
}

export const EcoMascot: React.FC<EcoMascotProps> = ({ pose, className = '', size = 200 }) => {
  // Common parts: Head, hair, facial features, body/hoodie, and leaf badge
  // We customize the arms and accessories based on the pose.
  
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none filter drop-shadow-[4px_4px_0px_rgba(0,0,0,0.15)] ${className}`}
    >
      {/* SHADOW FOR ECO */}
      <ellipse cx="100" cy="185" rx="60" ry="10" fill="rgba(0, 0, 0, 0.15)" />

      {/* HOODIE BACK / HOOD */}
      <path
        d="M60 130 C60 75, 140 75, 140 130 Z"
        fill="#22c55e"
        stroke="#000000"
        strokeWidth="4"
        strokeLinejoin="round"
      />

      {/* HAIR BACK */}
      <path
        d="M65 90 C50 70, 70 50, 90 55 C110 50, 130 55, 140 75 C145 85, 135 95, 130 95 Z"
        fill="#7c2d12"
        stroke="#000000"
        strokeWidth="4"
        strokeLinejoin="round"
      />

      {/* HEAD / FACE */}
      <path
        d="M70 95 C70 75, 130 75, 130 95 C130 115, 125 125, 100 128 C75 125, 70 115, 70 95 Z"
        fill="#fed7aa"
        stroke="#000000"
        strokeWidth="4"
        strokeLinejoin="round"
      />

      {/* HAIR FRONT / BANGS */}
      <path
        d="M68 85 Q80 70 90 85 Q100 68 110 82 Q120 70 132 85 Q135 75 130 65 C120 50, 80 50, 68 70 Z"
        fill="#9a3412"
        stroke="#000000"
        strokeWidth="3"
        strokeLinejoin="round"
      />

      {/* EYES */}
      <circle cx="88" cy="92" r="6" fill="#000000" />
      <circle cx="86" cy="90" r="2" fill="#ffffff" />
      <circle cx="112" cy="92" r="6" fill="#000000" />
      <circle cx="110" cy="90" r="2" fill="#ffffff" />

      {/* BLUSH CHEEKS */}
      <ellipse cx="78" cy="100" rx="6" ry="4" fill="#f43f5e" fillOpacity="0.4" />
      <ellipse cx="122" cy="100" rx="6" ry="4" fill="#f43f5e" fillOpacity="0.4" />

      {/* NOSE */}
      <path
        d="M97 97 Q100 101 103 97"
        stroke="#000000"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* MOUTH (Changes slightly depending on pose, but stays happy/smiling) */}
      {pose === 'excited' ? (
        // Open wide laughing mouth
        <path
          d="M90 106 Q100 120 110 106 Z"
          fill="#be123c"
          stroke="#000000"
          strokeWidth="3"
          strokeLinejoin="round"
        />
      ) : pose === 'calculator' ? (
        // Thoughtful / concentrated smile
        <path
          d="M92 108 Q100 112 108 108"
          stroke="#000000"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
      ) : (
        // Open happy smile
        <path
          d="M90 106 Q100 116 110 106"
          stroke="#000000"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="#ffffff"
        />
      )}

      {/* HOODIE FRONT & DRAWSTRINGS */}
      <path
        d="M75 125 C75 125, 100 135, 125 125 C120 155, 80 155, 75 125 Z"
        fill="#16a34a"
        stroke="#000000"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      
      {/* DRAWSTRINGS */}
      <path d="M94 132 L91 144" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
      <path d="M106 132 L109 144" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
      
      {/* MAIN BODY HOODIE */}
      <path
        d="M62 135 C52 145, 55 185, 55 185 L145 185 C145 185, 148 145, 138 135 Z"
        fill="#22c55e"
        stroke="#000000"
        strokeWidth="4"
        strokeLinejoin="round"
      />

      {/* LEAF BADGE */}
      <g transform="translate(90, 148)">
        {/* White circle backing */}
        <circle cx="10" cy="10" r="9" fill="#ffffff" stroke="#000000" strokeWidth="2.5" />
        {/* Green leaf shape */}
        <path
          d="M10 4 C14 8, 14 14, 10 16 C6 14, 6 8, 10 4 Z"
          fill="#16a34a"
          stroke="#000000"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </g>

      {/* POSE-SPECIFIC ARMS AND ACCESSORIES */}

      {pose === 'wave' && (
        <>
          {/* Left hand in pocket / resting */}
          <path
            d="M58 142 C48 146, 50 165, 54 170"
            stroke="#000000"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />
          {/* Right Arm waving */}
          <path
            d="M140 142 C155 130, 168 110, 165 95"
            stroke="#000000"
            strokeWidth="12"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M140 142 C155 130, 168 110, 165 95"
            stroke="#22c55e"
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
          />
          {/* Right Hand */}
          <circle cx="166" cy="91" r="10" fill="#fed7aa" stroke="#000000" strokeWidth="3" />
          {/* Wave action lines */}
          <path d="M178 82 Q183 87 178 92" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M182 85 Q186 89 182 93" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
        </>
      )}

      {pose === 'point' && (
        <>
          {/* Left Arm on hip */}
          <path
            d="M60 142 Q40 152 50 168"
            stroke="#000000"
            strokeWidth="12"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M60 142 Q40 152 50 168"
            stroke="#22c55e"
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
          />
          
          {/* Right Arm pointing forward/right */}
          <path
            d="M140 142 Q160 140 174 135"
            stroke="#000000"
            strokeWidth="12"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M140 142 Q160 140 174 135"
            stroke="#22c55e"
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
          />
          {/* Pointing Hand */}
          <g transform="translate(170, 126)">
            {/* Hand base */}
            <circle cx="10" cy="8" r="8" fill="#fed7aa" stroke="#000000" strokeWidth="3" />
            {/* Extended finger */}
            <path d="M12 5 L24 3" stroke="#000000" strokeWidth="4.5" strokeLinecap="round" />
            <path d="M12 5 L24 3" stroke="#fed7aa" strokeWidth="2" strokeLinecap="round" />
          </g>
        </>
      )}

      {pose === 'thumbsup' && (
        <>
          {/* Left Arm holding card or leaning */}
          <path
            d="M60 145 C45 150, 35 160, 30 175"
            stroke="#000000"
            strokeWidth="12"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M60 145 C45 150, 35 160, 30 175"
            stroke="#22c55e"
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
          />
          {/* Left Hand resting */}
          <circle cx="28" cy="177" r="8" fill="#fed7aa" stroke="#000000" strokeWidth="3" />

          {/* Right Arm raised with Thumbs up */}
          <path
            d="M140 145 Q160 145 170 130"
            stroke="#000000"
            strokeWidth="12"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M140 145 Q160 145 170 130"
            stroke="#22c55e"
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
          />
          {/* Thumbs up hand */}
          <g transform="translate(164, 114)">
            {/* Fist */}
            <circle cx="10" cy="14" r="9" fill="#fed7aa" stroke="#000000" strokeWidth="3" />
            {/* Thumb */}
            <path d="M10 8 C10 0, 16 0, 16 8 Z" fill="#fed7aa" stroke="#000000" strokeWidth="3" strokeLinejoin="round" />
          </g>
        </>
      )}

      {pose === 'calculator' && (
        <>
          {/* Both arms holding calculator in front */}
          <path
            d="M58 148 C65 155, 80 162, 85 162"
            stroke="#000000"
            strokeWidth="12"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M58 148 C65 155, 80 162, 85 162"
            stroke="#22c55e"
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
          />
          
          <path
            d="M140 148 C132 155, 120 162, 115 162"
            stroke="#000000"
            strokeWidth="12"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M140 148 C132 155, 120 162, 115 162"
            stroke="#22c55e"
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
          />

          {/* Calculator Tool */}
          <g transform="translate(80, 150)">
            {/* Calculator Body */}
            <rect width="40" height="34" rx="4" fill="#475569" stroke="#000000" strokeWidth="3" />
            {/* Screen */}
            <rect x="5" y="4" width="30" height="8" rx="1" fill="#86efac" stroke="#000000" strokeWidth="2" />
            {/* Screen number lines */}
            <path d="M8 8 H28" stroke="#166534" strokeWidth="2" strokeLinecap="round" />
            {/* Keys */}
            <circle cx="10" cy="18" r="2" fill="#f87171" />
            <circle cx="20" cy="18" r="2" fill="#e2e8f0" />
            <circle cx="30" cy="18" r="2" fill="#e2e8f0" />
            <circle cx="10" cy="26" r="2" fill="#e2e8f0" />
            <circle cx="20" cy="26" r="2" fill="#e2e8f0" />
            <circle cx="30" cy="26" r="2" fill="#38bdf8" />
          </g>

          {/* Hands holding the calculator */}
          <circle cx="78" cy="162" r="7" fill="#fed7aa" stroke="#000000" strokeWidth="2.5" />
          <circle cx="122" cy="162" r="7" fill="#fed7aa" stroke="#000000" strokeWidth="2.5" />
        </>
      )}

      {pose === 'excited' && (
        <>
          {/* Left Arm raised excited */}
          <path
            d="M60 140 C48 120, 38 95, 42 85"
            stroke="#000000"
            strokeWidth="12"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M60 140 C48 120, 38 95, 42 85"
            stroke="#22c55e"
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="41" cy="81" r="9" fill="#fed7aa" stroke="#000000" strokeWidth="3" />

          {/* Right Arm raised holding lightbulb */}
          <path
            d="M140 140 C152 120, 162 95, 158 85"
            stroke="#000000"
            strokeWidth="12"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M140 140 C152 120, 162 95, 158 85"
            stroke="#22c55e"
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="159" cy="81" r="9" fill="#fed7aa" stroke="#000000" strokeWidth="3" />

          {/* LIGHTBULB ACCESSORY */}
          <g transform="translate(156, 32)">
            {/* Glow lines */}
            <path d="M5 -5 L-2 -10" stroke="#facc15" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M20 -8 L20 -15" stroke="#facc15" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M35 -5 L42 -10" stroke="#facc15" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M-5 12 L-12 10" stroke="#facc15" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M45 12 L52 10" stroke="#facc15" strokeWidth="2.5" strokeLinecap="round" />

            {/* Bulb base (metallic) */}
            <rect x="15" y="28" width="10" height="8" rx="1" fill="#94a3b8" stroke="#000000" strokeWidth="2.5" />
            <path d="M17 33 H23" stroke="#475569" strokeWidth="2" />
            
            {/* Bulb Glass */}
            <path
              d="M12 28 C6 24, 6 10, 20 10 C34 10, 34 24, 28 28 Z"
              fill="#facc15"
              stroke="#000000"
              strokeWidth="3"
              strokeLinejoin="round"
            />
            {/* Filament */}
            <path d="M17 22 Q20 16 23 22" stroke="#000000" strokeWidth="2" fill="none" />
          </g>
        </>
      )}
    </svg>
  );
};
