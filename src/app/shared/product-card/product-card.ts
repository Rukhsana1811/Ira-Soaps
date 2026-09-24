import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Products } from '../../products';
import { UpiPaymentRequest, UpiService } from '../../upi.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss'
})
export class ProductCard {
  @Input({ required: true }) product!: Products;
  checkoutOpen = false;
  paymentRequest?: UpiPaymentRequest;
  showPaymentStep = false;
  customerDetails = {
    fullName: '',
    contactNumber: '',
    address: '',
    cityState: '',
    pincode: ''
  };
  customerDetailsError = '';
  contactNumberError = '';
  pincodeError = '';
  utr = '';
  utrError = '';
  paymentSubmitted = false;
  showSubmissionSuccess = false;

  constructor(private upiService: UpiService) {}

  checkoutProduct(): void {
    this.checkoutOpen = true;
    this.paymentRequest = undefined;
    this.showPaymentStep = false;
    this.customerDetails = {
      fullName: '',
      contactNumber: '',
      address: '',
      cityState: '',
      pincode: ''
    };
    this.customerDetailsError = '';
    this.contactNumberError = '';
    this.pincodeError = '';
    this.utr = '';
    this.utrError = '';
    this.paymentSubmitted = false;
    this.showSubmissionSuccess = false;

  }

  proceedToPayment(): void {
    const { fullName, contactNumber, address, cityState, pincode } = this.customerDetails;
    this.validateContactNumber(contactNumber);
    this.validatePincode(pincode);
    const isValid = fullName.trim() && /^\d{10}$/.test(contactNumber.trim()) && address.trim()
      && cityState.trim() && /^\d{6}$/.test(pincode.trim());

    if (!isValid) {
      this.customerDetailsError = 'Please enter a valid name, 10-digit contact number, complete address, city/state, and 6-digit pincode.';
      return;
    }

    this.customerDetailsError = '';
    this.paymentRequest = this.upiService.createPaymentRequest(this.product);
    this.showPaymentStep = true;
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

  submitPaymentReference(): void {
    const reference = this.utr.trim();
    this.utr = reference;

    if (!/^[A-Za-z0-9]{6,30}$/.test(reference)) {
      this.utrError = 'Enter the UTR shown in your UPI app (6–30 letters or numbers).';
      return;
    }

    this.utrError = '';
    this.paymentSubmitted = true;
    this.closePayment();
  }

  validatePaymentReference(): void {
    if (!this.utr.trim()) {
      this.utrError = '';
      return;
    }

    this.utrError = /^[A-Za-z0-9]{6,30}$/.test(this.utr.trim())
      ? ''
      : 'UTR must contain only letters and numbers (6–30 characters).';
  }

  closePayment(): void {
    this.showSubmissionSuccess = this.paymentSubmitted;
    this.checkoutOpen = false;
    this.paymentRequest = undefined;
    this.showPaymentStep = false;
    this.customerDetailsError = '';
    this.contactNumberError = '';
    this.pincodeError = '';
    this.utrError = '';
  }

  closeSubmissionSuccess(): void {
    this.showSubmissionSuccess = false;
  }
}