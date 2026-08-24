import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
    title: 'Ira Soaps — Handmade, Chemical-Free Soaps & Concrete Art'
  },
  {
    path: 'products',
    loadComponent: () =>
      import('./pages/products/products').then((m) => m.ProductsComponent),
    title: 'Shop — Ira Soaps'
  },
  {
    path: 'live-sessions',
    loadComponent: () =>
      import('./pages/live-sessions/live-sessions').then((m) => m.LiveSessions
),
    title: 'Live Making Sessions — Ira Soaps'
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about').then((m) => m.About),
    title: 'Our Story — Ira Soaps'
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact').then((m) => m.Contact),
    title: 'Contact — Ira Soaps'
  },
  { path: '**', redirectTo: '' }
];
