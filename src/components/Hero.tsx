/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { ArrowUpRight, Clock, Star, Flame, MapPin, Sparkles } from 'lucide-react';
import { RESTAURANT_CONFIG } from '../data/restaurantData';

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  // Smooth scroll parallax transforms
  const yImage = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const yBadge = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  // Spring physics for smooth motion
  const smoothYImage = useSpring(yImage, { stiffness: 100, damping: 20 });
  const smoothYBadge = useSpring(yBadge, { stiffness: 100, damping: 20 });

  // Word-by-word reveal array
  const headlineWords1 = ['Fresh', 'Off', 'The', 'Flame.'];
  const headlineWords2 = ['Ghar', 'The', 'Cloud', 'Kitchen.'];

  return (
    <section
      ref={containerRef}
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden"
    >
      {/* Background radial warmth & floating subtle embers */}
      <div className="absolute top-10 right-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-orange-300/25 to-amber-200/20 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse duration-[8000ms]" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-gradient-to-br from-amber-200/25 to-orange-100/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <motion.div style={{ opacity: opacityHero }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Masked Word Reveals & Cinematic Typography */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Verified Location & Kitchen Kicker */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-2 text-xs font-semibold text-orange-900 tracking-wide uppercase mb-5 select-none"
            >
              <span className="flex items-center gap-1.5 bg-orange-100/90 text-orange-800 px-3 py-1 rounded-full border border-orange-200/60 shadow-2xs">
                <MapPin className="w-3.5 h-3.5 text-orange-600" />
                Kokapet, Hyderabad
              </span>
              <span className="text-stone-300">·</span>
              <span className="text-stone-600 font-medium normal-case">
                Pure Delivery & Takeaway Kitchen
              </span>
            </motion.div>

            {/* Masked Staggered Headline */}
            <div className="mb-6">
              {/* Line 1 */}
              <div className="flex flex-wrap gap-x-3 overflow-hidden">
                {headlineWords1.map((word, i) => (
                  <span key={i} className="inline-block overflow-hidden py-0.5">
                    <motion.span
                      initial={{ y: '110%', opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.75,
                        delay: 0.15 + i * 0.08,
                        ease: [0.16, 1, 0.3, 1]
                      }}
                      className="inline-block text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-stone-950 font-display leading-[1.1]"
                    >
                      {word}
                    </motion.span>
                  </span>
                ))}
              </div>

              {/* Line 2 with Gradient Accent */}
              <div className="flex flex-wrap gap-x-3 overflow-hidden mt-1">
                {headlineWords2.map((word, i) => (
                  <span key={i} className="inline-block overflow-hidden py-0.5">
                    <motion.span
                      initial={{ y: '110%', opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.75,
                        delay: 0.45 + i * 0.08,
                        ease: [0.16, 1, 0.3, 1]
                      }}
                      className="inline-block text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-display leading-[1.1] text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-amber-700"
                    >
                      {word}
                    </motion.span>
                  </span>
                ))}
              </div>
            </div>

            {/* Concise Verified Supporting Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg text-stone-700 max-w-xl leading-relaxed mb-8"
            >
              Authentic slow-simmered Hyderabadi biryanis, fiery Andhra starters, and aromatic curries. 
              Cooked fresh upon order at Golden Mile Colony, Kokapet and delivered piping hot across the IT corridor.
            </motion.p>

            {/* Primary & Secondary Action CTAs with Refined Hover Micro-Interactions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <a
                href="#menu"
                className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 active:scale-98 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <span>Explore Text Menu</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </a>

              <a
                href={RESTAURANT_CONFIG.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-stone-800 bg-[#F2EBDE]/90 hover:bg-[#E8DFC8] active:scale-98 rounded-xl border border-stone-300/60 shadow-2xs hover:shadow-xs transition-all duration-300"
              >
                <Sparkles className="w-4 h-4 text-orange-600" />
                <span>Quick WhatsApp Order</span>
              </a>
            </motion.div>

            {/* Verified Trust Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.05 }}
              className="pt-6 border-t border-[#E8DFC8]/70 grid grid-cols-3 gap-4 max-w-lg"
            >
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-stone-900 font-bold text-lg font-display">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                  <span className="tabular-nums">4.2 / 5</span>
                </div>
                <span className="text-xs text-stone-600 mt-0.5">
                  1,000+ Verified Ratings
                </span>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-stone-900 font-bold text-lg font-display">
                  <Flame className="w-4 h-4 text-orange-600" />
                  <span>100% Fresh</span>
                </div>
                <span className="text-xs text-stone-600 mt-0.5">
                  Fired To Order Only
                </span>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-stone-900 font-bold text-lg font-display">
                  <Clock className="w-4 h-4 text-stone-700" />
                  <span className="tabular-nums">12 – 11 PM</span>
                </div>
                <span className="text-xs text-stone-600 mt-0.5">
                  Daily Cloud Hours
                </span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Hero Visual Showcase with Smooth Parallax & Floating Badge */}
          <div className="lg:col-span-5 relative">
            <motion.div
              style={{ y: smoothYImage }}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative mx-auto max-w-md lg:max-w-none group"
            >
              {/* Outer decorative aura */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-orange-500/20 to-amber-300/30 rounded-3xl blur-xl -z-10 group-hover:scale-105 transition-transform duration-700" />

              {/* Main Gourmet Food Image Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/90 aspect-square sm:aspect-[4/3] lg:aspect-square bg-stone-100">
                <img
                  src="/assets/aistudio/Authentic_Biryani_Recipe__Spice_Up_Your_Dinner_Tonight_____04f62d62.jpeg"
                  alt="Authentic Dum Biryani from Ghar The Cloud Kitchen Hyderabad"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />

                {/* Subtle scrim overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/75 via-stone-950/20 to-transparent pointer-events-none" />

                {/* Over-image caption banner */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs uppercase tracking-wider text-amber-300 font-semibold mb-0.5">
                    Specialty of Ghar
                  </p>
                  <p className="text-base sm:text-lg font-bold font-display drop-shadow-sm">
                    Chicken Fried Piece & 65 Biryanis
                  </p>
                  <p className="text-xs text-stone-200">
                    Fragrant Long-Grain Basmati · Slow-Simmered Spices
                  </p>
                </div>
              </div>

              {/* Gentle Floating Cloud Kitchen Trust Badge */}
              <motion.div
                style={{ y: smoothYBadge }}
                animate={{
                  y: [0, -6, 0],
                  transition: {
                    duration: 3.5,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }
                }}
                className="absolute -bottom-6 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-stone-200/90 flex items-center gap-3.5 z-20"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-sm">
                  ⚡
                </div>
                <div>
                  <p className="text-xs font-bold text-stone-900 leading-tight">
                    Pure Delivery Model
                  </p>
                  <p className="text-[11px] text-stone-500 leading-tight mt-0.5">
                    Zero dine-in markup · Pure ingredient spend
                  </p>
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
