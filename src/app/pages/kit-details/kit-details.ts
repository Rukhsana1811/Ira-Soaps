import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

interface KitImage {
  src: string;
  alt: string;
  description: string;
}

interface KitDetails {
  id: string;
  name: string;
  price: string;
  intro: string;
  contents: string[];
  images: KitImage[];
}

@Component({
  selector: 'app-kit-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './kit-details.html',
  styleUrl: './kit-details.scss'
})
export class KitDetailsComponent {
  readonly kits: KitDetails[] = [
    {
      id: 'soap',
      name: 'Soap kit',
      price: '₹1,800',
      intro: 'Everything you need to make a small batch of handmade soaps at home.',
      contents: [
        '1 kg goat milk soap base',
        '1 kg glycerine soap base',
        'Fragrance oil 30 ml',
        'Foam booster 100 ml',
        'IPA spray 100 ml',
        'Herbal powder',
        'Mould'
      ],
      images: [
        { src: 'assets/soaps.png', alt: 'Handmade soap bars', description: 'A selection of handmade soap bars made from the included bases.' },
        { src: 'assets/orange-soap.jpeg', alt: 'Freshly cut soap bar', description: 'A close look at the kind of finished bar you can pour and cut.' }
      ]
    },
    {
      id: 'face-wash',
      name: 'Face wash kit',
      price: '₹1,200',
      intro: 'Build a gentle daily cleanser with transparent and pearly bases.',
      contents: [
        '1 litre transparent base',
        '1 litre pearly base',
        'DM water 200 ml',
        'Hydrosol 200 ml',
        'Fragrance oil 30 ml'
      ],
      images: [
        { src: 'assets/facewash1.jpeg', alt: 'Face wash product', description: 'A finished face wash with a light, easy-to-use texture.' },
        { src: 'assets/facewash2.jpeg', alt: 'Face wash texture', description: 'A second face wash finish to inspire your own blend.' }
      ]
    },
    {
      id: 'body-wash',
      name: 'Body wash & shower gel kit',
      price: '₹1,200',
      intro: 'Make a refreshing body wash or shower gel using the same gentle base set as the face wash kit.',
      contents: [
        '1 litre transparent base',
        '1 litre pearly base',
        'DM water 200 ml',
        'Hydrosol 200 ml',
        'Fragrance oil 30 ml'
      ],
      images: [
        { src: 'assets/shower-gel.png', alt: 'Body wash and shower gel', description: 'A finished shower gel with a soft lather and fresh fragrance.' }
      ]
    },
    {
      id: 'shampoo',
      name: 'Shampoo kit',
      price: '₹1,500',
      intro: 'Formulate a gentle shampoo and add dried flowers and herbal powder for a botanical finish.',
      contents: [
        '1 litre transparent base',
        '1 litre pearly base',
        'DM water 200 ml',
        'Hydrosol 200 ml',
        'Fragrance oil 30 ml',
        'Dried flowers',
        'Herbal powder'
      ],
      images: [
        { src: 'assets/shampoo.jpeg', alt: 'Handmade shampoo', description: 'A finished shampoo product with a clean, botanical presentation.' }
      ]
    },
    {
      id: 'concrete-art',
      name: 'Concrete art kit',
      price: 'Details coming soon',
      intro: 'A creative concrete-making kit is being prepared. Kit contents and pricing will be added soon.',
      contents: [],
      images: [
        { src: 'assets/fav.jpeg', alt: 'Concrete art piece', description: 'A glimpse at the hand-poured concrete work this kit will be inspired by.' },
        { src: 'assets/about.png', alt: 'Ira Soaps workshop', description: 'The small-batch workshop behind Ira Soaps concrete art.' }
      ]
    }
  ];

  activeKit: KitDetails;

  constructor(route: ActivatedRoute) {
    this.activeKit = this.kits[0];
    route.paramMap.subscribe((params) => {
      const kitId = params.get('kitId');
      this.activeKit = this.kits.find((kit) => kit.id === kitId) ?? this.kits[0];
    });
  }
}