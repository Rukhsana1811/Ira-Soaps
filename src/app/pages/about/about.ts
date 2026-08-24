
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { WireCut } from '../../pages/wire-cut/wire-cut';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink, WireCut],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {
 values = [
    { icon: 'bi-flower1', title: 'Ingredient-first', text: 'We formulate around what an ingredient can do, not around a shelf trend — every batch is built from oils, herbs and clays we can name.' },
    { icon: 'bi-hand-index-thumb', title: 'Made by hand', text: 'No filling lines, no automated moulding. Every bar is poured, cut and wrapped by a person in our workshop.' },
    { icon: 'bi-recycle', title: 'Low-waste by design', text: 'Bar formats over bottles where we can, recyclable paper over plastic, and concrete vessels built to outlive the candle inside them.' },
    { icon: 'bi-heart', title: 'Honest about limits', text: 'Handmade means small batches and natural variation — we would rather say that plainly than oversell consistency we can\'t promise.' }
  ];
}