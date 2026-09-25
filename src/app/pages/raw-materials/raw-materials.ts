import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RawMaterialService } from '../../raw-material.service';
import { RawMaterial } from '../../raw-materials';
import { RawMaterialCard } from '../../shared/raw-material-card/raw-material-card';

@Component({
  selector: 'app-raw-materials',
  standalone: true,
  imports: [CommonModule, RawMaterialCard],
  templateUrl: './raw-materials.html',
  styleUrl: './raw-materials.scss'
})
export class RawMaterials implements OnInit {
  readonly allCategories: Array<{ id: string; label: string }>;
  activeCategory = 'all';
  visible: RawMaterial[] = [];

  constructor(
    private rawMaterialService: RawMaterialService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.allCategories = [{ id: 'all', label: 'All raw materials' }, ...this.rawMaterialService.categories];
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      this.activeCategory = params.get('category') ?? 'all';
      this.visible = this.rawMaterialService.getByCategory(this.activeCategory);
    });
  }

  selectCategory(category: string): void {
    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: category === 'all' ? {} : { category }
    });
  }
}
