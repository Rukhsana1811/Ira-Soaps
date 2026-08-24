// import { Component } from '@angular/core';

// @Component({
//   imports: [],
//   selector: 'app-footer',
//   styleUrl: './footer.sass',
//   templateUrl: './footer.html',
// })
// export class Footer {}
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WhatsappHelper } from '../../whatsapp-helper';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  year = new Date().getFullYear();
  constructor(public whatsapp: WhatsappHelper) {}
}