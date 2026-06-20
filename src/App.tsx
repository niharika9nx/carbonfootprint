import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Causes } from './components/Causes';
import { WorldMap } from './components/WorldMap';
import { Calculator } from './components/Calculator';
import { FunFacts } from './components/FunFacts';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-comic-cream text-comic-dark font-sans relative">
      {/* Dynamic Comic Border around the entire screen (large screens) */}
      <div className="hidden xl:block fixed inset-0 border-[8px] border-black pointer-events-none z-50"></div>

      {/* Floating Navbar */}
      <Navbar />

      {/* Main Sections */}
      <main className="max-w-7xl mx-auto">
        <Hero />
        <Causes />
        <WorldMap />
        <Calculator />
        <FunFacts />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
