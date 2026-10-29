/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MapPin, Phone, Clock, ExternalLink, Settings2, ShieldCheck, ArrowUp } from 'lucide-react';
import { RESTAURANT_CONFIG } from '../data/restaurantData';

interface FooterProps {
  onOpenOwnerModal: () => void;
}

export default function Footer({ onOpenOwnerModal }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800/80">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-orange-600 text-white flex items-center justify-center font-bold text-lg">
                G
              </span>
              <span className="text-xl font-bold tracking-tight text-white font-display">
                Ghar <span className="text-orange-500 font-normal text-sm">The Cloud Kitchen</span>
              </span>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              Authentic Hyderabadi culinary traditions and Andhra spiced delicacies, prepared fresh in our dedicated Kokapet cloud facility and delivered hot across Hyderabad.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-stone-400">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Verified Google Maps Food Establishment</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-display">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <a href="#menu" className="hover:text-orange-400 transition-colors">
                  Menu (Text-First)
                </a>
              </li>
              <li>
                <a href="#signature" className="hover:text-orange-400 transition-colors">
                  Signature Dishes
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-orange-400 transition-colors">
                  Cloud Kitchen Story
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-orange-400 transition-colors">
                  Location & Hours
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-orange-400 transition-colors">
                  Customer Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Delivery Corridor */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-display">
              Delivery Corridors
            </h4>
            <ul className="space-y-1.5 text-xs text-stone-400">
              {RESTAURANT_CONFIG.contact.serviceAreas.map((area) => (
                <li key={area} className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-orange-500" />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-display">
              Kitchen Coordinates
            </h4>
            <div className="space-y-2 text-xs text-stone-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <span>
                  {RESTAURANT_CONFIG.contact.address.line1}, {RESTAURANT_CONFIG.contact.address.landmark}, Kokapet, Hyderabad 500075
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-orange-500 shrink-0" />
                <a
                  href={`tel:${RESTAURANT_CONFIG.contact.phoneRaw}`}
                  className="hover:text-white transition-colors text-white font-semibold"
                >
                  {RESTAURANT_CONFIG.contact.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-orange-500 shrink-0" />
                <span>{RESTAURANT_CONFIG.contact.operatingHours.timing} (Daily)</span>
              </p>
              <div className="pt-2">
                <a
                  href={RESTAURANT_CONFIG.contact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-orange-400 hover:text-orange-300 font-semibold"
                >
                  <span>Google Maps Listing Link</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            <p>© {new Date().getFullYear()} {RESTAURANT_CONFIG.businessName}. All rights reserved.</p>
            <p className="text-[11px] text-stone-600 mt-0.5">
              Pure Delivery & Takeaway Kitchen · No Dine-In Facility.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenOwnerModal}
              className="inline-flex items-center gap-1 text-[11px] text-stone-400 hover:text-white bg-stone-900 px-2.5 py-1.5 rounded-md border border-stone-800 transition-colors"
            >
              <Settings2 className="w-3.5 h-3.5 text-orange-500" />
              <span>Owner Data Config & Verification</span>
            </button>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-400 hover:text-white transition-colors"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
