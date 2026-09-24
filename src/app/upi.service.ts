import { Injectable } from '@angular/core';
import { Products } from './products';

export interface UpiPaymentRequest {
  orderId: string;
  amount: number;
  upiUri: string;
  qrCodeUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class UpiService {
  private readonly upiId = 'rukhsanakhan1811-1@oksbi';
  private readonly payeeName = 'Ira Soaps';

  createPaymentRequest(product: Products, totalAmount = product.price || 0): UpiPaymentRequest {
    const amount = Number(totalAmount.toFixed(2));
    const orderId = `IRA${Date.now().toString(36).toUpperCase()}`;
    const upiUri = `upi://pay?${new URLSearchParams({
      pa: this.upiId,
      pn: this.payeeName,
      am: amount.toFixed(2),
      cu: 'INR',
      tn: orderId
    }).toString()}`;

    return {
      orderId,
      amount,
      upiUri,
      qrCodeUrl: `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(upiUri)}`
    };
  }
}