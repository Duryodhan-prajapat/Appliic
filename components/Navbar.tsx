import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const logoTextColor = 'text-slate-900';
  const navLinkColor = 'text-slate-600';
  const navActiveColor = 'text-primary-600';
  const buttonBg = 'bg-slate-900';
  const buttonTextColor = 'text-white';

  return (
    <>
      <nav className="fixed w-full z-[100] bg-white/80 backdrop-blur-xl border-b border-slate-100 py-3 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="flex items-center gap-2">
                {/* <img 
                  src="https://img.logoipsum.com/296.svg" 
                  alt="Appliic Logo" 
                  className="h-8 md:h-10 w-auto group-hover:scale-105 transition-transform" 
                /> */}
                <span className={`text-xl md:text-2xl font-black tracking-tighter transition-colors duration-300 ${logoTextColor}`}>
                  Appliic<span className="text-primary-600">.DS</span>
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-10">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`text-sm font-bold tracking-tight transition-all hover:text-primary-600 relative group ${isActive ? navActiveColor : navLinkColor
                      }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="underline"
                        className="absolute left-0 right-0 -bottom-1 h-0.5 rounded-full bg-primary-600"
                      />
                    )}
                  </Link>
                );
              })}
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${buttonBg} ${buttonTextColor} px-7 py-3 rounded-full font-black text-sm shadow-xl transition-all duration-300 hover:bg-slate-800`}
                >
                  Start a Project
                </motion.button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(true)}
                className={`${logoTextColor} p-2 transition-colors active:scale-90`}
                aria-label="Open menu"
              >
                <Menu size={28} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[1000] md:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
            />

            {/* Sidebar Content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 250 }}
              className="absolute top-0 right-0 h-[100dvh] w-[85%] max-w-[400px] bg-white shadow-[-20px_0_50px_rgba(0,0,0,0.2)] flex flex-col"
            >
              {/* Header - Fixed */}
              <div className="flex-shrink-0 flex justify-between items-center p-6 border-b border-slate-50">
                <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
                  {/* <img 
                    src="https://img.logoipsum.com/296.svg" 
                    alt="Appliic Logo" 
                    className="h-8 w-auto" 
                  /> */}
                  <span className="text-xl font-black tracking-tighter text-slate-900">
                    Appliic<span className="text-primary-600">.DS</span>
                  </span>
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-slate-400 hover:text-slate-900 transition-colors active:scale-90"
                  aria-label="Close menu"
                >
                  <X size={32} />
                </button>
              </div>

              {/* Navigation Links - Scrollable */}
              <div className="flex-grow overflow-y-auto px-6 py-6 sm:py-10">
                <div className="space-y-2 sm:space-y-4">
                  {navItems.map((item, idx) => {
                    const isActive = location.pathname === item.path;
                    return (
                      <motion.div
                        key={item.path}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + idx * 0.05 }}
                      >
                        <Link
                          to={item.path}
                          className={`block px-6 py-4 sm:py-5 text-xl sm:text-2xl font-black rounded-2xl sm:rounded-3xl transition-all ${isActive
                              ? 'bg-primary-50 text-primary-600 shadow-sm'
                              : 'text-slate-900 hover:bg-slate-50'
                            }`}
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* CTA Footer - Stays at bottom but fits screen */}
              <div className="flex-shrink-0 p-6 sm:p-8 border-t border-slate-50 bg-slate-50/50">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Link to="/contact" className="block">
                    <button className="w-full bg-primary-600 text-white px-6 py-4 sm:py-5 rounded-2xl font-black text-lg sm:text-xl shadow-xl shadow-primary-500/30 active:scale-95 transition-transform">
                      Start a Project
                    </button>
                  </Link>
                  <div className="mt-6 sm:mt-8 text-center">
                    <p className="text-slate-400 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] mb-1 sm:mb-2">
                      Get in touch
                    </p>
                    <a href="mailto:hello@appliicds.com" className="text-slate-900 font-bold text-sm sm:text-base hover:text-primary-600 transition-colors">
                      hello@appliicds.com
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;