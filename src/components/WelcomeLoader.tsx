/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles } from 'lucide-react';

interface WelcomeLoaderProps {
  onComplete?: () => void;
}

export default function WelcomeLoader({ onComplete }: WelcomeLoaderProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    // Check session storage to show once per session
    const hasSeenIntro = sessionStorage.getItem('ghar_intro_seen');
    if (hasSeenIntro || prefersReducedMotion) {
      setIsVisible(false);
      onComplete?.();
      return;
    }

    // Progress bar animation
    const startTime = Date.now();
    const duration = 1400; // 1.4s duration

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const current = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(current);

      if (elapsed >= duration) {
        clearInterval(timer);
        setTimeout(() => {
          sessionStorage.setItem('ghar_intro_seen', 'true');
          setIsVisible(false);
          onComplete?.();
        }, 200);
      }
    }, 25);

    return () => clearInterval(timer);
  }, [onComplete]);

  const handleSkip = () => {
    sessionStorage.setItem('ghar_intro_seen', 'true');
    setIsVisible(false);
    onComplete?.();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="welcome-loader"
          initial={{ opacity: 1 }}
          exit={{
            y: '-100%',
            transition: {
              duration: 0.85,
              ease: [0.76, 0, 0.24, 1]
            }
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#12100E] text-stone-100 overflow-hidden select-none"
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-orange-600/15 via-amber-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

          {/* Luxury Monogram & Brand Typography */}
          <div className="relative z-10 flex flex-col items-center text-center px-6">
            
            {/* Animated Logo Crest */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, filter: 'blur(10px)' }}
              animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative mb-6"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 p-[1px] shadow-2xl shadow-orange-900/40">
                <div className="w-full h-full bg-[#1A1614] rounded-2xl flex items-center justify-center border border-white/10">
                  <span className="text-3xl sm:text-4xl font-black font-display text-transparent bg-clip-text bg-gradient-to-tr from-amber-200 via-orange-400 to-amber-100">
                    G
                  </span>
                </div>
              </div>

              {/* Decorative Subtle Orbit Sparkle */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center text-amber-300"
              >
                <Sparkles className="w-3.5 h-3.5" />
              </motion.div>
            </motion.div>

            {/* Staggered Brand Typography */}
            <div className="overflow-hidden mb-2">
              <motion.h1
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight font-display text-white"
              >
                GHAR
              </motion.h1>
            </div>

            <div className="overflow-hidden mb-8">
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-orange-400 uppercase"
              >
                The Cloud Kitchen · Kokapet
              </motion.p>
            </div>

            {/* Minimal High-End Progress Indicator */}
            <div className="w-48 sm:w-64 h-[2px] bg-stone-800 rounded-full overflow-hidden relative mb-3">
              <motion.div
                className="h-full bg-gradient-to-r from-orange-500 via-amber-400 to-amber-200 rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>

            {/* Numeric Progress with Tabular Font */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.3 }}
              className="text-[11px] font-mono tracking-widest text-stone-400 tabular-nums"
            >
              {progress}%
            </motion.span>
          </div>

          {/* Quiet Skip Affordance */}
          <button
            onClick={handleSkip}
            className="absolute bottom-8 right-8 text-xs text-stone-500 hover:text-stone-300 tracking-wider transition-colors uppercase font-medium cursor-pointer px-3 py-1.5 rounded-lg border border-stone-800/60 hover:border-stone-700 bg-stone-900/40"
          >
            Skip Intro →
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
