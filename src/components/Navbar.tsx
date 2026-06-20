import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
}

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems: NavItem[] = [
    { label: 'Home', href: '#hero' },
    { label: 'Causes', href: '#causes' },
    { label: 'World Map', href: '#map' },
    { label: 'Calculator', href: '#calculator' },
    { label: 'Fun Facts', href: '#facts' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      
      for (const item of navItems) {
        const el = document.querySelector(item.href);
        if (el) {
          const top = (el as HTMLElement).offsetTop;
          const height = (el as HTMLElement).offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.href.replace('#', ''));
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      const top = (el as HTMLElement).offsetTop - 80;
      window.scrollTo({
        top,
        behavior: 'smooth',
      });
      setActiveSection(href.replace('#', ''));
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-4 left-4 right-4 z-50 max-w-6xl mx-auto">
      <div className="bg-white comic-border comic-shadow px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <a 
          href="#hero" 
          onClick={(e) => handleClick(e, '#hero')}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <span className="text-2xl font-comic font-black uppercase tracking-wider bg-comic-yellow px-3 py-1 comic-border-sm comic-shadow-sm group-hover:scale-105 transition-transform duration-200">
            Eco Footprint 🌍
          </span>
        </a>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={`relative font-comic font-bold text-lg px-3 py-1.5 transition-all duration-200 border-2 ${
                  isActive 
                    ? 'bg-comic-orange text-white border-black translate-y-[-2px] shadow-[2px_2px_0px_0px_#000]'
                    : 'border-transparent hover:border-black hover:bg-comic-yellow hover:translate-y-[-2px] hover:shadow-[2px_2px_0px_0px_#000]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
          <a
            href="#calculator"
            onClick={(e) => handleClick(e, '#calculator')}
            className="ml-4 font-comic font-black text-lg bg-comic-green text-white comic-border-sm comic-shadow-sm px-4 py-2 hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_#000] active:translate-y-[2px] active:shadow-[1px_1px_0px_0px_#000] transition-all duration-200"
          >
            Calculate Now! ⚡
          </a>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 comic-border-sm bg-comic-yellow comic-shadow-sm hover:translate-y-[-2px] active:translate-y-[2px] transition-all duration-200"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} className="stroke-[3]" /> : <Menu size={24} className="stroke-[3]" />}
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {isOpen && (
        <div className="md:hidden mt-2 bg-white comic-border comic-shadow p-4 flex flex-col gap-3 animate-wiggle duration-300">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={`font-comic font-bold text-lg px-4 py-2.5 comic-border-sm transition-all duration-100 ${
                  isActive 
                    ? 'bg-comic-orange text-white comic-shadow-sm'
                    : 'bg-comic-cream hover:bg-comic-yellow text-comic-dark'
                }`}
              >
                {item.label}
              </a>
            );
          })}
          <a
            href="#calculator"
            onClick={(e) => handleClick(e, '#calculator')}
            className="font-comic font-black text-lg text-center bg-comic-green text-white comic-border-sm comic-shadow-sm px-4 py-3 hover:translate-y-[-2px] transition-all duration-200"
          >
            Calculate Now! ⚡
          </a>
        </div>
      )}
    </nav>
  );
};
