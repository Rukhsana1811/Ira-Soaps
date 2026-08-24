// import { Component } from '@angular/core';

// @Component({
//   imports: [],
//   selector: 'app-live-sessions',
//   styleUrl: './live-sessions.sass',
//   templateUrl: './live-sessions.html',
// })
// export class LiveSessions {}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../product';
import { WhatsappHelper } from '../../whatsapp-helper';
import { ProductIcon } from '../../shared/product-icon/product-icon';

@Component({
  selector: 'app-live-sessions',
  standalone: true,
  imports: [CommonModule, ProductIcon],
  templateUrl: './live-sessions.html',
  styleUrl: './live-sessions.scss'
})
export class LiveSessions {
  sessionProducts;

  howItWorks = [
    { title: 'Pick a product', text: 'Choose any product marked "Live session available" — soap, shampoo bar, face wash or a concrete piece.' },
    { title: 'Message us your slot', text: 'Send us 2–3 preferred dates on WhatsApp. We run sessions in small groups (max 6) or 1-on-1.' },
    { title: 'Join by video call', text: 'We host over Google Meet or WhatsApp video — you watch, ask questions, and can request substitutions live.' },
    { title: 'Get the batch shipped', text: 'The batch made in your session cures as usual, then ships straight to you, labelled with your session date.' }
  ];

  faqs = [
    { q: 'How long does a session run?', a: 'Soap and shampoo bar sessions run about 45–60 minutes. Concrete pours run 30–40 minutes, since the pour itself is quick — most of the time is the mix and mould walkthrough.' },
    { q: 'Is it free?', a: 'A soap or shampoo bar session is free with a batch order of 2 or more bars. Concrete DIY kit sessions include a small workshop fee, adjusted against your kit purchase.' },
    { q: 'Can I request a custom scent or mould?', a: 'Yes — tell us when booking and we\'ll confirm what\'s possible for that batch before the session.' },
    { q: 'Do you do sessions for groups or events?', a: 'Yes, we run private group sessions for birthdays, kitty parties and office teams. Message us on WhatsApp with your group size.' }
  ];

  constructor(private productService: Product, public whatsapp: WhatsappHelper) {
    this.sessionProducts = this.productService.liveSessionProducts();
  }
}