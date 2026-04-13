import { Link, useLocation } from 'react-router-dom';
import { Ship, Menu, X, Phone, Search } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'glass py-3 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-sea-600 rounded-full flex items-center justify-center text-white group-hover:bg-sea-700 transition-colors">
            <Ship size={24} />
          </div>
          <div className="flex flex-col">
            <span className={`font-serif text-xl font-bold leading-none ${isScrolled ? 'text-sea-950' : 'text-white'}`}>
              Blue Sea
            </span>
            <span className={`text-[10px] uppercase tracking-[0.2em] font-medium ${isScrolled ? 'text-sea-600' : 'text-sea-200'}`}>
              Tours & Travels
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-sea-500 ${
                location.pathname === link.path
                  ? 'text-sea-600'
                  : isScrolled
                  ? 'text-slate-600'
                  : 'text-white/90'
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="flex items-center gap-4 ml-4">
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className={`p-2 rounded-full transition-colors ${isScrolled ? 'text-slate-600 hover:bg-slate-100' : 'text-white/80 hover:bg-white/10'}`}
            >
              <Search size={20} />
            </button>
            <Link
              to="/contact"
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                isScrolled
                  ? 'bg-sea-600 text-white hover:bg-sea-700'
                  : 'bg-white text-sea-900 hover:bg-sea-50'
              }`}
            >
              Book Now
            </Link>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button 
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className={`p-2 rounded-full ${isScrolled ? 'text-slate-600' : 'text-white'}`}
          >
            <Search size={24} />
          </button>
          <button
            className={`p-2 rounded-lg ${isScrolled ? 'text-sea-950' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-slate-100 p-4"
          >
            <div className="max-w-3xl mx-auto relative">
              <input
                autoFocus
                type="text"
                placeholder="Search for cruises, destinations, or services..."
                className="w-full px-12 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:border-sea-500 transition-colors"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <button 
                onClick={() => setIsSearchOpen(false)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-slate-100 md:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-lg font-medium ${
                    location.pathname === link.path ? 'text-sea-600' : 'text-slate-600'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-2 bg-sea-600 text-white text-center py-3 rounded-xl font-bold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book a Cruise
              </Link>
              <div className="flex items-center justify-center gap-2 text-sea-600 font-medium py-2">
                <Phone size={18} />
                <span>099676 42578</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
