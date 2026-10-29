/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Star, ExternalLink, Quote } from 'lucide-react';
import { REVIEWS, RESTAURANT_CONFIG } from '../data/restaurantData';

export default function CustomerReviews() {
  return (
    <section id="reviews" className="py-24 sm:py-32 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Motion Reveal */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold tracking-widest uppercase text-orange-600 block mb-2"
            >
              Verified Feedback
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 font-display tracking-tight"
            >
              What Customers Are Saying
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-stone-600 text-sm sm:text-base mt-2"
            >
              Real dining experiences across Google Maps, Swiggy, and local aggregators in Kokapet & Hyderabad.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-4 shrink-0 bg-white p-3.5 sm:p-4 rounded-2xl border border-stone-200/80 shadow-xs hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
              <span className="text-xl font-black text-stone-900 font-display tabular-nums">4.2</span>
              <span className="text-xs text-stone-500">/ 5.0</span>
            </div>
            <div className="h-8 w-px bg-stone-200" />
            <a
              href={RESTAURANT_CONFIG.contact.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 hover:text-orange-700 hover:underline cursor-pointer"
            >
              <span>View Google Maps Reviews</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        </div>

        {/* 3 Review Cards with Staggered Entrance and Micro-Lift */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {REVIEWS.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-3xl p-7 sm:p-8 border border-stone-200/90 shadow-xs flex flex-col justify-between hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  {/* Star Rating */}
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(review.rating)
                            ? 'text-amber-500 fill-amber-500'
                            : 'text-stone-200'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Source Tag */}
                  <span className="text-[11px] font-semibold text-stone-500 bg-stone-100 px-2.5 py-0.5 rounded-md">
                    {review.source}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-orange-200 mb-2 group-hover:text-orange-400 transition-colors duration-300" />

                <p className="text-stone-700 text-sm leading-relaxed mb-6 italic">
                  "{review.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-stone-900">{review.author}</h4>
                  <p className="text-[11px] text-stone-500">{review.location}</p>
                </div>
                <span className="text-[11px] text-emerald-700 font-medium bg-emerald-50 px-2.5 py-0.5 rounded-md">
                  {review.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Aggregate Info Footer */}
        <div className="mt-12 text-center text-xs text-stone-500">
          Source: Verified reviews from public aggregator listings & Google Maps business listing.
        </div>

      </div>
    </section>
  );
}
