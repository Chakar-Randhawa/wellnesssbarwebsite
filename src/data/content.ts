export const BRAND = {
  name: 'Wild Bunch Wellness Bar',
  logo: 'https://i.ibb.co/KpXf7KPq/387112015-122104189364067498-3333333892435933230-n.jpg',
  tagline: 'Tastes Like a Cheat Meal, Fuels Your Body Like a Power Meal.',
  subTagline: '100% Raw, Natural, and Organic Ingredients — Absolutely Nothing Artificial.',
  hours: 'Mon - Sun: 7:00 AM - 2:00 PM',
  address: '71 E Market St, Downtown Tiffin, Ohio',
  phone: '(567) 938-8900',
  email: 'wildbunchwellnessbar@gmail.com',
  instagram: '@wildbunchwellnessbar',
  doorDash: 'https://www.doordash.com/store/wild-bunch-wellness-bar-tiffin-34456569/',
  facebook: 'https://www.facebook.com/p/Wild-Bunch-Wellness-Bar-61552024956606/',
  instagramUrl: 'https://www.instagram.com/wildbunchwellnessbar/',
};

export type PageId = 'home' | 'menu' | 'story' | 'retail' | 'contact';

export const NAV_LINKS: { id: PageId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'menu', label: 'Menu' },
  { id: 'story', label: 'Our Story' },
  { id: 'retail', label: 'Retail' },
  { id: 'contact', label: 'Contact' },
];

export const HERO_SLIDES = [
  'https://images.pexels.com/photos/29851973/pexels-photo-29851973.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/4443492/pexels-photo-4443492.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/27518954/pexels-photo-27518954.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/4239/restaurant-drink-colorful-colourful.jpg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/12955498/pexels-photo-12955498.jpeg?auto=compress&cs=tinysrgb&w=1600',
];

export type MenuCategory =
  | 'Cold-Pressed Juices & Cleanses'
  | 'Organic Hot & Iced Teas'
  | 'Superfood Smoothies & Bowls'
  | 'Kitchen & Savory';

export interface MenuItem {
  name: string;
  price?: string;
  description: string;
  image: string;
  category: MenuCategory;
  tag?: string;
}

