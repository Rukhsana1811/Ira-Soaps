import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../../cart';
import { RawMaterial } from '../../raw-materials';

@Component({
  selector: 'app-raw-material-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './raw-material-card.html',
  styleUrl: './raw-material-card.scss'
})
export class RawMaterialCard {
  @Input({ required: true }) material!: RawMaterial;
  quantity = 1;

  constructor(private cart: Cart, private router: Router) {}

  decrease(): void {
    this.quantity = Math.max(1, this.quantity - 1);
  }

  increase(): void {
    this.quantity += 1;
  }

  addToCart(): void {
    this.cart.addItem({
      id: this.material.id,
      title: this.material.name,
      price: this.material.price,
      type: 'raw_material',
      unitOrDate: this.material.size,
      image: this.material.img
    }, this.quantity);
  }

  buyNow(): void {
    this.addToCart();
    void this.router.navigate(['/order']);
  }
}
