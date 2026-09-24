import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Products } from '../../products';
import { Cart } from '../../cart';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss'
})
export class ProductCard {
  @Input({ required: true }) product!: Products;

  constructor(
    private cart: Cart,
    private router: Router
  ) { }

  addToCart(): void {
    this.cart.addItem({
      id: this.product.id,
      title: this.product.name,
      price: this.product.price,
      type: 'product',
      unitOrDate: this.product.size,
      image: this.product.img
    });
  }

  checkoutProduct(): void {
    this.addToCart();
    void this.router.navigate(['/order']);
  }
}