export const MENU_ITEMS: MenuItem[] = [
  {
    name: 'Detox Juice',
    price: '$14.40',
    description: 'Organic Apple, Cucumber, Celery, Spinach, Kale, Parsley, Lemon, and Activated Charcoal.',
    image: 'https://images.pexels.com/photos/4443492/pexels-photo-4443492.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Cold-Pressed Juices & Cleanses',
    tag: 'Signature',
  },
  {
    name: '1-Day Juice Cleanse',
    price: '$80.40',
    description: 'Includes Pineapple, Blue, Carrot, Beet, Strong Green, and Pink juices — six bottles to carry you through the day.',
    image: 'https://images.pexels.com/photos/29851973/pexels-photo-29851973.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Cold-Pressed Juices & Cleanses',
    tag: 'Bestseller',
  },
  {
    name: 'Strong Green Juice',
    price: '$12.40',
    description: 'Kale, Spinach, Cucumber, Celery, Green Apple, Lemon, and Ginger. Pure chlorophyll energy in every sip.',
    image: 'https://images.pexels.com/photos/4443490/pexels-photo-4443490.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Cold-Pressed Juices & Cleanses',
  },
  {
    name: 'Pink Juice',
    price: '$12.40',
    description: 'Beet, Carrot, Apple, Lemon, and Ginger. Radiant, vibrant, and naturally sweet.',
    image: 'https://images.pexels.com/photos/8679336/pexels-photo-8679336.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Cold-Pressed Juices & Cleanses',
  },
  {
    name: 'Defender Tea',
    price: '$4.20',
    description: 'Echinacea, lemon balm, nettle, astragalus root, elderberry, licorice root, orange peel, and ginger.',
    image: 'https://images.pexels.com/photos/6653917/pexels-photo-6653917.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Organic Hot & Iced Teas',
    tag: 'Tea Blend',
  },
  {
    name: 'Awaken Tea',
    price: '$4.20',
    description: 'Sencha green tea, peppermint, spearmint, nettle, lemongrass, and eleuthero root.',
    image: 'https://images.pexels.com/photos/1034044/pexels-photo-1034044.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Organic Hot & Iced Teas',
    tag: 'Tea Blend',
  },
  {
    name: 'Full Moon Tea',
    price: '$4.20',
    description: 'Red raspberry leaf, nettle, lemon balm, oat straw, rose hips, hibiscus, and ginger.',
    image: 'https://images.pexels.com/photos/10584487/pexels-photo-10584487.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Organic Hot & Iced Teas',
    tag: 'Tea Blend',
  },
  {
    name: 'Creamy Peanut Butter Smoothie',
    description: 'A rich, creamy peanut butter smoothie — a satisfying power-meal in a cup.',
    image: 'https://images.pexels.com/photos/37283271/pexels-photo-37283271.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Superfood Smoothies & Bowls',
    tag: 'Contains Peanuts',
  },
  {
    name: 'Acai Bowl',
    price: '$11.80',
    description: 'Brazilian acai blended with banana and almond milk, topped with fresh berries, granola, coconut flakes, and raw honey.',
    image: 'https://images.pexels.com/photos/20348546/pexels-photo-20348546.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Superfood Smoothies & Bowls',
    tag: 'Bestseller',
  },
  {
    name: 'Homemade Granola Bowl',
    price: '$9.60',
    description: 'House-rolled oats, nuts, and seeds baked with maple and coconut oil. Served with seasonal fruit and almond milk.',
    image: 'https://images.pexels.com/photos/19318453/pexels-photo-19318453.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Superfood Smoothies & Bowls',
  },
  {
    name: 'Avocado Toast',
    price: '$10.40',
    description: 'Thick-cut artisan toast, smashed avocado, cherry tomato, microgreens, hemp seeds, and a drizzle of cold-pressed olive oil.',
    image: 'https://images.pexels.com/photos/3957527/pexels-photo-3957527.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Kitchen & Savory',
    tag: 'Signature',
  },
  {
    name: 'Greek Grain Bowl',
    price: '$13.20',
    description: 'Quinoa, chickpeas, cucumber, Kalamata olives, feta, red onion, and house tzatziki. Mediterranean nourishment.',
    image: 'https://images.pexels.com/photos/12955498/pexels-photo-12955498.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Kitchen & Savory',
  },
  {
    name: 'Roasted Veggie Panini',
    price: '$12.60',
    description: 'Fire-roasted zucchini, bell pepper, eggplant, and artisan cheese on pressed sourdough. Warm, crisp, and satisfying.',
    image: 'https://images.pexels.com/photos/23996590/pexels-photo-23996590.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Kitchen & Savory',
  },
  {
    name: 'Pineapple Turmeric Shot',
    price: '$6.80',
    description: 'A potent 2oz wellness shot of fresh pineapple, turmeric root, ginger, and black pepper. Anti-inflammatory gold.',
    image: 'https://images.pexels.com/photos/4443464/pexels-photo-4443464.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Cold-Pressed Juices & Cleanses',
    tag: 'Wellness Shot',
  },
  {
    name: 'Citrus Immunity Shot',
    price: '$6.80',
    description: 'Orange, lemon, ginger, and camu camu — packed with vitamin C to power up your immune system in one gulp.',
    image: 'https://images.pexels.com/photos/4443460/pexels-photo-4443460.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Cold-Pressed Juices & Cleanses',
  },
  {
    name: 'Carrot Beet Glow',
    price: '$12.40',
    description: 'Carrot, beet, apple, lemon, and ginger. Rich in beta-carotene and nitrates for radiant skin and healthy blood flow.',
    image: 'https://images.pexels.com/photos/161440/smoothie-fruit-vegetables-salad-beetroot-carrots-161440.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Cold-Pressed Juices & Cleanses',
  },
  {
    name: 'Garden Green Smoothie',
    price: '$10.80',
    description: 'Spinach, cucumber, green apple, banana, and almond milk. A nutrient-dense green boost that actually tastes amazing.',
    image: 'https://images.pexels.com/photos/37283271/pexels-photo-37283271.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Superfood Smoothies & Bowls',
  },
  {
    name: 'Tropical Berry Bowl',
    price: '$12.20',
    description: 'Dragon fruit and mango smoothie base topped with banana, fresh berries, granola, and edible flowers. A feast for the eyes.',
    image: 'https://images.pexels.com/photos/12320125/pexels-photo-12320125.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Superfood Smoothies & Bowls',
    tag: 'New',
  },
  {
    name: 'Iced Mint Citrus Tea',
    price: '$5.20',
    description: 'Cold-brewed peppermint and lemongrass over ice with fresh citrus and a touch of raw honey. Crisp and cooling.',
    image: 'https://images.pexels.com/photos/37515852/pexels-photo-37515852.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Organic Hot & Iced Teas',
    tag: 'Iced',
  },
  {
    name: 'Iced Peach Citrus Tea',
    price: '$5.20',
    description: 'Organic black tea infused with peach and orange, served over ice. Naturally sweetened with fruit — no sugar added.',
    image: 'https://images.pexels.com/photos/7703248/pexels-photo-7703248.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Organic Hot & Iced Teas',
  },
  {
    name: 'Buddha Power Bowl',
    price: '$14.40',
    description: 'Quinoa, roasted sweet potato, chickpeas, avocado, spinach, and pomegranate seeds with a tahini-lemon drizzle.',
    image: 'https://images.pexels.com/photos/17597408/pexels-photo-17597408.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Kitchen & Savory',
    tag: 'New',
  },
  {
    name: 'Mediterranean Quinoa Bowl',
    price: '$13.80',
    description: 'Quinoa, cherry tomato, cucumber, feta, Kalamata olives, and pomegranate with a bright herb vinaigrette.',
    image: 'https://images.pexels.com/photos/5639353/pexels-photo-5639353.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Kitchen & Savory',
  },
];

