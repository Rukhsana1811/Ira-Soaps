// import { Component } from '@angular/core';

// @Component({
//   imports: [],
//   selector: 'app-product-card',
//   styleUrl: './product-card.sass',
//   templateUrl: './product-card.html',
// })
// export class ProductCard {}
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../product';
import { WhatsappHelper } from '../../whatsapp-helper';
import { Products } from '../../products';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss'
})
export class ProductCard {
  @Input({ required: true }) product!: Products;

  constructor(public whatsapp: WhatsappHelper) {}
}