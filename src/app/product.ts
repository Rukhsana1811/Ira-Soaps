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
      id: 'oat-honey-bar',
      name: 'Oat & Honey Curing Bar',
      category: 'soaps',
      tagline: 'Our founding recipe',
      description:
        'A slow melt & pour bar built on oat milk and raw honey, cured for six weeks for a hard, long-lasting finish. No parabens, no sulphates, no synthetic fragrance.',
      price: 249,
      size: '100 g bar',
      ingredients: ['Oat milk', 'Raw honey', 'Cold-pressed coconut oil', 'Shea butter'],
      icon: 'bar',
      hasLiveSession: true
    },
    {
      id: 'neem-tulsi-bar',
      name: 'Neem & Tulsi Bar',
      category: 'soaps',
      tagline: 'For blemish-prone skin',
      description:
        'Neem and tulsi leaf infused in oil for 21 days before pouring, for a bar that is clarifying without stripping the skin barrier.',
      price: 229,
      size: '100 g bar',
      ingredients: ['Neem leaf infusion', 'Tulsi', 'Castor oil', 'Coconut oil'],
      icon: 'bar',
      hasLiveSession: true
    },
    {
      id: 'charcoal-clay-bar',
      name: 'Activated Charcoal & Clay Bar',
      category: 'soaps',
      tagline: 'Deep-clean, weekly use',
      description:
        'Bentonite clay and activated charcoal draw out excess oil; sweet almond oil keeps the bar from feeling tight on skin.',
      price: 259,
      size: '100 g bar',
      ingredients: ['Bentonite clay', 'Activated charcoal', 'Sweet almond oil'],
      icon: 'bar',
      hasLiveSession: false
    },
    {
      id: 'reetha-shikakai-shampoo',
      name: 'Reetha–Shikakai',
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
      id: 'concrete-diy-vase-kit',
      name: 'Pour-Your-Own Vase DIY Kit',
      category: 'concrete-art',
      tagline: 'Beginner friendly, 1 vase',
      description:
        'Everything you need to hand-pour one minimalist concrete vase at home: pre-measured mix, silicone mould, mixing tools and a printed guide.',
      price: 899,
      size: 'Makes 1 vase',
      ingredients: ['Fine-cure concrete mix', 'Silicone mould', 'Mixing tools', 'Guide card'],
      icon: 'kit',
      hasLiveSession: true
    },
    {
      id: 'concrete-jar-set',
      name: 'Hand-Poured Storage Jar Set',
      category: 'concrete-art',
      tagline: 'Set of 2, sealed finish',
      description:
        'Two hand-poured concrete jars with wooden lids, sealed for everyday desk or bathroom storage. Every piece is slightly one-of-a-kind.',
      price: 1099,
      size: 'Set of 2',
      ingredients: ['Fine-cure concrete', 'Sealant', 'Wooden lids'],
      icon: 'jar',
      hasLiveSession: false
    },
    {
      id: 'concrete-taper-vase',
      name: 'Tapered Studio Vase',
      category: 'concrete-art',
      tagline: 'Statement decor piece',
      description:
        'A tall, tapered vase cast in fine-cure concrete with a smooth hand-finished surface — designed for dried stems or a single statement bloom.',
      price: 1299,
      size: '9 in height',
      ingredients: ['Fine-cure concrete', 'Sealant'],
      icon: 'vase',
      hasLiveSession: true
    },
    {
      id: 'concrete-soy-candle',
      name: 'Concrete Vessel Soy Candle',
      category: 'concrete-art',
      tagline: 'Reusable after burning',
      description:
        'A soy wax candle hand-poured into our own concrete vessel — once the candle is done, the vessel becomes a planter or catch-all.',
      price: 649,
      size: '180 g soy wax',
      ingredients: ['Soy wax', 'Cotton wick', 'Concrete vessel', 'Essential oil blend'],
      icon: 'candle',
      hasLiveSession: true
    }
  ];

  readonly sessions: Sessions[] = [
    {
      id: 'soap',
      name: 'Chemical-Free Artisanal Soaps',
      tagline: 'Master melt & pour soapmaking using pure oils and natural botanicals.'
    },
    {
      id: 'shampoo',
      name: 'Herbal & Sulfate-Free Hair Cleansers',
      tagline: 'Formulate nourishing shampoo bars for healthy, chemical-free hair care.'
    },
    {
      id: 'face-wash',
      name: 'Handcrafted Botanical Face Washes',
      tagline: 'Create gentle, skin-soothing cleansers tailored for sensitive skin types.'
    },
    {
      id: 'shower-gel',
      name: 'Natural Body Washes & Shower Gels',
      tagline: 'Craft refreshing, plant-based body cleansers rich in essential oils.'
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