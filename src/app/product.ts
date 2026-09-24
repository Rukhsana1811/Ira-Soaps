// import { Service } from '@angular/core';

// @Service()
// export class Product {}
import { Injectable } from '@angular/core';
import { CategoryMeta, Products, Sessions } from './products';

@Injectable({ providedIn: 'root' })
export class Product {
  readonly categories: CategoryMeta[] = [
    { id: 'all', label: 'All products', blurb: 'Every batch we cure, poured and packed by hand.' },
    { id: 'soaps', label: 'Soaps', blurb: 'melt & pour bars' },
    { id: 'shampoo', label: 'Shampoo', blurb: 'Sulphate-free, low-waste hair care.' },
    { id: 'face-wash', label: 'Face wash', blurb: 'Gentle, skin-first daily cleansers.' },
    { id: 'shower-gel', label: 'Shower gel & body wash', blurb: 'Plant-based, lathers soft.' },
    { id: 'concrete-art', label: 'Concrete art', blurb: 'Hand-poured vases, jars, candles & DIY kits.' }
  ];

  readonly products: Products[] = [
    {
      id: 'water-melon-bar',
      name: 'Water Melon Soap',
      img: 'assets/products/soaps/water-melon.png',
      category: 'soaps',
      tagline: 'Botanical, uplifting bar',
      description:
        'Beautifully scented with watermelon and a touch of mint, this bar gently cleanses while dried botanicals add a naturally beautiful finish to your bath ritual.',
      price: 150,
      size: '100 g bar',
      ingredients: ['Glycerine', 'Black Sessame seeds', 'Goat-Milk', 'Cucumber Oil'],
      icon: 'bar',
      hasLiveSession: true
    },

    {
      id: 'ocean-breeze-bar',
      name: 'Ocean Breeze Soap',
      img: 'assets/products/soaps/ocean-breeze.png',
      category: 'soaps',
      tagline: 'Botanical, uplifting bar',
      description:
        'An amazing ocean breeze bar that gently cleanses while dried botanicals add a naturally beautiful finish to your bath ritual.',
      price: 150,
      size: '100 g bar',
      ingredients: ['Manjishta Powder', 'Glycerine', 'Coconut oil'],
      icon: 'bar',
      hasLiveSession: true
    },


    {
      id: 'honey-bar',
      name: 'Honey Soap',
      category: 'soaps',
      img: 'assets/products/soaps/honey.png',
      tagline: 'Soft, nourishing cleanse',
      description:
        'Raw honey helps draw in moisture while this gentle bar leaves skin feeling soft, comfortable and refreshed.',
      price: 120,
      size: '100 g bar',
      ingredients: ['Honey Essential Oil', 'Glycerine', 'Coconut oil'],
      icon: 'bar',
      hasLiveSession: true
    },
    {
      id: 'floating-flowers-bar',
      name: 'Floating Flowers Soap',
      img: 'assets/products/soaps/floating-flowers.jpeg',
      category: 'soaps',
      tagline: 'Botanical, uplifting bar',
      description:
        'A joyful floral bar that gently cleanses while dried botanicals add a naturally beautiful finish to your bath ritual.',
      price: 150,
      size: '100 g bar',
      ingredients: ['Botanical flowers', 'Glycerine', 'Coconut oil'],
      icon: 'bar',
      hasLiveSession: true
    },
    {
      id: 'coffee-bar',
      name: 'Coffee Soap',
      category: 'soaps',
      img: 'assets/products/soaps/coffee.jpeg',
      tagline: 'Bright, invigorating scrub',
      description:
        'Coffee grounds provide a light exfoliating polish, helping skin feel smoother and awake without a harsh scrub.',
      price: 140,
      size: '100 g bar',
      ingredients: ['Coffee grounds', 'Cocoa butter', 'Coconut oil'],
      icon: 'bar',
      hasLiveSession: true
    },
    {
      id: 'baby-bar',
      name: 'Baby Gentle Soap',
      category: 'soaps',
      img: 'assets/products/soaps/baby.png',
      tagline: 'Extra-gentle everyday care',
      description:
        'A mild, fragrance-free style bar made for a soft, simple cleanse when skin needs a little extra care.',
      price: 70,
      size: '100 g bar',
      ingredients: ['Shea butter', 'Glycerine', 'Oat extract'],
      icon: 'bar',
      hasLiveSession: false
    },
    {
      id: 'aloe-vera-bar',
      name: 'Aloe Vera Soap',
      category: 'soaps',
      img: 'assets/products/soaps/aloevera.png',
      tagline: 'Cooling, refreshing cleanse',
      description:
        'Aloe vera brings a fresh, soothing feel to this everyday bar, leaving skin clean without a dry after-feel.',
      price: 160,
      size: '100 g bar',
      ingredients: ['Aloe vera', 'Coconut oil', 'Glycerine'],
      icon: 'bar',
      hasLiveSession: false
    },
    {
      id: 'oat-bar',
      name: 'Oat Soap',
      category: 'soaps',
      img: 'assets/products/soaps/oats.jpeg',
      tagline: 'Comforting, skin-softening bar',
      description:
        'Finely milled oats gently cleanse and comfort dry-feeling skin for a calm, smooth finish after every wash.',
      price: 140,
      size: '100 g bar',
      ingredients: ['Colloidal oats', 'Shea butter', 'Coconut oil'],
      icon: 'bar',
      hasLiveSession: false
    },
    {
      id: 'multi-layered-herbal-bar',
      name: 'Multi-Layered Herbal Soap',
      category: 'soaps',
      img: 'assets/products/soaps/multilayered-herbal-bar.png',
      tagline: 'Botanical all-rounder',
      description:
        'A layered herbal bar combining traditional powders with a creamy lather to cleanse, polish and refresh the skin.',
      price: 150,
      size: '100 g bar',
      ingredients: ['Rose powder', 'Charcoal powder', 'Manjishtha', 'Glycerine'],
      icon: 'bar',
      hasLiveSession: true
    },
    {
      id: 'lavender-bar',
      name: 'Lavender Soap',
      category: 'soaps',
      img: 'assets/products/soaps/lavendar-dual.png',
      tagline: 'Calming evening cleanse',
      description:
        'Lavender gives this creamy bar a gentle, calming character while plant oils help skin feel clean and conditioned.',
      price: 180,
      size: '100 g bar',
      ingredients: ['Lavender oil', 'Shea butter', 'Coconut oil'],
      icon: 'bar',
      hasLiveSession: false
    },
    {
      id: 'orange-bar',
      name: 'Orange Soap',
      category: 'soaps',
      img: 'assets/products/soaps/orange-soap.jpeg',
      tagline: 'Citrus-bright morning bar',
      description:
        'A cheerful citrus bar that leaves skin feeling fresh and energised with a clean, sunny finish.',
      price: 180,
      size: '100 g bar',
      ingredients: ['Orange slice', 'Citrus oil', 'Coconut oil'],
      icon: 'bar',
      hasLiveSession: false
    },
    {
      id: 'turmeric-bar',
      name: 'Turmeric Soap',
      category: 'soaps',
      img: 'assets/products/soaps/turmeric-dual.jpeg',
      tagline: 'Glow-focused herbal care',
      description:
        'Turmeric and nourishing plant oils make this a warming, clarifying bar for a fresh, clean-feeling complexion.',
      price: 130,
      size: '100 g bar',
      ingredients: ['Turmeric', 'Sandalwood', 'Coconut oil'],
      icon: 'bar',
      hasLiveSession: true
    },
    {
      id: 'reetha-shikakai-shampoo',
      name: 'Reetha–Shikakai',
      img: 'assets/oat-honey-bar.jpeg',
      category: 'shampoo',
      tagline: 'One bar, ~80 washes',
      description:
        'A traditional reetha and shikakai base, melt & poured into a bar form — no plastic bottle, no sulphates, gentle enough for colour-treated hair.',
      price: 299,
      size: '90 g bar',
      ingredients: ['Reetha (soapnut)', 'Shikakai', 'Amla', 'Coconut oil'],
      icon: 'bar',
      hasLiveSession: true
    },
    {
      id: 'onion-hibiscus-shampoo',
      name: 'Onion & Hibiscus',
      img: 'assets/oat-honey-bar.jpeg',
      category: 'shampoo',
      tagline: 'For strengthening & shine',
      description:
        'Onion extract and hibiscus, known for supporting hair strength, worked into a rich lathering bar with no synthetic silicones.',
      price: 370,
      size: '250 ml',
      ingredients: ['Onion extract', 'Hibiscus', 'Fenugreek', 'Coconut oil'],
      icon: 'bottle',
      hasLiveSession: false
    },
    {
      id: 'blue-pea-hibiscus-shampoo',
      name: 'Blue Pea & Hibiscus',
      img: 'assets/oat-honey-bar.jpeg',
      category: 'shampoo',
      tagline: 'For strengthening & shine',
      description:
        'Blue pea extract and hibiscus, known for supporting hair strength, worked into a rich lathering bar with no synthetic silicones.',
      price: 390,
      size: '250 ml',
      ingredients: ['Blue Pea', 'Hibiscus', 'Fenugreek', 'Lavendar Hydrosol'],
      icon: 'bar',
      hasLiveSession: false
    },
    {
      id: 'rosewater-facewash',
      name: 'Rosewater Cream Face Wash',
      img: 'assets/oat-honey-bar.jpeg',
      category: 'face-wash',
      tagline: 'Daily, all skin types',
      description:
        'A soft, low-lather cream wash built on rosewater and oat protein — cleans without the tight, dry after-feel of commercial face washes.',
      price: 349,
      size: '100 ml jar',
      ingredients: ['Rosewater', 'Oat protein', 'Aloe vera', 'Jojoba oil'],
      icon: 'jar',
      hasLiveSession: true
    },
    {
      id: 'turmeric-gram-facewash',
      name: 'Turmeric & Gram Flour Wash',
      img: 'assets/oat-honey-bar.jpeg',
      category: 'face-wash',
      tagline: 'Brightening, gentle exfoliant',
      description:
        'A reinvented ubtan — gram flour and turmeric in a gentle wash base for everyday use, no artificial colour or synthetic scrub beads.',
      price: 329,
      size: '100 ml jar',
      ingredients: ['Gram flour', 'Turmeric', 'Sandalwood', 'Milk cream'],
      icon: 'jar',
      hasLiveSession: false
    },
    {
      id: 'lavender-body-wash',
      name: 'Lavender & Oat Body Wash',
      img: 'assets/oat-honey-bar.jpeg',
      category: 'shower-gel',
      tagline: 'Calming, everyday lather',
      description:
        'A plant-derived surfactant base with real lavender oil and colloidal oat, formulated to lather softly without foam boosters.',
      price: 399,
      size: '250 ml bottle',
      ingredients: ['Lavender oil', 'Colloidal oat', 'Coco-glucoside', 'Aloe vera'],
      icon: 'bottle',
      hasLiveSession: false
    },
    {
      id: 'citrus-mint-shower-gel',
      name: 'Citrus & Mint Shower Gel',
      img: 'assets/oat-honey-bar.jpeg',
      category: 'shower-gel',
      tagline: 'Bright, energising wash',
      description:
        'Cold-pressed citrus peel oils and peppermint in a light, chemical-free gel base — a wake-up shower without synthetic fragrance overload.',
      price: 399,
      size: '250 ml bottle',
      ingredients: ['Citrus peel oil', 'Peppermint oil', 'Coco-glucoside'],
      icon: 'bottle',
      hasLiveSession: false
    },
    {
      id: 'concrete-2-vase-with-tray',
      name: 'Two Vases with Tray',
      img: 'assets/products/concrete/2-vase-with-tray.png',
      category: 'concrete-art',
      tagline: 'Coordinated display set',
      description:
        'A pair of hand-finished concrete vases on a matching tray, made to bring structure and texture to shelves, tables and entryways.',
      price: 1499,
      size: 'Set of 3 pieces',
      ingredients: ['Fine-cure concrete', 'Pigment', 'Protective sealant'],
      icon: 'vase',
      hasLiveSession: false
    },
    {
      id: 'concrete-candle-bouquet-tray-set',
      name: 'Candle Bouquet Tray Set',
      img: 'assets/products/concrete/candle-bookey-tray-set.png',
      category: 'concrete-art',
      tagline: 'Textured candle arrangement',
      description:
        'A sculptural concrete tray paired with small decorative candles, creating an easy centrepiece for a coffee table, shelf or bedside.',
      price: 1299,
      size: 'Tray and candle set',
      ingredients: ['Fine-cure concrete', 'Soy wax', 'Cotton wicks'],
      icon: 'candle',
      hasLiveSession: false
    },
    {
      id: 'concrete-candle-bouquet',
      name: 'Concrete Candle Bouquet',
      img: 'assets/products/concrete/candle-bookey.png',
      category: 'concrete-art',
      tagline: 'Hand-poured candle cluster',
      description:
        'A playful cluster of concrete candle holders with a tactile finish, designed to add a warm handmade detail to compact spaces.',
      price: 899,
      size: 'Candle holder set',
      ingredients: ['Fine-cure concrete', 'Soy wax', 'Essential oil blend'],
      icon: 'candle',
      hasLiveSession: false
    },
    {
      id: 'concrete-decorative-tray',
      name: 'Decorative Concrete Tray',
      img: 'assets/products/concrete/decorative-tray.png',
      category: 'concrete-art',
      tagline: 'Everyday catch-all',
      description:
        'A versatile hand-poured tray for jewellery, keys, candles or small desk essentials, finished with a smooth protective seal.',
      price: 599,
      size: 'Single tray',
      ingredients: ['Fine-cure concrete', 'Pigment', 'Protective sealant'],
      icon: 'kit',
      hasLiveSession: false
    },
    {
      id: 'concrete-pink-marble-heart',
      name: 'Light Pink Marble Heart',
      img: 'assets/products/concrete/light-pink-marble-effect-heart.png',
      category: 'concrete-art',
      tagline: 'Soft marble-effect decor',
      description:
        'A small heart-shaped concrete accent with a gentle pink marble effect, made for gifting, styling a shelf or adding softness to a desk.',
      price: 399,
      size: 'Single decor piece',
      ingredients: ['Fine-cure concrete', 'Pink pigment', 'Protective sealant'],
      icon: 'kit',
      hasLiveSession: false
    },
    {
      id: 'concrete-jewellery-jar-tray-set',
      name: 'Jewellery Jar and Tray Set',
      img: 'assets/products/concrete/jewelleryjar-tray-set.png',
      category: 'concrete-art',
      tagline: 'Organised bedside styling',
      description:
        'A hand-poured jar and tray set for rings, earrings and other small treasures, combining practical storage with sculptural texture.',
      price: 999,
      size: 'Jar and tray set',
      ingredients: ['Fine-cure concrete', 'Pigment', 'Protective sealant'],
      icon: 'jar',
      hasLiveSession: false
    },
    {
      id: 'concrete-jewellery-jar-vase-tray',
      name: 'Jewellery Jar, Vase and Tray Set',
      img: 'assets/products/concrete/jewellery-jar-with-vase-tray.jpg',
      category: 'concrete-art',
      tagline: 'Complete vanity set',
      description:
        'A coordinated concrete set with a jewellery jar, petite vase and tray for a calm, collected dressing table or bedside arrangement.',
      price: 1399,
      size: 'Set of 3 pieces',
      ingredients: ['Fine-cure concrete', 'Pigment', 'Protective sealant'],
      icon: 'jar',
      hasLiveSession: false
    },
    {
      id: 'concrete-jar-vase-tray-set',
      name: 'Jar, Vase and Tray Set',
      img: 'assets/products/concrete/jar-vase-tray-set.png',
      category: 'concrete-art',
      tagline: 'Coordinated home accents',
      description:
        'Three useful concrete accents designed to work together: a storage jar, a small vase and a catch-all tray with a hand-finished surface.',
      price: 1299,
      size: 'Set of 3 pieces',
      ingredients: ['Fine-cure concrete', 'Pigment', 'Protective sealant'],
      icon: 'jar',
      hasLiveSession: false
    },
    {
      id: 'concrete-heart',
      name: 'Plain Concrete Heart',
      img: 'assets/products/concrete/heart-plain.png',
      category: 'concrete-art',
      tagline: 'Minimal handmade accent',
      description:
        'A simple heart-shaped concrete piece with a clean, natural finish that works as a thoughtful gift or a quiet decorative detail.',
      price: 299,
      size: 'Single decor piece',
      ingredients: ['Fine-cure concrete', 'Protective sealant'],
      icon: 'kit',
      hasLiveSession: false
    },
    {
      id: 'concrete-pump-vase',
      name: 'Concrete Pump Vase',
      img: 'assets/products/concrete/pump-vase.png',
      category: 'concrete-art',
      tagline: 'Functional sculptural piece',
      description:
        'A compact concrete pump-style vase that brings an architectural silhouette to a shelf while holding a few favourite stems.',
      price: 699,
      size: 'Single vase',
      ingredients: ['Fine-cure concrete', 'Pump fitting', 'Protective sealant'],
      icon: 'vase',
      hasLiveSession: false
    },
    {
      id: 'concrete-oval-big-tray',
      name: 'Large Oval Concrete Tray',
      img: 'assets/products/concrete/oval-big-tray.png',
      category: 'concrete-art',
      tagline: 'Roomy serving and display tray',
      description:
        'A generous oval tray for candles, bottles, jewellery or serving details, cast and sanded by hand for a softly rounded finish.',
      price: 799,
      size: 'Single large tray',
      ingredients: ['Fine-cure concrete', 'Pigment', 'Protective sealant'],
      icon: 'kit',
      hasLiveSession: false
    },
    {
      id: 'concrete-long-vase',
      name: 'Long Concrete Vase',
      img: 'assets/products/concrete/long-vase.png',
      category: 'concrete-art',
      tagline: 'Linear statement vase',
      description:
        'A long, clean-lined concrete vase for dried stems and minimal arrangements, bringing a grounded handmade feel to a console or dining table.',
      price: 999,
      size: 'Single vase',
      ingredients: ['Fine-cure concrete', 'Pigment', 'Protective sealant'],
      icon: 'vase',
      hasLiveSession: false
    },
    {
      id: 'concrete-red-marble-heart',
      name: 'Red Marble Heart',
      img: 'assets/products/concrete/red-marble-heart.png',
      category: 'concrete-art',
      tagline: 'Bold marble-effect decor',
      description:
        'A rich red marble-effect heart with natural variation in every pour, made as a memorable gift or a warm accent for a small space.',
      price: 399,
      size: 'Single decor piece',
      ingredients: ['Fine-cure concrete', 'Red pigment', 'Protective sealant'],
      icon: 'kit',
      hasLiveSession: false
    },
    {
      id: 'concrete-vase-tray-set',
      name: 'Vase and Tray Set',
      img: 'assets/products/concrete/vase-tray-set.png',
      category: 'concrete-art',
      tagline: 'Simple paired styling',
      description:
        'A hand-poured vase and matching tray that make an easy styled pair for dried flowers, candles, jewellery or everyday essentials.',
      price: 899,
      size: 'Vase and tray set',
      ingredients: ['Fine-cure concrete', 'Pigment', 'Protective sealant'],
      icon: 'vase',
      hasLiveSession: false
    }
  ];

  readonly sessions: Sessions[] = [
    {
      id: 'soap',
      name: 'Chemical-Free Artisanal Soaps',
      tagline: 'Master melt & pour soapmaking using pure oils and natural botanicals.',
      price: '999'
    },
    {
      id: 'shampoo',
      name: 'Herbal & Sulfate-Free Hair Cleansers',
      tagline: 'Formulate nourishing shampoo for healthy, chemical-free hair care.',
      price: '599'
    },
    {
      id: 'face-wash',
      name: 'Handcrafted Botanical Face Washes',
      tagline: 'Create gentle, skin-soothing cleansers tailored for sensitive skin types.',
      price: '599'
    },
    {
      id: 'shower-gel',
      name: 'Natural Body Washes & Shower Gels',
      tagline: 'Craft refreshing, plant-based body cleansers rich in essential oils.',
      price: '599'
    }
  ];

  getByCategory(category: string): Products[] {
    if (!category || category === 'all') return this.products;
    return this.products.filter((p) => p.category === category);
  }

  getById(id: string): Products | undefined {
    return this.products.find((p) => p.id === id);
  }

  liveSessionProducts(): Products[] {
    return this.products.filter((p) => p.hasLiveSession);
  }
}