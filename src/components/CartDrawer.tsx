/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, Send, Phone, ShoppingBag, ShieldCheck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { RESTAURANT_CONFIG } from '../data/restaurantData';

export default function CartDrawer() {
  const { items, removeFromCart, updateQuantity, clearCart, subtotal, isCartOpen, setIsCartOpen } = useCart();

  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [notes, setNotes] = useState('');

  if (!isCartOpen) return null;

  const packagingFee = subtotal > 0 ? 25 : 0;
  const grandTotal = subtotal + packagingFee;

  // Format WhatsApp Message
  const constructWhatsAppOrder = () => {
    if (items.length === 0) return '#';

    let message = `*NEW ORDER — GHAR THE CLOUD KITCHEN*\n`;
    message += `------------------------------------\n`;
    items.forEach((item) => {
      message += `• ${item.quantity}x ${item.name} (${item.portion || ''}) — ₹${item.price * item.quantity}\n`;
    });
    message += `------------------------------------\n`;
    message += `*Subtotal:* ₹${subtotal}\n`;
    message += `*Packaging & Containers:* ₹${packagingFee}\n`;
    message += `*Estimated Grand Total:* ₹${grandTotal}\n\n`;

    message += `*CUSTOMER DETAILS:*\n`;
    message += `*Name:* ${customerName.trim() || 'Not specified'}\n`;
    message += `*Phone:* ${customerPhone.trim() || 'Not specified'}\n`;
    message += `*Delivery Address:* ${deliveryAddress.trim() || 'Kokapet / Hyderabad (Please clarify)'}\n`;
    if (notes.trim()) {
      message += `*Cooking Notes:* ${notes.trim()}\n`;
    }
    message += `------------------------------------\n`;
    message += `Please confirm my order and approximate delivery time!`;

    const encoded = encodeURIComponent(message);
    return `https://wa.me/919100863933?text=${encoded}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-stone-900/50 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF7F2] shadow-2xl border-l border-stone-200 flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-6 bg-white border-b border-stone-200/80 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center font-bold">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-bold text-stone-900 font-display">
                  Your Order Cart
                </h3>
                <p className="text-xs text-stone-500">
                  {items.length} {items.length === 1 ? 'dish' : 'dishes'} selected
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
              aria-label="Close cart drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="p-6 overflow-y-auto flex-grow divide-y divide-stone-200/60">
            {items.length === 0 ? (
              <div className="py-16 text-center">
                <ShoppingBag className="w-12 h-12 text-stone-300 mx-auto mb-3" />
                <p className="text-base font-semibold text-stone-700">Your cart is empty</p>
                <p className="text-xs text-stone-500 mt-1 max-w-xs mx-auto">
                  Browse our authentic biryanis, starters, and curries to add dishes.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="mt-6 px-4 py-2 text-xs font-bold text-orange-600 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors"
                >
                  Explore Menu
                </button>
              </div>
            ) : (
              <div className="space-y-4 py-2">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between gap-3 pt-3 first:pt-0"
                  >
                    <div className="flex-grow pr-2">
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-2 h-2 rounded-full shrink-0 ${
                            item.isVeg ? 'bg-emerald-600' : 'bg-rose-600'
                          }`}
                        />
                        <h4 className="text-sm font-bold text-stone-900 leading-snug">
                          {item.name}
                        </h4>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-stone-500 mt-0.5">
                        <span>₹{item.price} each</span>
                        {item.portion && (
                          <>
                            <span>·</span>
                            <span>{item.portion}</span>
                          </>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      {/* Quantity Stepper */}
                      <div className="flex items-center gap-1 bg-white border border-stone-200 rounded-lg p-0.5 shadow-2xs">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-6 h-6 rounded flex items-center justify-center text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-5 text-center text-xs font-bold text-stone-900 font-mono tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-6 h-6 rounded flex items-center justify-center text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Line Item Total */}
                      <span className="w-14 text-right text-sm font-bold text-stone-900 font-mono tabular-nums">
                        ₹{item.price * item.quantity}
                      </span>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-1 text-stone-400 hover:text-rose-600 transition-colors"
                        title="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}

                <div className="pt-3 text-right">
                  <button
                    onClick={clearCart}
                    className="text-xs text-stone-400 hover:text-rose-600 transition-colors"
                  >
                    Clear All Items
                  </button>
                </div>
              </div>
            )}

            {/* Delivery Details Form */}
            {items.length > 0 && (
              <div className="pt-6 mt-6 border-t border-stone-200 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-600">
                  Delivery Details (Kokapet / Hyderabad)
                </h4>

                <div>
                  <label className="text-[11px] font-semibold text-stone-600 block mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Rahul Sharma"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-white border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-stone-600 block mb-1">
                    Contact Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 XXXXX"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-white border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-stone-600 block mb-1">
                    Delivery Address / Landmark
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Apartment, Street, Area (e.g. Kokapet, Gachibowli)"
                    value={deliveryAddress}
                    onChange={(e) => setDeliveryAddress(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-white border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500 resize-none"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-stone-600 block mb-1">
                    Kitchen Notes (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Less spicy, extra salan, cutlery needed"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-white border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Footer & Checkout Action */}
          {items.length > 0 && (
            <div className="p-6 bg-white border-t border-stone-200/90 shadow-lg space-y-4">
              
              {/* Cost Breakdown */}
              <div className="space-y-1.5 text-xs text-stone-600">
                <div className="flex justify-between">
                  <span>Items Subtotal</span>
                  <span className="font-mono tabular-nums text-stone-900">₹{subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Hygienic Food Packaging</span>
                  <span className="font-mono tabular-nums text-stone-900">₹{packagingFee}</span>
                </div>
                <div className="pt-2 border-t border-stone-200 flex justify-between text-base font-bold text-stone-950 font-display">
                  <span>Estimated Total</span>
                  <span className="font-mono tabular-nums text-orange-600">₹{grandTotal}</span>
                </div>
              </div>

              {/* Functional Order Actions */}
              <div className="space-y-2 pt-1">
                <a
                  href={constructWhatsAppOrder()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-98 text-white text-sm font-bold flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Order via WhatsApp</span>
                </a>

                <a
                  href={`tel:${RESTAURANT_CONFIG.contact.phoneRaw}`}
                  className="w-full py-2.5 px-4 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-orange-600" />
                  <span>Call Kitchen Direct: {RESTAURANT_CONFIG.contact.phone}</span>
                </a>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-stone-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Zero fake payment portal · Pay UPI or Cash on delivery</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
