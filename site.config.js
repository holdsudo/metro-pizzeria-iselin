// ============================================================
// SITE CONFIG — Metro Pizzeria, 37 Gill Lane, Iselin NJ
// ============================================================
const SITE = {
  meta: {
    title: "Metro Pizzeria — Iselin, NJ | Classic Pies & Desi Specials",
    description: "Metro Pizzeria, 37 Gill Lane, Iselin NJ — by Metropark. Classic pies plus chicken tikka, paneer tikka, Bombay bhaji, kutchi dabeli and falafel pizzas. Takeout & delivery."
  },
  brand: {
    name: "Metro Pizzeria",
    sub: "Iselin \u00b7 by Metropark",
    logoRoundel: "assets/logo-roundel.jpg",
    logoLockup: "assets/logo-lockup.jpg"
  },
  theme: {
    char: "#170a06",
    char2: "#211008",
    maroon: "#47100a",
    maroonDeep: "#2a0c05",
    red: "#cf4a16",
    redHot: "#ef6a1f",
    gold: "#e8a02e",
    yellow: "#f2b21c"
  },
  hero: {
    eyebrow: "37 Gill Lane \u00b7 Iselin, NJ \u00b7 by Metropark",
    h1: ["Classic pies.", "Desi specials."],
    copy: "A neighborhood takeout pizzeria where the classics share the oven with chicken tikka, paneer tikka, Bombay bhaji, and kutchi dabeli pies \u2014 every pie made to order.",
    facts: ["Chicken & Paneer Tikka pies", "4\u2605 on Grubhub \u00b7 delivery & takeout"],
    poster: "assets/stage-tikka.jpg",
    posterCaption: "Tikka pies \u2014 the house signature, out of the oven"
  },
  ticker: [
    "Chicken Tikka \u00b7 Paneer Tikka \u00b7 Bombay Bhaji",
    "Kutchi Dabeli & Falafel pies",
    "Call ahead (732) 535-6656",
    "Delivery & takeout on Grubhub",
    "37 Gill Lane \u00b7 by Metropark"
  ],
  contact: {
    address: "37 Gill Lane, Iselin, NJ 08830",
    phone: "(732) 535-6656",
    phoneHref: "tel:+17325356656",
    hoursLine: "Takeout & delivery",
    orderLine: "Takeout, and delivery via Grubhub"
  },
  links: {
    grubhub: "https://www.grubhub.com/restaurant/metro-pizzeria-37-gill-ln-woodbridge-township/6398128",
    facebook: "https://www.facebook.com/p/Metro-Pizzeria-100093414764377/",
    yelp: "https://www.yelp.com/biz/metro-pizzaria-iselin"
  },
  proofCards: [
    { key: "grubhub", label: "Grubhub", strong: "Order online" },
    { key: "facebook", label: "Facebook", strong: "Local updates" },
    { key: "yelp", label: "Yelp", strong: "Review discovery" }
  ],
  order: {
    inbox: "https://formsubmit.co/ajax/johntaco11@gmail.com",
    liveHosts: ["github.io", "joe-miz.com"],
    taxRate: 0.06625,
    toppingPrice: 1.00,
    orderPrefix: "MP"
  },
  headings: {
    menu: { eyebrow: "The real menu", title: "The pies.", copy: "Twenty-four pies, exactly as they sell them \u2014 the classics, the specialty lineup, and the desi pies the neighborhood knows them for." },
    gallery: { eyebrow: "Straight from the shop", title: "Out of the oven.", copy: "Real pies, the Gill Lane storefront, and the flame-brushed brand \u2014 this is Metro." },
    proof: { eyebrow: "Find us everywhere", title: "Order it. Review it.", copy: "Ordering runs through Grubhub today \u2014 and the deals land on Facebook first." }
  },
  gallery: [
    { src: "assets/food-veggie.jpg", alt: "Veggie pie in the box, fresh out of the oven", caption: "Veggie pie, boxed to go", tall: true },
    { src: "assets/storefront-day.jpg", alt: "Metro Pizzeria storefront on Gill Lane", caption: "Gill Lane, by Metropark" },
    { src: "assets/stage-tikka.jpg", alt: "Paneer tikka pizza closeup", caption: "The tikka pie, house signature" },
    { src: "assets/brand-flame.jpg", alt: "Metro Pizzeria flame brand artwork", caption: "The flame mark" },
    { src: "assets/poster-superbowl.jpg", alt: "Super Bowl special deal poster", caption: "Game-day specials on Facebook" }
  ],
  visit: {
    eyebrow: "Visit the shop",
    title: "Right off Metropark.",
    photo: "assets/storefront-wide.jpg",
    note: "Takeout & delivery. Call ahead for faster pickup."
  },
  menu: {
    categories: [
      { id: 'classics', label: 'Classics' },
      { id: 'specialty', label: 'Specialty Pies' },
      { id: 'desi', label: 'Desi & Fusion' }
    ],
    items: [
      { id: 'classic-pizza', photo: 'assets/gh-classic-pizza.jpg', category: 'classics', name: 'Classic Pizza', description: 'Shredded mozzarella and pizza sauce.', basePrice: 8.00, sizes: ['One size'], toppings: ['Pepperoni', 'Sausage', 'Bacon', 'Meatballs', 'Chicken', 'Ham', 'Onions', 'Peppers', 'Mushrooms', 'Broccoli', 'Spinach', 'Black olives', 'Jalape\u00f1os', 'Garlic', 'Pineapple', 'Extra cheese'] },
      { id: 'margherita-pizza', photo: 'assets/gh-margherita-pizza.jpg', category: 'classics', name: 'Margherita Pizza', description: 'Fresh mozzarella, fresh basil, olive oil and margherita sauce.', basePrice: 10.00, sizes: ['One size'], toppings: ['Pepperoni', 'Sausage', 'Bacon', 'Meatballs', 'Chicken', 'Ham', 'Onions', 'Peppers', 'Mushrooms', 'Broccoli', 'Spinach', 'Black olives', 'Jalape\u00f1os', 'Garlic', 'Pineapple', 'Extra cheese'] },
      { id: 'pepperoni-pizza', photo: 'assets/gh-pepperoni-pizza.jpg', category: 'classics', name: 'Pepperoni Pizza', description: 'Sliced pepperoni, shredded mozzarella and pizza sauce.', basePrice: 9.00, sizes: ['One size'], toppings: ['Pepperoni', 'Sausage', 'Bacon', 'Meatballs', 'Chicken', 'Ham', 'Onions', 'Peppers', 'Mushrooms', 'Broccoli', 'Spinach', 'Black olives', 'Jalape\u00f1os', 'Garlic', 'Pineapple', 'Extra cheese'] },
      { id: 'onions-and-peppers-pizza', photo: 'assets/gh-onions-and-peppers-pizza.jpg', category: 'classics', name: 'Onions and Peppers Pizza', description: 'Sliced onions, peppers, shredded mozzarella and pizza sauce.', basePrice: 9.00, sizes: ['One size'], toppings: ['Pepperoni', 'Sausage', 'Bacon', 'Meatballs', 'Chicken', 'Ham', 'Onions', 'Peppers', 'Mushrooms', 'Broccoli', 'Spinach', 'Black olives', 'Jalape\u00f1os', 'Garlic', 'Pineapple', 'Extra cheese'] },
      { id: 'hawaiian-pizza', photo: 'assets/gh-hawaiian-pizza.jpg', category: 'classics', name: 'Hawaiian Pizza', description: 'Sliced ham, juicy pineapple, shredded mozzarella & pizza sauce.', basePrice: 11.00, sizes: ['One size'], toppings: ['Pepperoni', 'Sausage', 'Bacon', 'Meatballs', 'Chicken', 'Ham', 'Onions', 'Peppers', 'Mushrooms', 'Broccoli', 'Spinach', 'Black olives', 'Jalape\u00f1os', 'Garlic', 'Pineapple', 'Extra cheese'] },
      { id: 'four-cheese-pizza', photo: '', category: 'classics', name: 'Four Cheese Pizza', description: 'Ricotta, mozzarella, Romano, and provolone cheese.', basePrice: 10.00, sizes: ['One size'], toppings: ['Pepperoni', 'Sausage', 'Bacon', 'Meatballs', 'Chicken', 'Ham', 'Onions', 'Peppers', 'Mushrooms', 'Broccoli', 'Spinach', 'Black olives', 'Jalape\u00f1os', 'Garlic', 'Pineapple', 'Extra cheese'] },
      { id: 'white-pizza', photo: '', category: 'classics', name: 'White Pizza', description: 'A blend of ricotta & other shredded cheeses with broccoli or spinach or tomato.', basePrice: 10.00, sizes: ['One size'], toppings: ['Pepperoni', 'Sausage', 'Bacon', 'Meatballs', 'Chicken', 'Ham', 'Onions', 'Peppers', 'Mushrooms', 'Broccoli', 'Spinach', 'Black olives', 'Jalape\u00f1os', 'Garlic', 'Pineapple', 'Extra cheese'] },
      { id: 'fresh-garlic-onions-pizza', photo: '', category: 'classics', name: 'Fresh Garlic & Onions Pizza', description: 'Sliced onions, garlic, shredded mozzarella & pizza sauce.', basePrice: 9.00, sizes: ['One size'], toppings: ['Pepperoni', 'Sausage', 'Bacon', 'Meatballs', 'Chicken', 'Ham', 'Onions', 'Peppers', 'Mushrooms', 'Broccoli', 'Spinach', 'Black olives', 'Jalape\u00f1os', 'Garlic', 'Pineapple', 'Extra cheese'] },
      { id: 'philly-steak-pizza', photo: 'assets/gh-philly-steak-pizza.jpg', category: 'specialty', name: 'Philly Steak Pizza', description: 'Philly steak, onions, peppers, american cheese, shredded mozzarella & pizza sauce.', basePrice: 10.00, sizes: ['One size'], toppings: ['Pepperoni', 'Sausage', 'Bacon', 'Meatballs', 'Chicken', 'Ham', 'Onions', 'Peppers', 'Mushrooms', 'Broccoli', 'Spinach', 'Black olives', 'Jalape\u00f1os', 'Garlic', 'Pineapple', 'Extra cheese'] },
      { id: 'bbq-chicken-pizza', photo: 'assets/gh-bbq-chicken-pizza.jpg', category: 'specialty', name: 'BBQ Chicken Pizza', description: 'Crispy bbq chicken & shredded mozzarella, drizzled with BBQ sauce.', basePrice: 10.00, sizes: ['One size'], toppings: ['Pepperoni', 'Sausage', 'Bacon', 'Meatballs', 'Chicken', 'Ham', 'Onions', 'Peppers', 'Mushrooms', 'Broccoli', 'Spinach', 'Black olives', 'Jalape\u00f1os', 'Garlic', 'Pineapple', 'Extra cheese'] },
      { id: 'buffalo-chicken-pizza', photo: 'assets/gh-buffalo-chicken-pizza.jpg', category: 'specialty', name: 'Buffalo Chicken Pizza', description: 'Crispy buffalo chicken & shredded mozzarella, drizzled with blue cheese dressing.', basePrice: 10.00, sizes: ['One size'], toppings: ['Pepperoni', 'Sausage', 'Bacon', 'Meatballs', 'Chicken', 'Ham', 'Onions', 'Peppers', 'Mushrooms', 'Broccoli', 'Spinach', 'Black olives', 'Jalape\u00f1os', 'Garlic', 'Pineapple', 'Extra cheese'] },
      { id: 'veggie-lovers-pizza', photo: 'assets/gh-veggie-lovers-pizza.jpg', category: 'specialty', name: 'Veggie Lovers Pizza', description: 'Broccoli, mushrooms, onions, peppers, olives, shredded mozzarella & pizza sauce.', basePrice: 10.00, sizes: ['One size'], toppings: ['Pepperoni', 'Sausage', 'Bacon', 'Meatballs', 'Chicken', 'Ham', 'Onions', 'Peppers', 'Mushrooms', 'Broccoli', 'Spinach', 'Black olives', 'Jalape\u00f1os', 'Garlic', 'Pineapple', 'Extra cheese'] },
      { id: 'six-alarm-pizza', photo: '', category: 'specialty', name: 'Six Alarm Pizza', description: 'Shredded beef, fresh saisa, jalapeños, creamy chipotle sauce, shredded mozzarella & pizza sauce.', basePrice: 10.00, sizes: ['One size'], toppings: ['Pepperoni', 'Sausage', 'Bacon', 'Meatballs', 'Chicken', 'Ham', 'Onions', 'Peppers', 'Mushrooms', 'Broccoli', 'Spinach', 'Black olives', 'Jalape\u00f1os', 'Garlic', 'Pineapple', 'Extra cheese'] },
      { id: 'maxican-pizza', photo: '', category: 'specialty', name: 'Maxican Pizza', description: 'Sausage, pepperoni, onions, mushrooms, jalapeños, shredded mozzarella & pizza sauce.', basePrice: 10.00, sizes: ['One size'], toppings: ['Pepperoni', 'Sausage', 'Bacon', 'Meatballs', 'Chicken', 'Ham', 'Onions', 'Peppers', 'Mushrooms', 'Broccoli', 'Spinach', 'Black olives', 'Jalape\u00f1os', 'Garlic', 'Pineapple', 'Extra cheese'] },
      { id: 'the-works-pizza', photo: '', category: 'specialty', name: 'The Works Pizza', description: 'Sausage, pepperoni, onions, peppers, mushrooms, shredded mozzarella & pizza sauce.', basePrice: 10.00, sizes: ['One size'], toppings: ['Pepperoni', 'Sausage', 'Bacon', 'Meatballs', 'Chicken', 'Ham', 'Onions', 'Peppers', 'Mushrooms', 'Broccoli', 'Spinach', 'Black olives', 'Jalape\u00f1os', 'Garlic', 'Pineapple', 'Extra cheese'] },
      { id: 'chicken-bacon-ranch-pizza', photo: '', category: 'specialty', name: 'Chicken, Bacon, Ranch Pizza', description: 'Crispy chicken, bacon & shredded mozzarella, drizzled with creamy ranch dressing.', basePrice: 10.00, sizes: ['One size'], toppings: ['Pepperoni', 'Sausage', 'Bacon', 'Meatballs', 'Chicken', 'Ham', 'Onions', 'Peppers', 'Mushrooms', 'Broccoli', 'Spinach', 'Black olives', 'Jalape\u00f1os', 'Garlic', 'Pineapple', 'Extra cheese'] },
      { id: 'chicken-pesto-pizza', photo: '', category: 'specialty', name: 'Chicken Pesto Pizza', description: 'Chicken, roasted peppers, fresh mozzarella & pesto sauce.', basePrice: 10.00, sizes: ['One size'], toppings: ['Pepperoni', 'Sausage', 'Bacon', 'Meatballs', 'Chicken', 'Ham', 'Onions', 'Peppers', 'Mushrooms', 'Broccoli', 'Spinach', 'Black olives', 'Jalape\u00f1os', 'Garlic', 'Pineapple', 'Extra cheese'] },
      { id: 'meat-lovers-pizza', photo: '', category: 'specialty', name: 'Meat Lovers Pizza', description: 'Sausage, pepperoni, meatballs, bacon, shredded mozzarella & pizza sauce.', basePrice: 12.00, sizes: ['One size'], toppings: ['Pepperoni', 'Sausage', 'Bacon', 'Meatballs', 'Chicken', 'Ham', 'Onions', 'Peppers', 'Mushrooms', 'Broccoli', 'Spinach', 'Black olives', 'Jalape\u00f1os', 'Garlic', 'Pineapple', 'Extra cheese'] },
      { id: 'fat-cat-pizza', photo: '', category: 'specialty', name: 'Fat Cat Pizza', description: 'Crispy chicken, mozzarella sticks, fries, shredded mozzarella, pizza sauce.', basePrice: 10.00, sizes: ['One size'], toppings: ['Pepperoni', 'Sausage', 'Bacon', 'Meatballs', 'Chicken', 'Ham', 'Onions', 'Peppers', 'Mushrooms', 'Broccoli', 'Spinach', 'Black olives', 'Jalape\u00f1os', 'Garlic', 'Pineapple', 'Extra cheese'] },
      { id: 'chicken-tikka', photo: '', category: 'desi', name: 'Chicken Tikka', description: 'Tandoori chicken, onions, jalapeños, cilantro, shredded mozzarella & pizza sauce.', basePrice: 11.00, sizes: ['One size'], toppings: ['Pepperoni', 'Sausage', 'Bacon', 'Meatballs', 'Chicken', 'Ham', 'Onions', 'Peppers', 'Mushrooms', 'Broccoli', 'Spinach', 'Black olives', 'Jalape\u00f1os', 'Garlic', 'Pineapple', 'Extra cheese'] },
      { id: 'paneer-tikka', photo: 'assets/gh-paneer-tikka.jpg', category: 'desi', name: 'Paneer Tikka', description: 'Paneer, onions, jalapeños, cilantro, shredded mozzarella & pizza sauce.', basePrice: 11.00, sizes: ['One size'], toppings: ['Pepperoni', 'Sausage', 'Bacon', 'Meatballs', 'Chicken', 'Ham', 'Onions', 'Peppers', 'Mushrooms', 'Broccoli', 'Spinach', 'Black olives', 'Jalape\u00f1os', 'Garlic', 'Pineapple', 'Extra cheese'] },
      { id: 'bombaya-bhaji-pizza', photo: '', category: 'desi', name: 'Bombaya Bhaji Pizza', description: 'Authentic bombay style bhaji & shredded mozzarella.', basePrice: 11.00, sizes: ['One size'], toppings: ['Pepperoni', 'Sausage', 'Bacon', 'Meatballs', 'Chicken', 'Ham', 'Onions', 'Peppers', 'Mushrooms', 'Broccoli', 'Spinach', 'Black olives', 'Jalape\u00f1os', 'Garlic', 'Pineapple', 'Extra cheese'] },
      { id: 'falafel-pizza', photo: '', category: 'desi', name: 'Falafel Pizza', description: 'Crispy falafel, onion with pizza sauce, shredded mozzarella.', basePrice: 11.00, sizes: ['One size'], toppings: ['Pepperoni', 'Sausage', 'Bacon', 'Meatballs', 'Chicken', 'Ham', 'Onions', 'Peppers', 'Mushrooms', 'Broccoli', 'Spinach', 'Black olives', 'Jalape\u00f1os', 'Garlic', 'Pineapple', 'Extra cheese'] },
      { id: 'kutchi-dabeli-pizza', photo: '', category: 'desi', name: 'Kutchi Dabeli Pizza', description: 'Special dabeli masala made with smash potatoes, onion with tomato sauce & shredded mozzarella.', basePrice: 11.00, sizes: ['One size'], toppings: ['Pepperoni', 'Sausage', 'Bacon', 'Meatballs', 'Chicken', 'Ham', 'Onions', 'Peppers', 'Mushrooms', 'Broccoli', 'Spinach', 'Black olives', 'Jalape\u00f1os', 'Garlic', 'Pineapple', 'Extra cheese'] }
    ]
  }
};

if (typeof module !== "undefined") module.exports = SITE;
if (typeof window !== "undefined") window.SITE = SITE;
