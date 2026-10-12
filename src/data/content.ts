export const BRAND = {
  name: 'Wild Bunch Wellness Bar',
  logo: 'https://i.ibb.co/KpXf7KPq/387112015-122104189364067498-3333333892435933230-n.jpg',
  tagline: 'Tastes Like a Cheat Meal, Fuels Your Body Like a Power Meal.',
  subTagline: '100% Raw, Natural, and Organic Ingredients — Absolutely Nothing Artificial.',
  hours: 'Mon – Sun: 7:00 AM – 2:00 PM',
  address: '71 E Market St, Downtown Tiffin, Ohio',
  phone: '(567) 938-8900',
  email: 'wildbunchwellnessbar@gmail.com',
  instagram: '@wildbunchwellnessbar',
  doorDash: 'https://www.doordash.com',
  facebook: 'https://www.facebook.com',
  instagramUrl: 'https://www.instagram.com',
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
  price: string;
  description: string;
  image: string;
  category: MenuCategory;
  tag?: string;
}

export const MENU_ITEMS: MenuItem[] = [
  {
    name: 'Detox Juice',
    price: '$14.40',
    description: 'Organic Apple, Cucumber, Celery, Spinach, Kale, Parsley, Lemon, and Activated Charcoal for a deep cellular cleanse.',
    image: 'https://images.pexels.com/photos/4443492/pexels-photo-4443492.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Cold-Pressed Juices & Cleanses',
    tag: 'Signature',
  },
  {
    name: '1-Day Juice Cleanse',
    price: '$80.40',
    description: 'A complete daily reset featuring Pineapple, Blue, Carrot, Beet, Strong Green, and Pink juices — six bottles, one transformation.',
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
    description: 'A grounding herbal blend of Echinacea, Elderberry, Ginger Root, and Raw Honey. Crafted to fortify your immune system.',
    image: 'https://images.pexels.com/photos/6653917/pexels-photo-6653917.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Organic Hot & Iced Teas',
    tag: 'Immunity',
  },
  {
    name: 'Awaken Tea',
    price: '$4.20',
    description: 'Yerba Mate, Peppermint, Lemongrass, and Ginseng. A clean, jitter-free awakening for body and mind.',
    image: 'https://images.pexels.com/photos/1034044/pexels-photo-1034044.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Organic Hot & Iced Teas',
  },
  {
    name: 'Full Moon Tea',
    price: '$4.20',
    description: 'Chamomile, Lavender, Valerian Root, and Rose Petals. A nocturnal ritual for deep, restorative rest.',
    image: 'https://images.pexels.com/photos/10584487/pexels-photo-10584487.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Organic Hot & Iced Teas',
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

export const RETAIL_PRODUCTS: RetailProduct[] = [
  {
    name: 'Organic Essential Oils',
    brand: 'Rowe Casa Organics',
    description: 'Pure, therapeutic-grade essential oils — lavender, eucalyptus, peppermint, and tea tree. Steam-distilled, never diluted.',
    image: 'https://images.pexels.com/photos/19572633/pexels-photo-19572633.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Rowe Casa Organics',
  },
  {
    name: 'Natural Skincare Set',
    brand: 'Rowe Casa Organics',
    description: 'Clean, non-toxic skincare — facial serum, toner, and moisturizer crafted with organic botanicals and cold-pressed oils.',
    image: 'https://images.pexels.com/photos/7615819/pexels-photo-7615819.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Rowe Casa Organics',
  },
  {
    name: 'Household Remedies',
    brand: 'Rowe Casa Organics',
    description: 'Chemical-free home wellness — natural cleaning concentrates, immune support tinctures, and herbal salves.',
    image: 'https://images.pexels.com/photos/7615558/pexels-photo-7615558.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Rowe Casa Organics',
  },
  {
    name: 'Organic Dog Treats',
    brand: 'Curly and Spot',
    description: 'Small-batch, human-grade organic treats for your beloved companion. Free-range, grain-free, and lovingly baked.',
    image: 'https://images.pexels.com/photos/7309473/pexels-photo-7309473.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Curly and Spot',
  },
  {
    name: 'Grain-Free Biscuits',
    brand: 'Curly and Spot',
    description: 'Wholesome biscuits made with sweet potato, turmeric, and coconut oil. Gentle on sensitive tummies, big on flavor.',
    image: 'https://images.pexels.com/photos/8121142/pexels-photo-8121142.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Curly and Spot',
  },
  {
    name: 'Signature Apparel',
    brand: 'Wild Bunch Wellness',
    description: 'Premium organic cotton apparel — sweatshirts, tees, and totes featuring the Wild Bunch crest. Soft, sustainable, stylish.',
    image: 'https://images.pexels.com/photos/9594422/pexels-photo-9594422.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Wild Bunch Apparel',
  },
];

export const FOUNDER = {
  name: 'Lacie Pace',
  title: 'Registered Nurse & Founder',
  experience: '20+ Years',
  image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=900',
  bio: [
    'Lacie Pace is a Registered Nurse with over 20 years of dedicated healthcare experience. After two decades at the bedside — witnessing firsthand the profound connection between what we put into our bodies and how we heal — she felt called to create something deeper than conventional care.',
    'Wild Bunch Wellness Bar was born from that calling: a sanctuary where premium, non-toxic, chemical-free nutrition is available to everyone in the community. Every juice is cold-pressed to order, every bowl is built with intention, and every ingredient is traceable to the organic farms it came from.',
    'This is not a trend. It is a nurse\'s vision — evidence-based, heart-led, and unwaveringly committed to helping people fuel their bodies the way nature intended.',
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
    keywords: ['own', 'owner', 'found', 'who', 'lacie', 'nurse'],
    answer: 'Wild Bunch Wellness Bar was founded by Lacie Pace, a Registered Nurse with 20+ years of healthcare experience!',
  },
  {
    question: 'What are your hours?',
    keywords: ['hour', 'open', 'time', 'when', 'close', 'day'],
    answer: 'We are open every day from 7:00 AM to 2:00 PM.',
  },
  {
    question: 'Where are you located?',
    keywords: ['where', 'location', 'address', 'find', 'direction', 'tiffin', 'market'],
    answer: 'Visit us at 71 E Market St, Downtown Tiffin, Ohio.',
  },
  {
    question: 'Do you deliver?',
    keywords: ['deliver', 'doordash', 'order', 'online', 'shipping', 'ship'],
    answer: 'Yes! You can order directly through our official DoorDash partner — check the Contact page for the link.',
  },
  {
    question: 'What do you serve?',
    keywords: ['menu', 'serve', 'food', 'juice', 'tea', 'smoothie', 'bowl', 'eat', 'drink'],
    answer: 'We offer cold-pressed juices, juice cleanses, organic hot & iced teas, superfood smoothies, acai bowls, avocado toast, grain bowls, and roasted veggie paninis. Explore the full Menu page!',
  },
  {
    question: 'How can I contact you?',
    keywords: ['contact', 'phone', 'email', 'call', 'reach', 'social', 'instagram', 'facebook'],
    answer: 'Call us at (567) 938-8900 or email wildbunchwellnessbar@gmail.com. You can also find us on Facebook and Instagram @wildbunchwellnessbar.',
  },
  {
    question: 'Are ingredients really organic?',
    keywords: ['organic', 'natural', 'raw', 'artificial', 'chemical', 'ingredient', 'clean'],
    answer: 'Absolutely. Everything we serve is 100% raw, natural, and organic — no artificial ingredients, ever. That is our core promise.',
  },
];
