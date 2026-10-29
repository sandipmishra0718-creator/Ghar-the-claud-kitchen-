/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Menu as MenuIcon, X, Phone, MapPin, ArrowRight } from 'lucide-react';
import { RESTAURANT_CONFIG } from '../data/restaurantData';
import { useCart } from '../context/CartContext';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalCount, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 35) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Menu', href: '#menu' },
    { label: 'Signature Dishes', href: '#signature' },
    { label: 'Cloud Kitchen', href: '#story' },
    { label: 'Location & Hours', href: '#location' },
    { label: 'Reviews', href: '#reviews' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled
            ? 'bg-[#FAF7F2]/85 backdrop-blur-xl border-b border-[#E8DFC8]/60 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] py-3 sm:py-3.5'
            : 'bg-transparent border-b border-transparent shadow-none py-5 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            
            {/* Zone 1: Brand Wordmark / Floating Logo */}
            <motion.a
              href="#"
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group flex items-center gap-2.5 whitespace-nowrap shrink-0 text-decoration-none select-none"
            >
              <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-orange-600 to-amber-500 text-white flex items-center justify-center font-bold text-lg shadow-sm group-hover:scale-105 group-hover:shadow-md transition-all duration-300">
                G
              </span>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold tracking-tight text-stone-900 font-display leading-tight">
                  Ghar
                </span>
                <span className="text-[10px] tracking-wider uppercase font-semibold text-orange-600 -mt-0.5">
                  The Cloud Kitchen
                </span>
              </div>
            </motion.a>

            {/* Zone 2: Invisible Floating Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-stone-700">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="relative py-1 hover:text-orange-600 transition-colors whitespace-nowrap shrink-0 group"
                >
                  <span>{link.label}</span>
                  {/* Subtle hover underline micro-interaction */}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-600 rounded-full transition-all duration-300 group-hover:w-full" />
                </motion.a>
              ))}
            </nav>

            {/* Zone 3: Primary Actions & Cart Trigger */}
            <motion.div
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 shrink-0"
            >
              <a
                href={RESTAURANT_CONFIG.contact.phoneRaw ? `tel:${RESTAURANT_CONFIG.contact.phoneRaw}` : '#'}
                className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-stone-800 bg-[#F2EBDE]/80 hover:bg-[#E8DFC8] border border-stone-300/40 rounded-xl transition-all duration-300 whitespace-nowrap shrink-0 hover:shadow-xs"
                title="Call Ghar Cloud Kitchen"
              >
                <Phone className="w-3.5 h-3.5 text-orange-600" />
                <span>+91 91008 63933</span>
              </a>

              <button
                onClick={() => setIsCartOpen(true)}
                className="relative flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 active:scale-95 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md whitespace-nowrap shrink-0 cursor-pointer"
                aria-label={`View cart with ${totalCount} items`}
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Cart</span>
                {totalCount > 0 && (
                  <span className="w-5 h-5 rounded-full bg-amber-300 text-stone-900 text-xs font-bold flex items-center justify-center animate-pulse">
                    {totalCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl text-stone-800 hover:bg-stone-200/50 transition-colors cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <MenuIcon className="w-6 h-6" />
                )}
              </button>
            </motion.div>

          </div>
        </div>

        {/* Mobile Navigation Glass Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden bg-[#FAF7F2]/98 backdrop-blur-2xl border-b border-[#E8DFC8] px-6 py-6 shadow-xl overflow-hidden"
            >
              <nav className="flex flex-col gap-4 text-base font-medium text-stone-800">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * idx, duration: 0.3 }}
                    className="flex items-center justify-between py-1.5 hover:text-orange-600 transition-colors border-b border-stone-200/40"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 text-stone-400" />
                  </motion.a>
                ))}

                <div className="pt-3 flex flex-col gap-2.5">
                  <a
                    href={`tel:${RESTAURANT_CONFIG.contact.phoneRaw}`}
                    className="flex items-center gap-2.5 text-sm font-semibold text-stone-800 py-2 px-3 rounded-lg bg-stone-100 hover:bg-stone-200 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-orange-600" />
                    <span>Call {RESTAURANT_CONFIG.contact.phone}</span>
                  </a>
                  <a
                    href={RESTAURANT_CONFIG.contact.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-sm font-semibold text-stone-800 py-2 px-3 rounded-lg bg-stone-100 hover:bg-stone-200 transition-colors"
                  >
                    <MapPin className="w-4 h-4 text-orange-600" />
                    <span>Open Google Maps Listing</span>
                  </a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
