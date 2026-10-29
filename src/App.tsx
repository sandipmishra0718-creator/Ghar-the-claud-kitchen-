/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import WelcomeLoader from './components/WelcomeLoader';
import Header from './components/Header';
import Hero from './components/Hero';
import SignatureDishes from './components/SignatureDishes';
import HighlightBanner from './components/HighlightBanner';
import MenuSection from './components/MenuSection';
import BrandStory from './components/BrandStory';
import CustomerReviews from './components/CustomerReviews';
import LocationContact from './components/LocationContact';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import OwnerEditModal from './components/OwnerEditModal';

export default function App() {
  const [isOwnerModalOpen, setIsOwnerModalOpen] = useState(false);

  return (
    <CartProvider>
      <div className="min-h-screen bg-[#FAF7F2] text-[#1C1917] flex flex-col selection:bg-orange-500 selection:text-white">
        {/* 1. Premium Welcome Loader (Shows once per session or on first visit) */}
        <WelcomeLoader />

        {/* 2. Truly Invisible / Translucent Floating Glass Header */}
        <Header />

        {/* Main Content Sections with Scroll Motion Design */}
        <main className="flex-grow">
          {/* Hero Section with Parallax & Masked Headline Entrance */}
          <Hero />

          {/* Signature Dishes Showcase (Images allowed here; interactive carousel & hover lift) */}
          <SignatureDishes />

          {/* Promotional Campaign / Kitchen Craft Highlight Banner */}
          <HighlightBanner />

          {/* Official Menu — STRICT REQUIREMENT: Pure text & details only, zero images */}
          <MenuSection />

          {/* Brand Story & Operational Philosophy */}
          <BrandStory />

          {/* Verified Customer Reviews with Staggered Entrance */}
          <CustomerReviews />

          {/* Location, Hours, Contact & Interactive Route */}
          <LocationContact />
        </main>

        {/* Footer */}
        <Footer onOpenOwnerModal={() => setIsOwnerModalOpen(true)} />

        {/* Interactive Cart Slide-Over Drawer */}
        <CartDrawer />

        {/* Owner Data Configuration & Verification Modal */}
        <OwnerEditModal
          isOpen={isOwnerModalOpen}
          onClose={() => setIsOwnerModalOpen(false)}
        />
      </div>
    </CartProvider>
  );
}
