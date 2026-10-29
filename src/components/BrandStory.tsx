/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ChefHat, CheckCircle2, MapPin, Sparkles } from 'lucide-react';
import { RESTAURANT_CONFIG } from '../data/restaurantData';

export default function BrandStory() {
  const values = [
    {
      icon: ChefHat,
      color: 'bg-orange-100 text-orange-700',
      title: 'Zero Pre-Made Food',
      desc: 'Every order is fired fresh on woks and handis after your ticket is generated.'
    },
    {
      icon: CheckCircle2,
      color: 'bg-emerald-100 text-emerald-700',
      title: 'Sanitized Environment',
      desc: 'Strict food safety guidelines, temperature-controlled storage, and food-grade packaging.'
    },
    {
      icon: Sparkles,
      color: 'bg-amber-100 text-amber-700',
      title: 'Authentic Andhra & Hyderabadi',
      desc: 'Traditional recipes like Gongura Chicken Curry and Chicken Fried Piece Biryani.'
    },
    {
      icon: MapPin,
      color: 'bg-blue-100 text-blue-700',
      title: 'Kokapet & Gachibowli Hub',
      desc: 'Strategically situated beside Tea Cube on Golden Mile Road for rapid corridor reach.'
    }
  ];

  return (
    <section id="story" className="py-24 sm:py-32 bg-[#F4EFE6]/70 border-t border-[#E8DFC8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Editorial Narrative */}
          <div className="lg:col-span-7">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold tracking-widest uppercase text-orange-600 block mb-2"
            >
              Our Culinary Philosophy
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 font-display tracking-tight leading-tight mb-6"
            >
              A Dedicated Cloud Kitchen Built on Authenticity & Flavor.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed"
            >
              <p>
                <strong>Ghar The Cloud Kitchen</strong> was established at Golden Mile Colony, Kokapet with a single uncompromising mission: to bring homestyle Hyderabadi warmth and royal culinary traditions straight to your doorstep without restaurant dining markups.
              </p>
              <p>
                By operating purely as a delivery and takeaway kitchen, we channel our energy and resources where they matter most: premium aged basmati rice, locally sourced whole spices, authentic clarified ghee, and fresh meats cooked in small, controlled batches.
              </p>
              <p>
                Whether it is a fast-paced lunch in the Financial District or a weekend family dinner in Kokapet, each dish is packaged hot in spill-proof containers right from our stove to your hands.
              </p>
            </motion.div>

            {/* Core Values / Commitments with Staggered Entrance */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-8 border-t border-[#DED4C0]">
              {values.map((val, idx) => {
                const Icon = val.icon;
                return (
                  <motion.div
                    key={val.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + idx * 0.1, duration: 0.5 }}
                    className="flex items-start gap-3 p-3 rounded-2xl hover:bg-white/60 transition-colors"
                  >
                    <div className={`w-9 h-9 rounded-xl ${val.color} flex items-center justify-center shrink-0 mt-0.5 shadow-2xs`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-stone-900">{val.title}</h4>
                      <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">
                        {val.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>

          {/* Right Column: Key Metrics & Service Corridor Box */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-3xl p-8 sm:p-10 border border-stone-200/90 shadow-lg hover:shadow-xl transition-shadow duration-500"
            >
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600 block mb-2">
                Operational Overview
              </span>
              <h3 className="text-2xl font-bold text-stone-900 font-display mb-6">
                Fast & Reliable Cloud Service
              </h3>

              <div className="space-y-6 divide-y divide-stone-100">
                <div className="pt-2">
                  <span className="text-xs text-stone-400 block mb-1">Kitchen Operational Timings</span>
                  <p className="text-base font-bold text-stone-900 font-display">
                    {RESTAURANT_CONFIG.contact.operatingHours.timing}
                  </p>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Open seven days a week (Monday – Sunday)
                  </p>
                </div>

                <div className="pt-4">
                  <span className="text-xs text-stone-400 block mb-1">Delivery Footprint</span>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {RESTAURANT_CONFIG.contact.serviceAreas.map((area) => (
                      <span
                        key={area}
                        className="px-2.5 py-1 text-xs font-semibold bg-stone-100 text-stone-800 rounded-lg hover:bg-orange-50 hover:text-orange-700 transition-colors"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <span className="text-xs text-stone-400 block mb-1">Direct Kitchen Contact</span>
                  <a
                    href={`tel:${RESTAURANT_CONFIG.contact.phoneRaw}`}
                    className="text-base font-bold text-orange-600 hover:underline block"
                  >
                    {RESTAURANT_CONFIG.contact.phone}
                  </a>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Call directly for order status, party quantities, or pickup
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-stone-100">
                <a
                  href={RESTAURANT_CONFIG.contact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold transition-all shadow-xs cursor-pointer hover:shadow-md"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Verify on Google Maps</span>
                </a>
              </div>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
