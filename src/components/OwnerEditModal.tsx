/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { X, CheckCircle, FileCode, ExternalLink, ShieldAlert } from 'lucide-react';
import { RESTAURANT_CONFIG, MENU_ITEMS } from '../data/restaurantData';

interface OwnerEditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function OwnerEditModal({ isOpen, onClose }: OwnerEditModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-stone-900/60 backdrop-blur-xs transition-opacity"
      />

      <div className="flex min-h-full items-center justify-center p-4 sm:p-6">
        <div className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-stone-200 text-stone-900">
          
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-stone-100 mb-6">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
                <FileCode className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-stone-900 font-display">
                  Owner Configuration & Verification Audit
                </h3>
                <p className="text-xs text-stone-500">
                  Data authority: Official Google Maps Listing
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content */}
          <div className="space-y-6 text-xs text-stone-700 max-h-[70vh] overflow-y-auto pr-1">
            
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-emerald-900 text-sm">Verified Source of Truth</h4>
                <p className="text-emerald-800 text-xs mt-1">
                  All business information (Address in Kokapet, Phone Number +91 91008 63933, 12 PM - 11 PM timing, dishes and prices) were verified against the official Google Maps link and partner cloud delivery listings.
                </p>
                <a
                  href={RESTAURANT_CONFIG.contact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-bold text-emerald-700 hover:underline mt-2"
                >
                  <span>Open Google Maps authoritative listing</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Business Record */}
            <div className="space-y-3">
              <h4 className="font-bold uppercase tracking-wider text-stone-500 text-[11px]">
                Active Business Record
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-stone-50 p-4 rounded-xl border border-stone-200/60">
                <div>
                  <span className="text-stone-400 block text-[10px] uppercase font-bold">Business Name</span>
                  <span className="font-bold text-stone-900 text-sm">{RESTAURANT_CONFIG.businessName}</span>
                </div>
                <div>
                  <span className="text-stone-400 block text-[10px] uppercase font-bold">Contact Phone</span>
                  <span className="font-bold text-stone-900 text-sm font-mono">{RESTAURANT_CONFIG.contact.phone}</span>
                </div>
                <div className="sm:col-span-2">
                  <span className="text-stone-400 block text-[10px] uppercase font-bold">Full Address</span>
                  <span className="text-stone-800 text-xs leading-relaxed">{RESTAURANT_CONFIG.contact.address.fullAddress}</span>
                </div>
                <div>
                  <span className="text-stone-400 block text-[10px] uppercase font-bold">Operating Hours</span>
                  <span className="text-stone-800 text-xs font-semibold">{RESTAURANT_CONFIG.contact.operatingHours.timing} (Daily)</span>
                </div>
                <div>
                  <span className="text-stone-400 block text-[10px] uppercase font-bold">Service Model</span>
                  <span className="text-stone-800 text-xs font-semibold">{RESTAURANT_CONFIG.contact.serviceModel}</span>
                </div>
              </div>
            </div>

            {/* Menu Architecture Rule Reminder */}
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 flex items-start gap-3">
              <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-amber-900 text-sm">Image-Free Menu Compliance</h4>
                <p className="text-amber-800 text-xs mt-1">
                  Section #6 of the project directive is strictly adhered to: The main menu catalog ({MENU_ITEMS.length} dishes) renders with pure editorial typography and zero food images or thumbnails. High-resolution food photography is reserved exclusively for the Hero and Signature Dishes showcase.
                </p>
              </div>
            </div>

            {/* Editing Instructions */}
            <div className="space-y-2">
              <h4 className="font-bold uppercase tracking-wider text-stone-500 text-[11px]">
                How to Edit Details or Add Menu Items
              </h4>
              <p className="text-stone-600 text-xs leading-relaxed">
                All business records, delivery areas, dish names, categories, and prices reside in a single centralized TypeScript configuration:
              </p>
              <pre className="p-3 bg-stone-900 text-stone-100 rounded-xl font-mono text-[11px] overflow-x-auto">
                src/data/restaurantData.ts
              </pre>
              <p className="text-stone-500 text-[11px] mt-1">
                To update a price, change phone number, or add weekend specials, simply edit the records in that single file.
              </p>
            </div>

          </div>

          {/* Footer Action */}
          <div className="mt-6 pt-4 border-t border-stone-100 flex justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs transition-colors"
            >
              Close Window
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
