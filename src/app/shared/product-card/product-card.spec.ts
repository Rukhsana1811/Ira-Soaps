import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductCard } from './product-card';
import { Cart } from '../../cart';
import { vi } from 'vitest';
import { Router } from '@angular/router';

describe('ProductCard', () => {
  let component: ProductCard;
  let fixture: ComponentFixture<ProductCard>;
  let cart: Cart;
  let router: { navigate: ReturnType<typeof vi.fn> };

  beforeEach(async () => {
    router = { navigate: vi.fn() };

    await TestBed.configureTestingModule({
      imports: [ProductCard],
      providers: [
        Cart,
        { provide: Router, useValue: router }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductCard);
    component = fixture.componentInstance;
    cart = TestBed.inject(Cart);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('adds the product to the cart and opens the order page', () => {
    component.product = {
      id: 'soap-1',
      name: 'Test soap',
      category: 'soaps',
      price: 100,
      size: '100g',
      tagline: 'Test',
      description: 'Test soap',
      ingredients: [],
      img: '',
      icon: 'bar',
      hasLiveSession: false
    };
    component.checkoutProduct();

    expect(cart.cartItems()[0].id).toBe('soap-1');
    expect(router.navigate).toHaveBeenCalledWith(['/order']);
  });
});
