// import { Component } from '@angular/core';

// @Component({
//   imports: [],
//   selector: 'app-home',
//   styleUrl: './home.sass',
//   templateUrl: './home.html',
// })
// export class Home {}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Product } from '../../product';
import { WhatsappHelper } from '../../whatsapp-helper';
import { WireCut } from '../../pages/wire-cut/wire-cut';
import { CategoryMeta, Sessions } from '../../products';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,
    RouterLink,
    WireCut],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  categories: CategoryMeta[];
  sessions: Sessions[];
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
    this.sessions = this.productService.sessions;
  }
}