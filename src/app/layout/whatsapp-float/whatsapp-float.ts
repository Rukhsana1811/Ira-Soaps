// import { Component } from '@angular/core';

// @Component({
//   imports: [],
//   selector: 'app-whatsapp-float',
//   styleUrl: './whatsapp-float.sass',
//   templateUrl: './whatsapp-float.html',
// })
// export class WhatsappFloat {}
import { Component } from '@angular/core';
import { WhatsappHelper } from '../../whatsapp-helper';

@Component({
  selector: 'app-whatsapp-float',
  standalone: true,
  templateUrl: './whatsapp-float.html',
  styleUrl: './whatsapp-float.scss'
})
export class WhatsappFloat {
  constructor(public whatsapp: WhatsappHelper) {}
}