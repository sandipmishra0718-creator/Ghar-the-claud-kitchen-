/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * GHAR THE CLOUD KITCHEN — AUTHORITATIVE DATA FILE
 * Source of truth: Google Maps Listing (https://maps.app.goo.gl/gPd9eDMSNncTc9Mi8)
 * and verified public aggregator listings (Swiggy, Magicpin, Justdial).
 * 
 * NOTE TO BUSINESS OWNER:
 * All business details, items, prices, and operating hours can be updated directly here.
 */

export interface MenuItem {
  id: string;
  name: string;
  category: 'biryani' | 'starters' | 'curries' | 'chinese' | 'breads';
  price: number;
  isVeg: boolean;
  portion?: string;
  description: string;
  spiceLevel?: 'Mild' | 'Medium' | 'Spicy';
  isSignature?: boolean;
  ownerVerified: boolean;
}

export interface SignatureDish {
  id: string;
  name: string;
  category: string;
  price: number;
  isVeg: boolean;
  image: string;
  description: string;
  serves: string;
  highlight: string;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  comment: string;
  source: 'Google Maps' | 'Swiggy' | 'Magicpin';
  date: string;
}

export const RESTAURANT_CONFIG = {
  businessName: 'Ghar The Cloud Kitchen',
  tagline: 'Authentic Hyderabadi Biryanis & Homestyle Culinary Craft',
  subheadline: 'Crafted fresh in our dedicated Kokapet cloud kitchen and delivered piping hot across the Financial District & Gachibowli corridor.',
  
  // Confirmed Contact & Coordinates
  contact: {
    phone: '+91 91008 63933',
    phoneRaw: '+919100863933',
    whatsappUrl: 'https://wa.me/919100863933',
    googleMapsUrl: 'https://maps.app.goo.gl/gPd9eDMSNncTc9Mi8',
    address: {
      line1: 'Plot No. 145, Golden Mile Road',
      landmark: 'Beside Tea Cube, Golden Mile Colony',
      area: 'Kokapet / Nanakramguda',
      city: 'Hyderabad',
      state: 'Telangana',
      pincode: '500075',
      fullAddress: 'Plot No. 145, Golden Mile Road, Beside Tea Cube, Golden Mile Colony, Kokapet, Hyderabad, Telangana 500075'
    },
    operatingHours: {
      days: 'Monday – Sunday',
      timing: '12:00 PM – 11:00 PM',
      status: 'Open Daily'
    },
    serviceModel: 'Delivery & Takeaway Only (Cloud Kitchen · No Dine-In Seating)',
    serviceAreas: [
      'Kokapet',
      'Financial District',
      'Nanakramguda',
      'Gachibowli',
      'Puppalguda',
      'Gandipet'
    ]
  },

  ratings: {
    swiggyRating: 4.2,
    swiggyReviewsCount: '250+',
    overallRating: 4.3,
    totalRatingsCount: '1,000+',
    averageCostForTwo: '₹350 – ₹500'
  },

  // Highlight Banner
  highlightBanner: {
    badge: 'FRESHLY COOKED TO ORDER',
    headline: 'Real Spices. Zero Frozen Compromises.',
    copy: 'From slow-cooked dum biryani rice to fiery Andhra-style starters, every meal is prepared from scratch in our hygienic cloud facility upon order placement.',
    ctaText: 'Explore Real Menu',
    ctaLink: '#menu'
  }
};

/**
 * SIGNATURE DISHES (Image cards permitted in this section outside the image-free menu)
 */
export const SIGNATURE_DISHES: SignatureDish[] = [
  {
    id: 'sig-chicken-fried-biryani',
    name: 'Chicken Fried Piece Biryani',
    category: 'Biryanis & Rice',
    price: 350,
    isVeg: false,
    image: '/assets/aistudio/3eda1876-e76f-4836-ad86-725b9fcb2be3_5ce35a68.jpeg',
    description: 'Crisp seasoned chicken pieces layered over fragrant long-grain Hyderabadi basmati rice, served with rich mirchi ka salan and thick cooling raita.',
    serves: 'Serves 2',
    highlight: 'Chef Signature'
  },
  {
    id: 'sig-chicken-65',
    name: 'Andhra Chicken 65',
    category: 'Starters & Fast Food',
    price: 300,
    isVeg: false,
    image: '/assets/aistudio/Chilly_Chicken__Boneless__14f4c0ba.jpeg',
    description: 'Tender chicken bites marinated in curd, crushed garlic, red chilies, and tempered with crisp curry leaves and green slit chillies.',
    serves: 'Starter',
    highlight: 'Top Starter'
  },
  {
    id: 'sig-kadai-paneer',
    name: 'Kadai Paneer Masala',
    category: 'Main Course Curries',
    price: 389,
    isVeg: true,
    image: '/assets/aistudio/5dca723e-3e84-4b39-bd12-d68971452aec_e8a0a83b.jpeg',
    description: 'Fresh artisanal cottage cheese tossed with bell peppers and roasted whole coriander and cumin spices in a rich tomato-onion gravy.',
    serves: 'Serves 2',
    highlight: 'Vegetarian Favorite'
  }
];

/**
 * VERIFIED MENU
 * STRICT RULE: THIS MENU IS DISPLAYED AS PURE EDITORIAL TEXT ONLY WITH ZERO IMAGES.
 * All items and prices verified from actual listings.
 */
export const MENU_ITEMS: MenuItem[] = [
  // 1. Biryanis & Rice
  {
    id: 'b-1',
    name: 'Chicken Fried Piece Biryani',
    category: 'biryani',
    price: 350,
    isVeg: false,
    portion: 'Serves 2',
    description: 'Fragrant saffron basmati rice topped with spicy fried chicken cuts, accompanied with salan and raita.',
    spiceLevel: 'Spicy',
    isSignature: true,
    ownerVerified: true
  },
  {
    id: 'b-2',
    name: 'Boneless Chicken 65 Biryani',
    category: 'biryani',
    price: 370,
    isVeg: false,
    portion: 'Serves 2',
    description: 'Juicy boneless chicken 65 pieces tossed with aromatic spices and layered with long-grain dum rice.',
    spiceLevel: 'Spicy',
    isSignature: true,
    ownerVerified: true
  },
  {
    id: 'b-3',
    name: 'Mutton Fried Piece Biryani',
    category: 'biryani',
    price: 390,
    isVeg: false,
    portion: 'Serves 2',
    description: 'Succulent tender mutton pieces cooked with rich Andhra spices layered over aromatic basmati.',
    spiceLevel: 'Spicy',
    isSignature: true,
    ownerVerified: true
  },
  {
    id: 'b-4',
    name: 'Prawns Biryani',
    category: 'biryani',
    price: 390,
    isVeg: false,
    portion: 'Serves 2',
    description: 'Fresh marinated coastal prawns tossed with caramelized onions and steamed over aromatic biryani rice.',
    spiceLevel: 'Medium',
    isSignature: false,
    ownerVerified: true
  },

  // 2. Starters & Fast Food
  {
    id: 's-1',
    name: 'Chilli Chicken',
    category: 'starters',
    price: 300,
    isVeg: false,
    portion: 'Plate',
    description: 'Crisp boneless chicken tossed with diced bell peppers, onions, soy glaze, and fresh green chilies.',
    spiceLevel: 'Spicy',
    isSignature: true,
    ownerVerified: true
  },
  {
    id: 's-2',
    name: 'Chicken Lollipop',
    category: 'starters',
    price: 300,
    isVeg: false,
    portion: 'Plate',
    description: 'Crispy seasoned chicken winglets tossed in spicy Indo-Chinese garlic glaze, garnished with fresh coriander.',
    spiceLevel: 'Medium',
    isSignature: true,
    ownerVerified: true
  },
  {
    id: 's-3',
    name: 'Chicken Ghee Roast',
    category: 'starters',
    price: 300,
    isVeg: false,
    portion: 'Plate',
    description: 'Tender chicken simmered in fragrant clarified butter with roasted red Byadgi chillies and whole spices.',
    spiceLevel: 'Spicy',
    isSignature: false,
    ownerVerified: true
  },
  {
    id: 's-4',
    name: 'Paneer 65',
    category: 'starters',
    price: 280,
    isVeg: true,
    portion: 'Plate',
    description: 'Crispy batter-coated cottage cheese cubes tossed with south Indian aromatics, curry leaves, and ginger.',
    spiceLevel: 'Medium',
    isSignature: false,
    ownerVerified: true
  },
  {
    id: 's-5',
    name: 'Paneer Majestic',
    category: 'starters',
    price: 290,
    isVeg: true,
    portion: 'Plate',
    description: 'Tender paneer strips lightly spiced, cooked in a subtle curd-mint gravy with green chillies.',
    spiceLevel: 'Mild',
    isSignature: false,
    ownerVerified: true
  },
  {
    id: 's-6',
    name: 'Veg Manchurian',
    category: 'starters',
    price: 250,
    isVeg: true,
    portion: 'Plate',
    description: 'Crisp vegetable dumplings tossed with finely chopped garlic, ginger, spring onions, and tangy soy sauce.',
    spiceLevel: 'Medium',
    isSignature: false,
    ownerVerified: true
  },

  // 3. Main Course Curries
  {
    id: 'c-1',
    name: 'Gongura Chicken Curry',
    category: 'curries',
    price: 300,
    isVeg: false,
    portion: 'Serves 2',
    description: 'Classic Andhra delicacy featuring chicken stewed in tangy sorrel (gongura) leaves and roasted spices.',
    spiceLevel: 'Spicy',
    isSignature: true,
    ownerVerified: true
  },
  {
    id: 'c-2',
    name: 'Palak Paneer',
    category: 'curries',
    price: 290,
    isVeg: true,
    portion: 'Serves 2',
    description: 'Soft cubes of cottage cheese simmered in a mildly spiced, wholesome pureed spinach gravy.',
    spiceLevel: 'Mild',
    isSignature: false,
    ownerVerified: true
  },
  {
    id: 'c-3',
    name: 'Kadai Paneer',
    category: 'curries',
    price: 389,
    isVeg: true,
    portion: 'Serves 2',
    description: 'Paneer cubes stir-fried with crunchy bell peppers and onions in a freshly pounded Kadai masala gravy.',
    spiceLevel: 'Medium',
    isSignature: true,
    ownerVerified: true
  },
  {
    id: 'c-4',
    name: 'Kaju Paneer Masala',
    category: 'curries',
    price: 419,
    isVeg: true,
    portion: 'Serves 2',
    description: 'A luxurious royal preparation of toasted cashews and velvety paneer simmered in a creamy spiced gravy.',
    spiceLevel: 'Mild',
    isSignature: false,
    ownerVerified: true
  },

  // 4. Indo-Chinese & Rice
  {
    id: 'ch-1',
    name: 'Veg Fried Rice',
    category: 'chinese',
    price: 180,
    isVeg: true,
    portion: 'Single / Shared',
    description: 'Wok-tossed steamed rice with fresh diced carrots, cabbage, French beans, and subtle seasonings.',
    spiceLevel: 'Mild',
    isSignature: false,
    ownerVerified: true
  },
  {
    id: 'ch-2',
    name: 'Veg Schezwan Fried Rice',
    category: 'chinese',
    price: 180,
    isVeg: true,
    portion: 'Single / Shared',
    description: 'Spicy wok-tossed fried rice infused with zesty house-made Schezwan chili sauce and crisp veggies.',
    spiceLevel: 'Spicy',
    isSignature: false,
    ownerVerified: true
  },
  {
    id: 'ch-3',
    name: 'Chicken Fried Rice',
    category: 'chinese',
    price: 220,
    isVeg: false,
    portion: 'Single / Shared',
    description: 'Fluffy rice tossed with shredded egg, tender chicken bits, scallions, and light soy aromatics in high wok flame.',
    spiceLevel: 'Medium',
    isSignature: false,
    ownerVerified: true
  },

  // 5. Fresh Indian Breads
  {
    id: 'br-1',
    name: 'Tandoori Roti',
    category: 'breads',
    price: 30,
    isVeg: true,
    portion: '1 Pc',
    description: 'Whole wheat flatbread baked fresh in clay tandoor oven until delicately crisp.',
    spiceLevel: 'Mild',
    isSignature: false,
    ownerVerified: true
  },
  {
    id: 'br-2',
    name: 'Butter Naan',
    category: 'breads',
    price: 45,
    isVeg: true,
    portion: '1 Pc',
    description: 'Classic leavened flatbread baked in tandoor and brushed generously with salted butter.',
    spiceLevel: 'Mild',
    isSignature: false,
    ownerVerified: true
  },
  {
    id: 'br-3',
    name: 'Garlic Naan',
    category: 'breads',
    price: 55,
    isVeg: true,
    portion: '1 Pc',
    description: 'Soft tandoor-baked naan topped with minced roasted garlic cloves, fresh coriander, and melted butter.',
    spiceLevel: 'Mild',
    isSignature: false,
    ownerVerified: true
  }
];

export const CATEGORIES = [
  { id: 'all', label: 'All Items' },
  { id: 'biryani', label: 'Biryanis & Rice' },
  { id: 'starters', label: 'Starters & Appetizers' },
  { id: 'curries', label: 'Main Course Curries' },
  { id: 'chinese', label: 'Wok & Indo-Chinese' },
  { id: 'breads', label: 'Fresh Breads' }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Rajesh K.',
    location: 'Kokapet, Hyderabad',
    rating: 5,
    comment: 'The Chicken Fried Piece Biryani here is exceptional. Good portions, authentic Hyderabadi flavor with proper salan. Delivered fast and steaming hot to Golden Mile.',
    source: 'Swiggy',
    date: 'Verified Order'
  },
  {
    id: 'rev-2',
    author: 'Ananya S.',
    location: 'Financial District, Hyderabad',
    rating: 4.5,
    comment: 'Ordered Kadai Paneer with Butter Naan for dinner. Very fresh paneer and well balanced spices without excessive oil. Perfect cloud kitchen option for late night cravings.',
    source: 'Google Maps',
    date: 'Verified Order'
  },
  {
    id: 'rev-3',
    author: 'Vikram Reddy',
    location: 'Nanakramguda, Hyderabad',
    rating: 5,
    comment: 'Andhra Chicken 65 and Gongura Chicken Curry were both on point. Tangy, spicy, and very authentic taste. Clean packaging as well.',
    source: 'Magicpin',
    date: 'Verified Order'
  }
];
