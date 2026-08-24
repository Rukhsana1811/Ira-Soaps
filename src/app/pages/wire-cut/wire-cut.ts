import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-wire-cut',
  standalone: true,
  templateUrl: './wire-cut.html',
  styleUrl: './wire-cut.scss'
})
export class WireCut {
  @Input() bg = 'transparent';
  @Input() fg = 'var(--ira-cream)';
}