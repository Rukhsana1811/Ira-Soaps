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
  quantity = 1;

  constructor(
    private cart: Cart,
    private router: Router
  ) { }

  decrease(): void {
    this.quantity = Math.max(1, this.quantity - 1);
  }

  increase(): void {
    this.quantity += 1;
  }

  addToCart(): void {
    this.cart.addItem({
      id: this.product.id,
      title: this.product.name,
      price: this.product.price,
      type: 'product',
      unitOrDate: this.product.size,
      image: this.product.img
    }, this.quantity);
  }

  checkoutProduct(): void {
    this.addToCart();
    void this.router.navigate(['/order']);
  }
}