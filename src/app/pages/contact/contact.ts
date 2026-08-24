// import { Component } from '@angular/core';

// @Component({
//   imports: [],
//   selector: 'app-contact',
//   styleUrl: './contact.sass',
//   templateUrl: './contact.html',
// })
// export class Contact {}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WhatsappHelper } from '../../whatsapp-helper';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  name = '';
  interest = 'Soaps';
  message = '';

  interests = ['Soaps', 'Shampoo bars', 'Face wash', 'Shower gel / body wash', 'Concrete art', 'Live session'];

  constructor(public whatsapp: WhatsappHelper) {}

  get isValid(): boolean {
    return this.name.trim().length > 1 && this.message.trim().length > 3;
  }

  sendOnWhatsapp(): void {
    if (!this.isValid) return;
    const text = `Hi Ira Soaps, I'm ${this.name}. I'm interested in: ${this.interest}. ${this.message}`;
    window.open(this.whatsapp.link(text), '_blank', 'noopener');
  }
}