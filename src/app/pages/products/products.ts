// import { Component } from '@angular/core';

// @Component({
//   imports: [],
//   selector: 'app-products',
//   styleUrl: './products.sass',
//   templateUrl: './products.html',
// })
// export class Products {}
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../product';
import { CategoryMeta, Products } from '../../products';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.scss'
})
export class ProductsComponent
 implements OnInit {
  categories: CategoryMeta[];
  activeCategory = 'all';
  visible: Products[] = [];

  constructor(
    private product: Product,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.categories = this.product.categories;
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      this.activeCategory = params.get('category') ?? 'all';
      this.visible = this.product.getByCategory(this.activeCategory);
    });
  }

  selectCategory(id: string): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: id === 'all' ? {} : { category: id }
    });
  }

  activeMeta(): CategoryMeta {
    return this.categories.find((c) => c.id === this.activeCategory) ?? this.categories[0];
  }
}