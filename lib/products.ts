export interface Product {
  id: number
  slug: string // added slug field for URL-friendly routing
  name: string
  price: number
  rating: number
  reviews: number
  image: string
  images: string[]
  category: string
  description: string
  features: string[]
  specifications: Record<string, string>
  amazonLink: string
  userReviews: {
    name: string
    rating: number
    date: string
    comment: string
  }[]
}

export const products: Product[] = [
  {
    id: 1,
    slug: 'smart-wifi-moisture-temperature-sensor',
    name: 'Smart WiFi Moisture & Temperature Sensor',
    price: 29,
    rating: 4.5,
    reviews: 120,
    image: 'https://m.media-amazon.com/images/I/61cD+P0Y+LL._SX522_.jpg',
    images: [
      'https://m.media-amazon.com/images/I/61cD+P0Y+LL._SX522_.jpg',
      '/placeholder.svg?key=img1',
      '/placeholder.svg?key=img2',
    ],
    category: 'monitoring',
    description: 'Wireless smart sensor for real-time monitoring of soil moisture and temperature levels in your grow environment. Connects via WiFi for app-based alerts and data logging.',
    features: [
      'WiFi-enabled real-time monitoring',
      'Soil moisture and temperature detection',
      'App notifications for optimal conditions',
      'Easy installation with probe',
      'Long battery life',
      'Compatible with smart home systems',
    ],
    specifications: {
      'Sensors': 'Moisture, Temperature',
      'Connectivity': 'WiFi 2.4GHz',
      'Battery': '2x AA, up to 1 year',
      'Range': 'Up to 300 ft',
      'Dimensions': '3" x 1.5" x 1"',
      'Weight': '2 oz',
    },
    amazonLink: 'https://www.amazon.com/Smart-WiFi-Moisture-Temperature-Sensor/dp/B0F4DL4884',
    userReviews: [
      {
        name: 'Alex Kim',
        rating: 5,
        date: '2025-02-15',
        comment: 'Perfect for my indoor plants. The app alerts saved them from overwatering!',
      },
      {
        name: 'Mia Lopez',
        rating: 4,
        date: '2025-02-10',
        comment: 'Accurate readings, setup was straightforward. Battery lasts well.',
      },
      {
        name: 'Jordan Lee',
        rating: 4,
        date: '2025-02-05',
        comment: 'Good value, but app could have more customization.',
      },
    ],
  },
  {
    id: 2,
    slug: 'bestqool-red-light-therapy-device',
    name: 'Bestqool Red Light Therapy Device',
    price: 159,
    rating: 4.6,
    reviews: 890,
    image: 'https://m.media-amazon.com/images/I/71fjapylUsL._SX679_.jpg',
    images: [
      'https://m.media-amazon.com/images/I/71fjapylUsL._SX679_.jpg',
      '/placeholder.svg?key=img1',
      '/placeholder.svg?key=img2',
    ],
    category: 'lighting',
    description: 'Portable red light therapy panel for plant growth enhancement and therapeutic benefits. Emits red and near-infrared light to promote faster growth and recovery.',
    features: [
      '660nm red and 850nm near-infrared wavelengths',
      'Portable and lightweight design',
      'Timer function for sessions',
      'Low EMF emission',
      'Easy to use with stand',
      'Suitable for targeted treatment',
    ],
    specifications: {
      'Power': '60W',
      'LEDs': '60 (30 red + 30 NIR)',
      'Irradiance': '100 mW/cm² at 6 inches',
      'Timer': '10-25 minutes',
      'Dimensions': '8.7" x 2" x 1.2"',
      'Weight': '1.5 lbs',
    },
    amazonLink: 'https://www.amazon.com/Bestqool-Red-Light-Therapy-Device/dp/B08687T6WR',
    userReviews: [
      {
        name: 'Taylor Green',
        rating: 5,
        date: '2025-02-14',
        comment: 'My plants perked up immediately. Great for small grow spaces.',
      },
      {
        name: 'Ryan Patel',
        rating: 5,
        date: '2025-02-09',
        comment: 'Effective and easy to position. Noticeable improvement in growth.',
      },
      {
        name: 'Casey Nguyen',
        rating: 4,
        date: '2025-02-04',
        comment: 'Solid device, but wish it had more power options.',
      },
    ],
  },
  {
    id: 3,
    slug: 'red-light-therapy-panel-wavements',
    name: 'Red Light Therapy Panel with Wavements',
    price: 249,
    rating: 4.7,
    reviews: 345,
    image: 'https://m.media-amazon.com/images/I/714yjl-XNHL._AC_SX679_.jpg',
    images: [
      'https://m.media-amazon.com/images/I/714yjl-XNHL._AC_SX679_.jpg',
      '/placeholder.svg?key=img1',
      '/placeholder.svg?key=img2',
    ],
    category: 'lighting',
    description: 'Full-body red light therapy panel featuring advanced wavement technology for deeper penetration and enhanced plant vitality and health benefits.',
    features: [
      'Multiple wavelengths including 660nm, 850nm',
      'Wavement design for uniform light distribution',
      'Wall-mountable or freestanding',
      'Built-in cooling fan',
      'Remote control operation',
      'High irradiance for efficient sessions',
    ],
    specifications: {
      'Power': '300W',
      'LEDs': '300',
      'Irradiance': '150 mW/cm²',
      'Wavelengths': '630nm, 660nm, 810nm, 830nm, 850nm',
      'Dimensions': '36" x 12" x 2.5"',
      'Weight': '18 lbs',
    },
    amazonLink: 'https://www.amazon.com/Red-Light-Therapy-Panel-Wavements/dp/B0FP2V3PB6',
    userReviews: [
      {
        name: 'Morgan Davis',
        rating: 5,
        date: '2025-02-13',
        comment: 'Transformed my grow op. Plants are bushier and healthier.',
      },
      {
        name: 'Riley Thompson',
        rating: 5,
        date: '2025-02-08',
        comment: 'Love the wavement tech – even coverage without hot spots.',
      },
      {
        name: 'Avery Wilson',
        rating: 4,
        date: '2025-02-03',
        comment: 'Powerful panel, but a bit heavy to move around.',
      },
    ],
  },
  {
    id: 4,
    slug: 'vivosun-ph-meter',
    name: 'VIVOSUN Digital pH Meter 0.05ph High Accuracy',
    price: 12,
    rating: 4.6,
    reviews: 4500,
    image: 'https://m.media-amazon.com/images/I/61saEhctTWL._SX522_.jpg',
    images: [
      'https://m.media-amazon.com/images/I/61saEhctTWL._SX522_.jpg',
      '/placeholder.svg?key=img1',
      '/placeholder.svg?key=img2',
    ],
    category: 'monitoring',
    description: 'High-accuracy digital pH meter with temperature readout for precise measurement in hydroponic and soil solutions.',
    features: [
      '0.05 pH accuracy',
      'Automatic temperature compensation',
      'Backlit LCD display',
      'Easy 3-point calibration',
      'Compact and portable',
      'Includes calibration powders',
    ],
    specifications: {
      'pH Range': '0-14',
      'pH Resolution': '0.01',
      'Temperature Range': '0-60°C',
      'Battery': '3x 1.5V',
      'Dimensions': '7.5" x 1.6" x 1.3"',
      'Weight': '3.5 oz',
    },
    amazonLink: 'https://www.amazon.com/VIVOSUN-0-05ph-Accuracy-Readout-Temperature/dp/B06XKMH86J',
    userReviews: [
      {
        name: 'Jordan Baker',
        rating: 5,
        date: '2025-02-12',
        comment: 'Spot on accuracy for my hydro setup. Calibration is simple.',
      },
      {
        name: 'Cameron Rivera',
        rating: 4,
        date: '2025-02-07',
        comment: 'Reliable meter, great price. Holds calibration well.',
      },
      {
        name: 'Skyler Morales',
        rating: 5,
        date: '2025-02-02',
        comment: 'Essential tool – readings are consistent every time.',
      },
    ],
  },
  {
    id: 5,
    slug: 'hydrologic-evolution-ro1000',
    name: 'HydroLogic Evolution RO1000 High Flow Reverse Osmosis',
    price: 399,
    rating: 4.8,
    reviews: 1200,
    image: 'https://m.media-amazon.com/images/I/51i+7fLsBfL._SX522_.jpg',
    images: [
      'https://m.media-amazon.com/images/I/51i+7fLsBfL._SX522_.jpg',
      '/placeholder.svg?key=img1',
      '/placeholder.svg?key=img2',
    ],
    category: 'hydro',
    description: 'High-capacity reverse osmosis system for purifying water in large-scale hydroponic applications, producing up to 1000 GPD.',
    features: [
      'Four-stage filtration',
      'High flow rate for commercial use',
      'Removes 98%+ of contaminants',
      'Permeate flush controller',
      'Durable metal brackets',
      'Quick connect fittings',
    ],
    specifications: {
      'Capacity': '1000 GPD',
      'Stages': '4 (Sediment, Carbon, RO Membrane, Polish)',
      'Rejection Rate': '98%',
      'Feed Pressure': '40-60 PSI',
      'Dimensions': '19" x 6" x 17"',
      'Weight': '30 lbs',
    },
    amazonLink: 'https://www.amazon.com/HydroLogic-EvolutionRO1000-High-Flow-Reverse-Osmosis/dp/B004LNUNKE',
    userReviews: [
      {
        name: 'Dakota Hill',
        rating: 5,
        date: '2025-02-11',
        comment: 'Pure water for my entire grow room. Easy to install and maintain.',
      },
      {
        name: 'Quinn Adams',
        rating: 5,
        date: '2025-02-06',
        comment: 'High quality filtration – TDS dropped dramatically.',
      },
      {
        name: 'Reese Carter',
        rating: 4,
        date: '2025-02-01',
        comment: 'Great system, but needs good incoming pressure.',
      },
    ],
  },
  {
    id: 6,
    slug: 'vivosun-5-gallon-dwc-hydroponics-grow-system',
    name: 'VIVOSUN 5-Gallon DWC Hydroponics Grow System with Buckets',
    price: 89,
    rating: 4.7,
    reviews: 2100,
    image: 'https://m.media-amazon.com/images/I/81Gg0RCO9IL._AC_SX679_.jpg',
    images: [
      'https://m.media-amazon.com/images/I/81Gg0RCO9IL._AC_SX679_.jpg',
      '/placeholder.svg?key=img1',
      '/placeholder.svg?key=img2',
    ],
    category: 'hydro',
    description: 'Complete deep water culture hydroponic system with 5-gallon buckets for easy setup and high-yield plant growth.',
    features: [
      'Includes air pump and stones',
      'Tangle-free disc roots support',
      'Check valve for safety',
      'Expandable to more buckets',
      'Ideal for beginners',
      'Promotes rapid root development',
    ],
    specifications: {
      'Buckets': '4 x 5-gallon',
      'Air Pump': '1200 GPH',
      'Plants': 'Up to 4',
      'Material': 'Food-grade plastic',
      'Dimensions': 'Varies by setup',
      'Weight': '15 lbs (kit)',
    },
    amazonLink: 'https://www.amazon.com/VIVOSUN-Hydroponics-Grow-System-Buckets/dp/B09M2NZNPT',
    userReviews: [
      {
        name: 'Parker Evans',
        rating: 5,
        date: '2025-02-10',
        comment: 'Simple to assemble, my veggies are thriving in weeks.',
      },
      {
        name: 'Logan Torres',
        rating: 5,
        date: '2025-02-05',
        comment: 'Best starter hydro kit. Quiet air pump too.',
      },
      {
        name: 'Drew Garcia',
        rating: 4,
        date: '2025-01-31',
        comment: 'Solid system, just needed extra tubing for expansion.',
      },
    ],
  },
  {
    id: 7,
    slug: 'lifegard-aquatics-quiet-one-powerhead',
    name: 'Lifegard Aquatics Quiet One Powerhead Model',
    price: 45,
    rating: 4.5,
    reviews: 600,
    image: 'https://m.media-amazon.com/images/I/31t9-lztKWL._AC_.jpg',
    images: [
      'https://m.media-amazon.com/images/I/31t9-lztKWL._AC_.jpg',
      '/placeholder.svg?key=img1',
      '/placeholder.svg?key=img2',
    ],
    category: 'hydro',
    description: 'Quiet and efficient submersible powerhead pump for circulation in aquariums and hydroponic reservoirs.',
    features: [
      'Ultra-quiet operation',
      'Magnetic drive technology',
      'Adjustable flow rate',
      'Corrosion-resistant materials',
      'Easy maintenance',
      'Safe for continuous use',
    ],
    specifications: {
      'Flow Rate': 'Variable up to 528 GPH',
      'Power': '25W',
      'Cord Length': '10 ft',
      'Dimensions': '3.5" x 2.5" x 2"',
      'Weight': '1 lb',
    },
    amazonLink: 'https://www.amazon.com/Lifegard-Aquatics-Quiet-One-Model/dp/B0CGGGM15Y',
    userReviews: [
      {
        name: 'Finley Scott',
        rating: 5,
        date: '2025-02-09',
        comment: 'Whisper quiet and powerful. Perfect for my reservoir.',
      },
      {
        name: 'Ellis Mitchell',
        rating: 4,
        date: '2025-02-04',
        comment: 'Reliable pump, flow adjustment is smooth.',
      },
      {
        name: 'Blake Perez',
        rating: 5,
        date: '2025-01-30',
        comment: 'No vibrations, keeps water moving without noise.',
      },
    ],
  },
]
export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug)
}

export function getProductById(id: number): Product | undefined {
  return products.find(p => p.id === id)
}
