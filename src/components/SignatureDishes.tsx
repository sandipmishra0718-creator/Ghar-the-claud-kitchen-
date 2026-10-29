/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Check, ArrowRight, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { SIGNATURE_DISHES } from '../data/restaurantData';
import { useCart } from '../context/CartContext';

export default function SignatureDishes() {
  const { addToCart, items } = useCart();
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % SIGNATURE_DISHES.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + SIGNATURE_DISHES.length) % SIGNATURE_DISHES.length);
  };

  return (
    <section id="signature" className="py-20 sm:py-28 bg-[#F5EFE4]/70 border-y border-[#E8DFC8]/60 relative overflow-hidden">
      {/* Decorative ambient backdrop */}
      <div className="absolute top-1/2 -left-20 w-72 h-72 bg-orange-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-amber-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Masked Text Animation */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-orange-600 mb-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Culinary Highlights</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 font-display tracking-tight"
            >
              Signature Kitchen Creations
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-stone-600 text-sm sm:text-base mt-2 max-w-xl"
            >
              Our most celebrated preparations, slow-cooked and spiced to authentic Hyderabadi standards.
            </motion.p>
          </div>

          <div className="flex items-center gap-4">
            {/* Slider Controls for Touch & Desktop */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-xl bg-white border border-stone-200/80 text-stone-700 hover:text-orange-600 hover:border-orange-300 shadow-2xs hover:shadow-xs flex items-center justify-center transition-all cursor-pointer active:scale-95"
                aria-label="Previous signature dish"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-xl bg-white border border-stone-200/80 text-stone-700 hover:text-orange-600 hover:border-orange-300 shadow-2xs hover:shadow-xs flex items-center justify-center transition-all cursor-pointer active:scale-95"
                aria-label="Next signature dish"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <a
              href="#menu"
              className="hidden md:inline-flex items-center gap-1.5 text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors group shrink-0"
            >
              <span>Explore All (Text-First)</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* 3-Column Card Grid on Large Screens / Interactive Carousel on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SIGNATURE_DISHES.map((dish, index) => {
            const inCart = items.find((i) => i.id === dish.id);
            const isFeatured = index === activeSlide;

            return (
              <motion.div
                key={dish.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className={`bg-white rounded-3xl overflow-hidden border transition-all duration-500 flex flex-col group ${
                  isFeatured
                    ? 'border-orange-300/80 shadow-xl ring-2 ring-orange-400/20'
                    : 'border-stone-200/80 shadow-xs hover:shadow-lg hover:-translate-y-1.5'
                }`}
              >
                {/* Food Image with Smooth Scale Zoom Reveal */}
                <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />

                  {/* Gentle gradient scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent pointer-events-none" />

                  {/* Dietary Badge */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-lg shadow-sm flex items-center gap-1.5 text-xs font-semibold">
                    <span
                      className={`w-2.5 h-2.5 rounded-full ${
                        dish.isVeg ? 'bg-emerald-600' : 'bg-rose-600'
                      }`}
                    />
                    <span className="text-stone-800">{dish.isVeg ? 'Pure Veg' : 'Non-Veg'}</span>
                  </div>

                  {/* Highlight pill */}
                  <div className="absolute top-4 right-4 bg-stone-900/85 backdrop-blur-md text-amber-300 text-xs font-semibold px-3 py-1 rounded-lg border border-white/10 shadow-xs">
                    {dish.highlight}
                  </div>

                  {/* Portion tag */}
                  <div className="absolute bottom-3 left-4 text-white text-xs font-medium">
                    {dish.serves}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-stone-500 mb-1.5">
                      <span className="font-semibold text-orange-700">{dish.category}</span>
                      <span>Verified Item</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-stone-900 font-display mb-2 group-hover:text-orange-600 transition-colors">
                      {dish.name}
                    </h3>

                    <p className="text-stone-600 text-xs sm:text-sm line-clamp-3 mb-5 leading-relaxed">
                      {dish.description}
                    </p>
                  </div>

                  {/* Price & Action */}
                  <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] text-stone-400 block font-medium">Price</span>
                      <span className="text-xl font-extrabold text-stone-950 font-mono tabular-nums">
                        ₹{dish.price}
                      </span>
                    </div>

                    <button
                      onClick={() => addToCart(dish)}
                      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer active:scale-95 ${
                        inCart
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-300 shadow-2xs'
                          : 'bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white shadow-sm hover:shadow-md'
                      }`}
                    >
                      {inCart ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Added ({inCart.quantity})</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-4 h-4" />
                          <span>Add to Order</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Carousel Indicators */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {SIGNATURE_DISHES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                activeSlide === idx ? 'w-8 bg-orange-600' : 'w-2 bg-stone-300 hover:bg-stone-400'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
