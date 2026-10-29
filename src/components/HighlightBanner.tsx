/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Flame, UtensilsCrossed } from 'lucide-react';
import { RESTAURANT_CONFIG } from '../data/restaurantData';

export default function HighlightBanner() {
  return (
    <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 text-white shadow-xl hover:shadow-2xl transition-shadow duration-500"
      >
        {/* Background Image with Warm Scrim */}
        <div className="absolute inset-0 mix-blend-overlay opacity-30">
          <img
            src="/src/assets/images/promo_cloud_kitchen_prep_1793257483606.jpg"
            alt="Chef wok preparation at Ghar The Cloud Kitchen"
            className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-1000"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative z-10 px-6 py-12 sm:px-12 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/20 text-white text-xs font-bold tracking-wider uppercase backdrop-blur-md mb-4 border border-white/20">
              <Flame className="w-3.5 h-3.5 text-amber-300" />
              {RESTAURANT_CONFIG.highlightBanner.badge}
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight leading-tight text-white mb-4">
              {RESTAURANT_CONFIG.highlightBanner.headline}
            </h2>

            <p className="text-white/95 text-sm sm:text-base max-w-2xl leading-relaxed mb-6 font-normal">
              {RESTAURANT_CONFIG.highlightBanner.copy}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-medium text-white/95 pt-2">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-200 shrink-0" />
                <span>Sanitized Commercial Facility</span>
              </div>
              <div className="flex items-center gap-2">
                <UtensilsCrossed className="w-4 h-4 text-amber-200 shrink-0" />
                <span>Small Batch Craft Cooking</span>
              </div>
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-amber-200 shrink-0" />
                <span>Sealed Thermal Packaging</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3.5 justify-center items-start lg:items-end">
            <a
              href="#menu"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-orange-600 font-bold text-sm shadow-md hover:bg-stone-50 active:scale-98 transition-all duration-300 group cursor-pointer"
            >
              <span>{RESTAURANT_CONFIG.highlightBanner.ctaText}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>

            <a
              href={RESTAURANT_CONFIG.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-orange-700/60 hover:bg-orange-700/80 text-white font-semibold text-sm border border-white/20 backdrop-blur-md transition-all duration-300 cursor-pointer"
            >
              <span>WhatsApp Direct Line</span>
            </a>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
