import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-icon',
  standalone: true,
  imports: [CommonModule],
  template: `
    <svg viewBox="0 0 120 120" class="ira-icon" [class.is-lg]="size === 'lg'">
      <ng-container [ngSwitch]="icon">
        <g *ngSwitchCase="'bar'">
          <rect x="24" y="46" width="72" height="34" rx="10" />
          <path d="M24 58c8-6 64-6 72 0" class="line-soft" />
          <path d="M40 46v-6a20 20 0 0 1 40 0v6" class="line-thin" />
        </g>
        <g *ngSwitchCase="'bottle'">
          <rect x="46" y="20" width="16" height="12" rx="2" />
          <path d="M46 32c-8 6-10 14-10 22v40a6 6 0 0 0 6 6h36a6 6 0 0 0 6-6V54c0-8-2-16-10-22z" />
          <path d="M40 66h40" class="line-thin" />
        </g>
        <g *ngSwitchCase="'jar'">
          <rect x="34" y="26" width="52" height="14" rx="4" />
          <path d="M30 40h60l-5 52a8 8 0 0 1-8 7H43a8 8 0 0 1-8-7z" />
          <path d="M34 60h52" class="line-thin" />
        </g>
        <g *ngSwitchCase="'vase'">
          <path d="M46 22h28l4 20c6 8 10 18 10 30 0 18-12 26-28 26s-28-8-28-26c0-12 4-22 10-30z" />
          <path d="M42 44h36" class="line-thin" />
        </g>
        <g *ngSwitchCase="'candle'">
          <rect x="38" y="40" width="44" height="52" rx="6" />
          <rect x="55" y="26" width="10" height="16" rx="2" />
          <path d="M60 18c4 4 4 8 0 10-4-2-4-6 0-10z" class="flame" />
        </g>
        <g *ngSwitchCase="'kit'">
          <rect x="22" y="34" width="76" height="56" rx="8" />
          <path d="M22 50h76" class="line-thin" />
          <circle cx="40" cy="42" r="3" />
          <circle cx="52" cy="42" r="3" />
        </g>
      </ng-container>
    </svg>
  `,
  styleUrl: './product-icon.scss'
})
export class ProductIcon {
  @Input() icon: 'bar' | 'bottle' | 'jar' | 'vase' | 'candle' | 'kit' = 'bar';
  @Input() size: 'md' | 'lg' = 'md';
}