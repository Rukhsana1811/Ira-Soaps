import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { Products } from './products';

export interface OrderEmailData {
  product: Products;
  quantity: number;
  subtotal: number;
  deliveryCharge: number;
  handlingCharge: number;
  total: number;
  orderId: string;
  utr: string;
  customerDetails: {
    fullName: string;
    contactNumber: string;
    address: string;
    cityState: string;
    pincode: string;
  };
  items?: Array<{
    title: string;
    quantity: number;
    price: number;
    unitOrDate?: string;
  }>;
}

@Injectable({ providedIn: 'root' })
export class OrderEmailService {
  private readonly serviceId = 'service_c1qtio7';
  private readonly templateId = 'template_7txtsgb';
  private readonly publicKey = 'GUI3g8BFHCpW-5_LN';
  private readonly ownerEmail = 'iraasoaps@gmail.com';

  sendOrderEmail(order: OrderEmailData): Promise<void> {
    const { product, customerDetails } = order;
    const itemDetails = order.items?.length
      ? order.items.map((item) => `${item.title} × ${item.quantity} — INR ${(item.price * item.quantity).toFixed(2)}${item.unitOrDate ? ` (${item.unitOrDate})` : ''}`)
      : [`${product.name} × ${order.quantity} — INR ${(product.price * order.quantity).toFixed(2)}`];
    const details = [
      `Order ID: ${order.orderId}`,
      `UTR / reference number: ${order.utr}`,
      '',
      'Customer details',
      `Full name: ${customerDetails.fullName}`,
      `Contact number: ${customerDetails.contactNumber}`,
      `Delivery address: ${customerDetails.address}`,
      `City / State: ${customerDetails.cityState}`,
      `Pincode: ${customerDetails.pincode}`,
      '',
      'Order details',
      ...itemDetails,
      `Subtotal: INR ${order.subtotal.toFixed(2)}`,
      `Delivery charges: INR ${order.deliveryCharge.toFixed(2)}`,
      `Handling charges: INR ${order.handlingCharge.toFixed(2)}`,
      `Total amount: INR ${order.total.toFixed(2)}`
    ].join('\n');

    return emailjs.send(this.serviceId, this.templateId, {
      to_email: this.ownerEmail,
      order_id: order.orderId,
      utr: order.utr,
      customer_name: customerDetails.fullName,
      contact_number: customerDetails.contactNumber,
      delivery_address: customerDetails.address,
      city_state: customerDetails.cityState,
      pincode: customerDetails.pincode,
      product_name: product.name,
      product_size: product.size,
      quantity: String(order.quantity),
      subtotal: order.subtotal.toFixed(2),
      delivery_charge: order.deliveryCharge.toFixed(2),
      handling_charge: order.handlingCharge.toFixed(2),
      total_amount: order.total.toFixed(2),
      order_details: details
    }, this.publicKey).then(() => undefined);
  }
}