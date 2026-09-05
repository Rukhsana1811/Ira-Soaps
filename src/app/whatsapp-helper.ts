// import { Service } from '@angular/core';

// @Service()
// export class WhatsappHelper {}
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class WhatsappHelper {
  /** Brand WhatsApp number in international format, no + or spaces. */
  private readonly number = '919501958591';

  link(message: string): string {
    return `https://wa.me/${this.number}?text=${encodeURIComponent(message)}`;
  }

  productEnquiryLink(productName: string): string {
    return this.link(`Hi Ira Soaps! I'd like to know more about the "${productName}".`);
  }

  kitEnquiryLink(kitName: string): string {
    return this.link(`Hi Ira Soaps! I'd like to enquire about the "${kitName}".`);
  }

  sessionBookingLink(sessionName?: string): string {
    const msg = sessionName
      ? `Hi Ira Soaps! I'd like to book the live session: "${sessionName}".`
      : `Hi Ira Soaps! I'd like to book a live making session — could you share the upcoming slots?`;
    return this.link(msg);
  }

  generalLink(): string {
    return this.link('Hi Ira Soaps! I have a question about your handmade products.');
  }
}