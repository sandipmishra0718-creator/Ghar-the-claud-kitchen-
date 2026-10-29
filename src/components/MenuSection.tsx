/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Plus, Minus, Sparkles, Filter } from 'lucide-react';
import { MENU_ITEMS, CATEGORIES, MenuItem, RESTAURANT_CONFIG } from '../data/restaurantData';
import { useCart } from '../context/CartContext';

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState<'all' | 'veg' | 'non-veg'>('all');
  const { addToCart, updateQuantity, items: cartItems } = useCart();

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category match
      if (activeCategory !== 'all' && item.category !== activeCategory) {
        return false;
      }
      // Dietary filter match
      if (dietaryFilter === 'veg' && !item.isVeg) return false;
      if (dietaryFilter === 'non-veg' && item.isVeg) return false;

      // Search match
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const nameMatch = item.name.toLowerCase().includes(query);
        const descMatch = item.description.toLowerCase().includes(query);
        return nameMatch || descMatch;
      }

      return true;
    });
  }, [activeCategory, dietaryFilter, searchQuery]);

  return (
    <section id="menu" className="py-24 sm:py-32 bg-[#FAF7F2] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Staggered Entrance (Text-Only Editorial Standard) */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-widest uppercase text-orange-600 block mb-2"
          >
            Editorial Dining Catalog · Zero Images
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 font-display tracking-tight"
          >
            The Official Menu
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-stone-600 text-sm sm:text-base mt-3 leading-relaxed"
          >
            Prepared to order in our Kokapet cloud kitchen. Authentic regional recipes with uncompromised whole spices and verified pricing.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-4 inline-flex items-center gap-2 text-xs text-stone-500 bg-stone-100/90 px-3.5 py-1.5 rounded-full border border-stone-200/60 shadow-2xs"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
            <span>Prices & Items Verified from Official Google Maps & Aggregator Listings</span>
          </motion.div>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white rounded-3xl p-5 sm:p-7 shadow-sm border border-stone-200/90 mb-10">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            
            {/* Search Input */}
            <div className="relative flex-grow max-w-md">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search dishes (e.g., Biryani, Paneer, 65, Roti)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-stone-50/80 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-stone-800 placeholder-stone-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-600 cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Dietary Filter Segmented Control */}
            <div className="flex items-center gap-1 p-1 bg-stone-100 rounded-xl self-start md:self-auto border border-stone-200/60">
              <button
                onClick={() => setDietaryFilter('all')}
                className={`relative px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  dietaryFilter === 'all'
                    ? 'text-stone-900 font-bold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {dietaryFilter === 'all' && (
                  <motion.div
                    layoutId="dietaryPill"
                    className="absolute inset-0 bg-white rounded-lg shadow-xs"
                    transition={{ type: 'spring', bounce: 0.15, duration: 0.4 }}
                  />
                )}
                <span className="relative z-10">All Dishes</span>
              </button>

              <button
                onClick={() => setDietaryFilter('veg')}
                className={`relative flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  dietaryFilter === 'veg'
                    ? 'text-emerald-900 font-bold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {dietaryFilter === 'veg' && (
                  <motion.div
                    layoutId="dietaryPill"
                    className="absolute inset-0 bg-white rounded-lg shadow-xs"
                    transition={{ type: 'spring', bounce: 0.15, duration: 0.4 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block" />
                  <span>Veg Only</span>
                </span>
              </button>

              <button
                onClick={() => setDietaryFilter('non-veg')}
                className={`relative flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  dietaryFilter === 'non-veg'
                    ? 'text-rose-900 font-bold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {dietaryFilter === 'non-veg' && (
                  <motion.div
                    layoutId="dietaryPill"
                    className="absolute inset-0 bg-white rounded-lg shadow-xs"
                    transition={{ type: 'spring', bounce: 0.15, duration: 0.4 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-600 inline-block" />
                  <span>Non-Veg Only</span>
                </span>
              </button>
            </div>

          </div>

          {/* Category Navigation Tabs with Smooth Animated Pill */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 mt-6 pt-5 border-t border-stone-100 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative px-4 py-2 text-xs font-semibold rounded-xl whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                    isActive
                      ? 'text-white font-bold'
                      : 'text-stone-700 hover:text-stone-950 bg-stone-50 hover:bg-stone-100 border border-stone-200/60'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryTab"
                      className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-600 rounded-xl shadow-xs"
                      transition={{ type: 'spring', bounce: 0.15, duration: 0.45 }}
                    />
                  )}
                  <span className="relative z-10">{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Menu Items Count & Active Notice */}
        <div className="flex items-center justify-between text-xs text-stone-500 mb-6 px-1">
          <span className="font-medium">Showing {filteredItems.length} verified culinary items</span>
          <span className="text-orange-700 font-medium">Strictly image-free · Authentic pricing</span>
        </div>

        {/* Menu List — Strict Pure Text Architecture with Smooth Staggered Transition */}
        {filteredItems.length === 0 ? (
          <div className="bg-white rounded-3xl p-14 text-center border border-stone-200 shadow-xs">
            <Filter className="w-8 h-8 text-stone-300 mx-auto mb-3" />
            <p className="text-base font-semibold text-stone-700">No dishes match your current filter.</p>
            <p className="text-xs text-stone-500 mt-1">Try resetting your search query or dietary selection.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
                setDietaryFilter('all');
              }}
              className="mt-5 px-5 py-2.5 text-xs font-bold text-orange-600 hover:text-orange-700 bg-orange-50 hover:bg-orange-100 rounded-xl transition-colors cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-3xl border border-stone-200/90 shadow-sm divide-y divide-stone-100 overflow-hidden">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, idx) => {
                const inCart = cartItems.find((ci) => ci.id === item.id);

                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3, delay: idx * 0.02 }}
                    className="p-5 sm:p-6 hover:bg-[#FBF8F3] transition-colors duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
                  >
                    {/* Left Column: Dish details, dietary indicator, portion */}
                    <div className="max-w-2xl flex-grow pr-0 sm:pr-6">
                      <div className="flex items-center gap-2 mb-1">
                        {/* Dietary Dot Indicator */}
                        <span
                          className={`w-3.5 h-3.5 rounded-full shrink-0 flex items-center justify-center p-0.5 border ${
                            item.isVeg
                              ? 'border-emerald-600 text-emerald-600'
                              : 'border-rose-600 text-rose-600'
                          }`}
                          title={item.isVeg ? 'Vegetarian Dish' : 'Non-Vegetarian Dish'}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              item.isVeg ? 'bg-emerald-600' : 'bg-rose-600'
                            }`}
                          />
                        </span>

                        {/* Dish Name */}
                        <h3 className="text-base sm:text-lg font-bold text-stone-900 group-hover:text-orange-600 transition-colors">
                          {item.name}
                        </h3>

                        {/* Signature indicator if marked */}
                        {item.isSignature && (
                          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-md border border-amber-200/70">
                            <Sparkles className="w-3 h-3 text-amber-600" />
                            Signature
                          </span>
                        )}
                      </div>

                      {/* Metadata line: portion & spice */}
                      <div className="flex items-center gap-2 text-xs text-stone-500 mb-1.5">
                        {item.portion && <span className="font-medium">{item.portion}</span>}
                        {item.portion && item.spiceLevel && <span>·</span>}
                        {item.spiceLevel && (
                          <span className={item.spiceLevel === 'Spicy' ? 'text-orange-700 font-medium' : ''}>
                            Spice: {item.spiceLevel}
                          </span>
                        )}
                      </div>

                      {/* Verified Description */}
                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Right Column: Tabular Price & Real Cart Action */}
                    <div className="flex items-center justify-between sm:justify-end gap-6 shrink-0 pt-3 sm:pt-0 border-t sm:border-t-0 border-stone-100">
                      <div className="text-left sm:text-right">
                        <span className="text-lg sm:text-xl font-bold text-stone-950 font-mono tabular-nums">
                          ₹{item.price}
                        </span>
                      </div>

                      {inCart ? (
                        <div className="flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-xl p-1 shadow-2xs">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-7 h-7 rounded-lg bg-white text-stone-700 hover:text-orange-600 flex items-center justify-center font-bold text-xs shadow-xs transition-colors cursor-pointer"
                            aria-label={`Decrease quantity of ${item.name}`}
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="w-6 text-center text-xs font-bold text-stone-900 font-mono tabular-nums">
                            {inCart.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-7 h-7 rounded-lg bg-white text-stone-700 hover:text-orange-600 flex items-center justify-center font-bold text-xs shadow-xs transition-colors cursor-pointer"
                            aria-label={`Increase quantity of ${item.name}`}
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => addToCart(item)}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-[#FAF7F2] hover:bg-orange-600 text-stone-800 hover:text-white border border-stone-300/80 hover:border-orange-600 transition-all duration-200 shadow-2xs hover:shadow-xs active:scale-95 whitespace-nowrap cursor-pointer"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add</span>
                        </button>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        )}

        {/* Informative Footer Box for the Menu */}
        <div className="mt-8 text-center text-xs text-stone-500 bg-stone-100/70 p-4 rounded-2xl border border-stone-200/50 max-w-2xl mx-auto">
          Need custom portions or dietary questions for bulk/family orders? 
          Call our kitchen chef directly at <a href={`tel:${RESTAURANT_CONFIG.contact.phoneRaw}`} className="text-orange-600 font-bold hover:underline">+91 91008 63933</a>.
        </div>

      </div>
    </section>
  );
}
