// import { Component } from '@angular/core';

// @Component({
//   imports: [],
//   selector: 'app-home',
//   styleUrl: './home.sass',
//   templateUrl: './home.html',
// })
// export class Home {}
import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Product } from '../../product';
import { WhatsappHelper } from '../../whatsapp-helper';
import { WireCut } from '../../pages/wire-cut/wire-cut';
import { CategoryMeta, Products, Sessions } from '../../products';
import { ProductCard } from '../../shared/product-card/product-card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,
    RouterLink,
    WireCut,
    ProductCard],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
 @ViewChild('videoPlayer') videoElement!: ElementRef<HTMLVideoElement>;
  categories: CategoryMeta[];
  soaps: Products[];
  concreteProducts: Products[];
  sessions: Sessions[];
  kits = [
    {
      id: 'soap',
      name: 'Soap kit',
      price: '₹1,800',
      contents: [
        '1 kg goat milk soap base',
        '1 kg glycerine soap base',
        'Fragrance oil 30 ml',
        'Foam booster 100 ml',
        'IPA spray 100 ml',
        'Herbal powder',
        'Mould'
      ]
    },
    {
      id: 'face-wash',
      name: 'Face wash kit',
      price: '₹1,200',
      contents: [
        '1 litre transparent base',
        '1 litre pearly base',
        'DM water 200 ml',
        'Hydrosol 200 ml',
        'Fragrance oil 30 ml'
      ]
    },
    {
      id: 'body-wash',
      name: 'Body wash & shower gel kit',
      price: '₹1,200',
      contents: [
        '1 litre transparent base',
        '1 litre pearly base',
        'DM water 200 ml',
        'Hydrosol 200 ml',
        'Fragrance oil 30 ml'
      ]
    },
    {
      id: 'shampoo',
      name: 'Shampoo kit',
      price: '₹1,500',
      contents: [
        '1 litre transparent base',
        '1 litre pearly base',
        'DM water 200 ml',
        'Hydrosol 200 ml',
        'Fragrance oil 30 ml',
        'Dried flowers',
        'Herbal powder'
      ]
    },
    {
      id: 'concrete-art',
      name: 'Concrete art kit',
      price: 'Details coming soon',
      contents: []
    }
  ];
  whatWeDo = [
    {
      title: 'Handmade products',
      icon: 'bi-droplet-half',
      image: 'assets/soaps.png',
      items: ['Soaps', 'Shampoo', 'Face wash', 'Body wash & shower gel', 'Concrete art', 'Candles'],
      link: '/products',
      action: 'Shop products'
    },
    {
      title: 'Live sessions worldwide',
      icon: 'bi-globe2',
      image: 'assets/live-session.png',
      items: ['Soapmaking', 'Shampoo formulation', 'Face wash making', 'Body wash & shower gel making'],
      link: '/live-sessions',
      action: 'Explore sessions'
    },
    {
      title: 'Raw materials & supplies',
      icon: 'bi-box-seam',
      image: 'assets/fav.jpeg',
      items: ['Moulds & bottles', 'Soap base & shampoo base', 'Face wash & shower gel base', 'Packaging materials'],
      link: '',
      action: 'Enquire on WhatsApp'
    }
  ];
  process = [
    { step: 'Source', text: 'Botanical oils, herbs and fine-cure concrete sourced from small Indian suppliers we know by name.' },
    { step: 'Infuse / Mix', text: 'Oils are cold-infused for weeks; concrete is measured and mixed in small hand-poured batches.' },
    { step: 'Pour', text: 'Every bar, bottle and vessel is poured by hand into moulds — no factory line, no shortcuts.' },
    { step: 'Cure', text: 'Soap cures for 4–6 weeks for a harder, longer-lasting bar. Concrete cures for structural strength.' },
    { step: 'Cut & finish', text: 'Bars are wire-cut by hand; concrete pieces are sanded and sealed one at a time.' },
    { step: 'Pack & ship', text: 'Wrapped in recyclable paper, batch-dated, and shipped straight from our workshop.' }
  ];
  testimonials = [
    { name: 'Meera K.', role: 'Repeat customer, Mohali', quote: 'My skin stopped breaking out within two weeks of switching to the neem bar. It genuinely smells like a herb garden, not a factory.' },
    { name: 'Arjun S.', role: 'Live session guest', quote: 'Joined the concrete vase session with my sister — we left with two vases and a real understanding of how they are made.' },
    { name: 'Priya D.', role: 'Shampoo convert', quote: 'One bar replaced three plastic bottles in my bathroom. My hair has never felt this light.' }
  ];

  constructor(
    private productService: Product,
    public whatsapp: WhatsappHelper
  ) {
    this.categories = this.productService.categories.filter((c) => c.id !== 'all');
    this.soaps = this.productService.getByCategory('soaps');
    this.concreteProducts = this.productService.getByCategory('concrete-art');
    this.sessions = this.productService.sessions;
  }

  ngAfterViewInit(): void {
    if (this.videoElement?.nativeElement) {
      const video = this.videoElement.nativeElement;
      video.muted = true;
      video.play().catch(error => {
        console.warn('Autoplay prevented:', error);
      });
    }
  }

}