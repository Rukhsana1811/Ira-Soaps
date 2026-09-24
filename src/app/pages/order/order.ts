import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Cart, CartItem } from '../../cart';
import { Product } from '../../product';
import { OrderEmailData, OrderEmailService } from '../../order-email.service';
import { UpiPaymentRequest, UpiService } from '../../upi.service';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './order.html',
  styleUrl: './order.scss'
})
export class Order {
  readonly deliveryCharge = 99;
  readonly handlingCharge = 20;
  readonly customerDetails = {
    fullName: '',
    contactNumber: '',
    address: '',
    cityState: '',
    pincode: ''
  };
  stage: 'cart' | 'details' | 'payment' | 'success' = 'cart';
  paymentRequest?: UpiPaymentRequest;
  customerDetailsError = '';
  contactNumberError = '';
  pincodeError = '';
  utr = '';
  utrError = '';
  emailError = '';
  isSendingEmail = false;

  constructor(
    public cart: Cart,
    private productService: Product,
    private upiService: UpiService,
    private orderEmailService: OrderEmailService,
    private router: Router
  ) {}

  get items(): CartItem[] {
    return this.cart.cartItems();
  }

  get subtotal(): number {
    return this.cart.totalAmount();
  }

  get totalAmount(): number {
    return this.subtotal + this.deliveryCharge + this.handlingCharge;
  }

  updateQuantity(item: CartItem, delta: number): void {
    this.cart.updateQuantity(item.id, delta);
    if (!this.items.length) {
      this.stage = 'cart';
    }
  }

  removeItem(item: CartItem): void {
    this.cart.removeItem(item.id);
    if (!this.items.length) {
      this.stage = 'cart';
    }
  }

  continueToDetails(): void {
    if (this.items.length) {
      this.stage = 'details';
    }
  }

  validatePincode(value: string): void {
    const digitsOnly = value.replace(/\D/g, '').slice(0, 6);
    this.customerDetails.pincode = digitsOnly;
    this.pincodeError = digitsOnly.length === 0 || digitsOnly.length === 6
      ? ''
      : 'Pincode must contain exactly 6 digits.';
  }

  validateContactNumber(value: string): void {
    const digitsOnly = value.replace(/\D/g, '').slice(0, 10);
    this.customerDetails.contactNumber = digitsOnly;
    this.contactNumberError = digitsOnly.length === 0 || digitsOnly.length === 10
      ? ''
      : 'Contact number must contain exactly 10 digits.';
  }

  proceedToPayment(): void {
    const { fullName, contactNumber, address, cityState, pincode } = this.customerDetails;
    this.validateContactNumber(contactNumber);
    this.validatePincode(pincode);
    const isValid = !!fullName.trim() && /^\d{10}$/.test(contactNumber.trim())
      && !!address.trim() && !!cityState.trim() && /^\d{6}$/.test(pincode.trim());

    if (!isValid) {
      this.customerDetailsError = 'Please enter your name, 10-digit contact number, complete address, city/state, and 6-digit pincode.';
      return;
    }

    const firstProduct = this.productService.getById(this.items[0].id);
    if (!firstProduct) {
      this.customerDetailsError = 'One of the products in your cart is no longer available.';
      return;
    }

    this.customerDetailsError = '';
    this.paymentRequest = this.upiService.createPaymentRequest(firstProduct, this.totalAmount);
    this.stage = 'payment';
  }

  validatePaymentReference(): void {
    const reference = this.utr.trim();
    this.utrError = reference.length === 0 || /^[A-Za-z0-9]{6,30}$/.test(reference)
      ? ''
      : 'UTR must contain only letters and numbers (6–30 characters).';
  }

  async submitPaymentReference(): Promise<void> {
    const reference = this.utr.trim();
    this.utr = reference;
    this.validatePaymentReference();
    if (this.utrError || !this.paymentRequest || !this.items.length) {
      return;
    }

    const firstProduct = this.productService.getById(this.items[0].id);
    if (!firstProduct) {
      this.emailError = 'The product could not be found. Please return to the shop and try again.';
      return;
    }

    const submittedOrder: OrderEmailData = {
      product: firstProduct,
      quantity: this.items[0].quantity,
      subtotal: this.subtotal,
      deliveryCharge: this.deliveryCharge,
      handlingCharge: this.handlingCharge,
      total: this.totalAmount,
      orderId: this.paymentRequest.orderId,
      utr: reference,
      customerDetails: { ...this.customerDetails },
      items: this.items.map((item) => ({
        title: item.title,
        quantity: item.quantity,
        price: item.price,
        unitOrDate: item.unitOrDate
      }))
    };

    this.emailError = '';
    this.isSendingEmail = true;
    try {
      await this.orderEmailService.sendOrderEmail(submittedOrder);
      this.cart.clear();
      this.stage = 'success';
    } catch (error: unknown) {
      console.error('Unable to send order email:', error);
      this.emailError = 'Payment reference was accepted, but the order email could not be sent. Please try again.';
    } finally {
      this.isSendingEmail = false;
    }
  }

  startAnotherOrder(): void {
    void this.router.navigate(['/products']);
  }
}
