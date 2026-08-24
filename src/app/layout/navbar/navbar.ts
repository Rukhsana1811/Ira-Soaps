// import { Component } from '@angular/core';

// @Component({
//   imports: [],
//   selector: 'app-navbar',
//   styleUrl: './navbar.sass',
//   templateUrl: './navbar.html',
// })
// export class Navbar {
  
// }
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { WhatsappHelper } from '../../whatsapp-helper';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  collapsed = true;

  constructor(public whatsapp: WhatsappHelper) {}

  toggle(): void {
    this.collapsed = !this.collapsed;
  }

  close(): void {
    this.collapsed = true;
  }
}