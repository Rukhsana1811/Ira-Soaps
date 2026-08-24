import { Injectable, signal, computed } from '@angular/core';

export type ItemType = 'product' | 'raw_material' | 'workshop';

export interface CartItem {
  id: string;
  title: string;
  price: number;
  type: ItemType;
  quantity: number;
  unitOrDate?: string; // e.g., '250g' or 'Sat, Sep 12'
  image?: string;
}

@Injectable({
  providedIn: 'root'
})
export class Cart {
  cartItems = signal<CartItem[]>([]);

  totalItems = computed(() => 
    this.cartItems().reduce((acc, item) => acc + item.quantity, 0)
  );

  totalAmount = computed(() => 
    this.cartItems().reduce((acc, item) => acc + (item.price * item.quantity), 0)
  );

  addItem(item: Omit<CartItem, 'quantity'>, qty = 1): void {
    const current = this.cartItems();
    const existingIndex = current.findIndex(i => i.id === item.id && i.type === item.type);

    if (existingIndex > -1) {
      const updated = [...current];
      updated[existingIndex].quantity += qty;
      this.cartItems.set(updated);
    } else {
      this.cartItems.set([...current, { ...item, quantity: qty }]);
    }
  }

  updateQuantity(id: string, delta: number): void {
    const updated = this.cartItems()
      .map(item => item.id === id ? { ...item, quantity: item.quantity + delta } : item)
      .filter(item => item.quantity > 0);
    
    this.cartItems.set(updated);
  }

  removeItem(id: string): void {
    this.cartItems.set(this.cartItems().filter(item => item.id !== id));
  }
}