export const MENU_CATEGORIES: (MenuCategory | 'All')[] = [
  'All',
  'Cold-Pressed Juices & Cleanses',
  'Organic Hot & Iced Teas',
  'Superfood Smoothies & Bowls',
  'Kitchen & Savory',
];

export interface RetailProduct {
  name: string;
  brand: string;
  description: string;
  image: string;
  category: string;
}

export const RETAIL_CATEGORIES = ['All', 'Rowe Casa Organics', 'Curly and Spot', 'Wild Bunch & More'];

export const RETAIL_BRANDS = [
  {
    name: 'Rowe Casa Organics',
    tagline: 'Non-toxic home & body',
    blurb: 'Supplements, essential oils, skincare, household cleaners, and first-aid remedies.',
  },
  {
    name: 'Curly and Spot',
    tagline: 'Organic dog treats',
    blurb: 'Natural and organic dog treats for your four-legged family members.',
  },
  {
    name: 'Wild Bunch & More',
    tagline: 'Wear it. Sip it. Live it.',
    blurb: 'Custom Wild Bunch T-shirts, premium tea leaves, and organic household goods.',
  },
];

export const RETAIL_PRODUCTS: RetailProduct[] = [
  {
    name: 'Supplements',
    brand: 'Rowe Casa Organics',
    description: 'Organic wellness supplements from Rowe Casa Organics, available at the bar.',
    image: 'https://images.pexels.com/photos/7615558/pexels-photo-7615558.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Rowe Casa Organics',
  },
  {
    name: 'Essential Oils',
    brand: 'Rowe Casa Organics',
    description: 'Organic essential oils for your home, your routine, and your well-being.',
    image: 'https://images.pexels.com/photos/19572633/pexels-photo-19572633.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Rowe Casa Organics',
  },
  {
    name: 'Natural Skincare',
    brand: 'Rowe Casa Organics',
    description: 'Clean, non-toxic skincare made with organic ingredients.',
    image: 'https://images.pexels.com/photos/7615819/pexels-photo-7615819.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Rowe Casa Organics',
  },
  {
    name: 'Household Cleaners & First-Aid Remedies',
    brand: 'Rowe Casa Organics',
    description: 'Non-toxic household cleaners and natural first-aid remedies for everyday life.',
    image: 'https://images.pexels.com/photos/7615558/pexels-photo-7615558.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Rowe Casa Organics',
  },
  {
    name: 'Organic Dog Treats',
    brand: 'Curly and Spot',
    description: 'Natural and organic dog treats — because your best friend deserves the good stuff too.',
    image: 'https://images.pexels.com/photos/7309473/pexels-photo-7309473.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Curly and Spot',
  },
  {
    name: 'Wild Bunch T-Shirts',
    brand: 'Wild Bunch Wellness',
    description: 'Custom Wild Bunch T-shirts — wear the mission wherever you go.',
    image: 'https://images.pexels.com/photos/9594422/pexels-photo-9594422.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Wild Bunch & More',
  },
  {
    name: 'Premium Tea Leaves',
    brand: 'Wild Bunch Wellness',
    description: 'Premium loose tea leaves so you can bring the bar\'s teas home.',
    image: 'https://images.pexels.com/photos/6653917/pexels-photo-6653917.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Wild Bunch & More',
  },
  {
    name: 'Organic Household Goods',
    brand: 'Wild Bunch Wellness',
    description: 'A curated selection of organic household goods for a cleaner, calmer home.',
    image: 'https://images.pexels.com/photos/7615558/pexels-photo-7615558.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Wild Bunch & More',
  },
];

