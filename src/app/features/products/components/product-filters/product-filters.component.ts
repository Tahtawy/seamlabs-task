import { Component, Input, OnInit } from '@angular/core';

import { ProductService } from '../../../../data/services';

@Component({
  selector: 'app-product-filters',
  templateUrl: './product-filters.component.html',
  styleUrls: ['./product-filters.component.scss'],
})
export class ProductFiltersComponent implements OnInit {
  @Input() items: any[] = [];
  @Input() title: string = '';
  @Input() itemPre: string = '';
  selectedCategories: string[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.clearFilters$.subscribe((clearFilter) => {
      if (clearFilter) this.selectedCategories = [];
    });
  }

  onCheckboxChange(event: any, title: string) {
    if (event.target.checked) {
      this.selectedCategories.push(event.target.value);
    } else {
      const index = this.selectedCategories.findIndex(
        (x) => x === event.target.value
      );
      this.selectedCategories.splice(index, 1);
    }

    if (title === 'Categories')
      this.productService.selectedCategories$.next(this.selectedCategories);
    else this.productService.selectedPrices$.next(this.selectedCategories);
  }
}
