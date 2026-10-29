/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Navigation, Check, MessageSquare, Copy } from 'lucide-react';
import { RESTAURANT_CONFIG } from '../data/restaurantData';

export default function LocationContact() {
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText(RESTAURANT_CONFIG.contact.address.fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="location" className="py-24 sm:py-32 bg-[#F5EFE4]/80 border-t border-[#E8DFC8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-widest uppercase text-orange-600 block mb-2"
          >
            Location & Cloud Hub
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 font-display tracking-tight"
          >
            Find Ghar The Cloud Kitchen
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-stone-600 text-sm sm:text-base mt-3 leading-relaxed"
          >
            Our cloud kitchen operations are based in Kokapet's Golden Mile Colony. Serving hot takeaway counter pickups and swift delivery orders across West Hyderabad.
          </motion.p>
        </div>

        {/* 2-Column Split: Detailed Info Card + Interactive Map Route Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Verified Address & Contact Cards */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            
            {/* Address Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-7 sm:p-8 border border-stone-200/90 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-orange-100 text-orange-700 flex items-center justify-center shrink-0 shadow-2xs">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-stone-900 font-display">
                      Verified Address
                    </h3>
                    <span className="text-xs text-stone-500">Google Maps Authority</span>
                  </div>
                </div>

                <button
                  onClick={copyAddress}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-stone-100 text-stone-700 hover:bg-stone-200 transition-colors cursor-pointer active:scale-95"
                  title="Copy full address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-bold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="mt-5 text-sm text-stone-800 space-y-1 leading-relaxed">
                <p className="font-semibold text-stone-900">{RESTAURANT_CONFIG.contact.address.line1}</p>
                <p className="text-stone-600">{RESTAURANT_CONFIG.contact.address.landmark}</p>
                <p className="text-stone-600">{RESTAURANT_CONFIG.contact.address.area}</p>
                <p className="text-stone-600">
                  {RESTAURANT_CONFIG.contact.address.city}, {RESTAURANT_CONFIG.contact.address.state} — {RESTAURANT_CONFIG.contact.address.pincode}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 flex flex-wrap items-center gap-3">
                <a
                  href={RESTAURANT_CONFIG.contact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold bg-orange-600 hover:bg-orange-700 active:scale-95 text-white rounded-xl transition-all shadow-sm cursor-pointer"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </motion.div>

            {/* Operating Hours & Contact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200/90 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-3 shadow-2xs">
                  <Clock className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-stone-900 mb-1">Operating Hours</h4>
                <p className="text-sm font-bold text-orange-600 font-mono">
                  {RESTAURANT_CONFIG.contact.operatingHours.timing}
                </p>
                <p className="text-xs text-stone-500 mt-1">
                  Open 7 Days a Week (Mon – Sun)
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200/90 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-3 shadow-2xs">
                  <Phone className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-stone-900 mb-1">Kitchen Phone</h4>
                <a
                  href={`tel:${RESTAURANT_CONFIG.contact.phoneRaw}`}
                  className="text-sm font-bold text-stone-900 hover:text-orange-600 transition-colors block"
                >
                  {RESTAURANT_CONFIG.contact.phone}
                </a>
                <a
                  href={RESTAURANT_CONFIG.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 hover:underline mt-1"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp direct message</span>
                </a>
              </motion.div>

            </div>

          </div>

          {/* Right Column: Google Maps Interactive Showcase & Service Radius */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 bg-white rounded-3xl p-7 sm:p-9 border border-stone-200/90 shadow-lg hover:shadow-xl transition-shadow flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-stone-900 font-display">
                    Delivery & Takeaway Hub
                  </h3>
                  <p className="text-xs text-stone-500">
                    Beside Tea Cube, Golden Mile Road
                  </p>
                </div>
                <span className="px-3 py-1 text-xs font-semibold bg-emerald-50 text-emerald-800 rounded-full border border-emerald-200/60">
                  Active Kitchen
                </span>
              </div>

              {/* Styled Visual Map Frame */}
              <div className="relative rounded-2xl overflow-hidden border border-stone-200 bg-stone-100 aspect-[16/9] mb-6 flex flex-col items-center justify-center text-center p-6 group">
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-70" />
                
                <div className="relative z-10 max-w-sm">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-orange-600 to-amber-500 text-white flex items-center justify-center mx-auto mb-3 shadow-md group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <p className="text-sm font-bold text-stone-900">
                    Ghar The Cloud Kitchen
                  </p>
                  <p className="text-xs text-stone-600 mt-1 mb-4">
                    Plot #145, Golden Mile Road, Kokapet, Hyderabad
                  </p>
                  <a
                    href={RESTAURANT_CONFIG.contact.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold rounded-xl transition-colors shadow-xs cursor-pointer active:scale-95"
                  >
                    <span>View Exact Pin on Google Maps</span>
                    <Navigation className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Delivery Hub Proximity */}
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3">
                Key Nearby Corridors We Serve
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs text-stone-700">
                {RESTAURANT_CONFIG.contact.serviceAreas.map((area) => (
                  <div
                    key={area}
                    className="p-2.5 rounded-xl bg-stone-50 border border-stone-100 flex items-center gap-2 hover:bg-orange-50/70 hover:border-orange-200 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
              * Note: Ghar The Cloud Kitchen operates exclusively for delivery and takeaway. No dine-in seating is available at this location.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