export const FOUNDER = {
  name: 'Lacie Pace',
  title: 'Registered Nurse & Founder',
  experience: 'Over 20 Years',
  // Add a real photo URL here (e.g. '/lacie.jpg' placed in the /public folder).
  // While this is empty, a clean placeholder is shown instead.
  image: '',
  bio: [
    'Founded by Lacie Pace, a Registered Nurse with over two decades of experience serving the community. Her deep passion for healing, health, and holistic wellness inspired the creation of Wild Bunch Wellness Bar. We believe that what you put into your body matters, which is why everything we serve is prepared fresh daily using only non-toxic, premium, organic ingredients.',
  ],
};

export interface ChatbotQA {
  question: string;
  keywords: string[];
  answer: string;
}

export const CHATBOT_DATA: ChatbotQA[] = [
  {
    question: 'Who owns the bar?',
    keywords: ['own', 'owner', 'found', 'founder', 'who', 'lacie', 'nurse'],
    answer: 'Wild Bunch Wellness Bar was founded by Lacie Pace, a Registered Nurse with over two decades of experience serving the community.',
  },
  {
    question: 'What are your hours?',
    keywords: ['hour', 'open', 'time', 'when', 'close', 'sunday', 'saturday', 'weekend'],
    answer: 'We are open every day, Monday through Sunday, from 7:00 AM to 2:00 PM.',
  },
  {
    question: 'Where are you located?',
    keywords: ['where', 'location', 'address', 'find', 'direction', 'tiffin', 'market', 'parking'],
    answer: 'Visit us at 71 E Market St, Downtown Tiffin, Ohio. The Contact page has a map and a Get Directions button.',
  },
  {
    question: 'Do you deliver?',
    keywords: ['deliver', 'delivery', 'doordash', 'order', 'online', 'shipping', 'ship'],
    answer: 'Yes! You can order through our DoorDash store — look for the Order on DoorDash button on any page.',
  },
  {
    question: 'What do you serve?',
    keywords: ['menu', 'serve', 'food', 'juice', 'tea', 'smoothie', 'bowl', 'eat', 'drink', 'cleanse', 'toast', 'panini', 'granola'],
    answer: 'We offer cold-pressed juices and cleanses, organic hot & iced teas, smoothies, acai bowls, avocado toast, grain bowls, roasted veggie paninis, and homemade granola. Explore the full Menu page!',
  },
  {
    question: 'How can I contact you?',
    keywords: ['contact', 'phone', 'email', 'call', 'reach', 'social', 'instagram', 'facebook'],
    answer: 'Call us at (567) 938-8900 or email wildbunchwellnessbar@gmail.com. You can also find us on Facebook and Instagram @wildbunchwellnessbar.',
  },
  {
    question: 'Are ingredients really organic?',
    keywords: ['organic', 'natural', 'raw', 'artificial', 'chemical', 'ingredient', 'clean'],
    answer: 'Everything we serve is made with non-toxic, premium, organic ingredients and nothing artificial. That is our core promise.',
  },
  {
    question: 'Do you sell products to take home?',
    keywords: ['retail', 'shop', 'store', 'product', 'merch', 'shirt', 'tshirt', 'oil', 'skincare', 'supplement', 'dog'],
    answer: 'Yes! Our retail corner has Rowe Casa Organics (supplements, essential oils, skincare, household cleaners, first-aid remedies), Curly and Spot dog treats, Wild Bunch T-shirts, premium tea leaves, and organic household goods.',
  },
  {
    question: 'Allergies & dietary needs?',
    keywords: ['allergy', 'allergies', 'allergen', 'gluten', 'vegan', 'vegetarian', 'dairy', 'nut', 'nuts', 'peanut', 'soy', 'diet', 'dietary'],
    answer: 'For allergies or dietary needs, please call us at (567) 938-8900 before ordering so our team can help with ingredient questions.',
  },
];
