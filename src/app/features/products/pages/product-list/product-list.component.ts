import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../../../data/services';
import { Product } from '../../../../data/models';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  categories: string[] = [];
  selectedCategories: string[] = [];
  pricesFilter: string[] = [];
  selectedPrices: number[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((response) => {
      const { products } = response;
      this.productService.products$.next(products);
    });
    this.productService.products$.subscribe((products) => {
      this.products = products;
      this.extractFilters();
    });
    this.productService.selectedCategories$.subscribe((categories) => {
      this.selectedCategories = categories;
    });
    this.productService.selectedPrices$.subscribe((prices) => {
      this.selectedPrices = [];
      prices.map((price) => {
        this.selectedPrices = this.selectedPrices.concat(
          price.split(' -> ').map(Number)
        );
      });
    });
  }

  extractFilters() {
    if (this.products.length === 0) return;

    const categories: string[] = [];
    const prices: number[] = [];
    const pricesFilter: string[] = [];

    this.products.forEach((product) => {
      const { category, price } = product;
      categories.push(category);
      prices.push(price);
    });

    const minPrice = Math.floor(Math.min(...prices) / 100) * 100;
    const maxPrice = Math.ceil(Math.max(...prices) / 100) * 100;

    for (let price = minPrice; price < maxPrice; price += 100) {
      pricesFilter.push(`${price} -> ${price + 100}`);
    }

    this.categories = categories;
    this.pricesFilter = pricesFilter;
  }
}
