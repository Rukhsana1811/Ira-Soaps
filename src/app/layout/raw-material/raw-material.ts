import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Cart} from '../../cart';
interface RawMaterialData {
  id: string;
  name: string;
  options: { unit: string; price: number }[];
  image: string;
}

@Component({
  selector: 'app-raw-material',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="page-container">
      <header class="page-header">
        <h1>Raw Ingredient Store</h1>
        <p>Formulate your own recipes with cosmetic-grade organic materials.</p>
      </header>

      <div class="cards-grid">
        <div class="material-card" *ngFor="let item of materials()">
          <img [src]="item.image" [alt]="item.name" class="material-img" />
          <div class="material-body">
            <h3>{{ item.name }}</h3>
            
            <!-- Unit / Size Picker -->
            <div class="unit-selector">
              <label>Select Quantity:</label>
              <select [(ngModel)]="selectedUnits[item.id]">
                <option *ngFor="let opt of item.options" [ngValue]="opt">
                  {{ opt.unit }} — \${{ opt.price.toFixed(2) }}
                </option>
              </select>
            </div>

            <button class="btn-primary" (click)="addMaterialToCart(item)">
              Add Raw Material
            </button>
          </div>
        </div>
      </div>
    </div>
  `
})
export class RawMaterial {
  cartService = inject(Cart);

  materials = signal<RawMaterialData[]>([
    {
      id: 'rm-1',
      name: 'Unrefined Organic Shea Butter',
      image: 'assets/shea.jpg',
      options: [
        { unit: '250g', price: 8.50 },
        { unit: '1kg Bulk', price: 26.00 }
      ]
    },
    {
      id: 'rm-2',
      name: 'Pure Lavender Essential Oil',
      image: 'assets/lavender.jpg',
      options: [
        { unit: '30ml', price: 14.00 },
        { unit: '100ml', price: 38.00 }
      ]
    }
  ]);

  selectedUnits: Record<string, { unit: string; price: number }> = {
    'rm-1': { unit: '250g', price: 8.50 },
    'rm-2': { unit: '30ml', price: 14.00 }
  };

  addMaterialToCart(material: RawMaterialData) {
    const selected = this.selectedUnits[material.id];
    this.cartService.addItem({
      id: `${material.id}-${selected.unit}`,
      title: `${material.name} (${selected.unit})`,
      price: selected.price,
      type: 'raw_material',
      unitOrDate: selected.unit,
      image: material.image
    });
  }
}