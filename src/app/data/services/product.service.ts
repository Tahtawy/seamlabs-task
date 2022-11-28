import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import { ProductListResponse, Product } from '../models';

import { HttpClientInstanceService } from '../../shared/services';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products$ = new BehaviorSubject<Product[]>([]);
  selectedCategories$ = new BehaviorSubject<string[]>([]);
  selectedPrices$ = new BehaviorSubject<string[]>([]);
  clearFilters$ = new BehaviorSubject<boolean>(false);

  constructor(private httpClientInstanceService: HttpClientInstanceService) {}

  getProducts(): Observable<ProductListResponse> {
    return this.httpClientInstanceService.get('/products');
  }

  searchProducts(query: string = ''): Observable<ProductListResponse> {
    return this.httpClientInstanceService.get(`/products/search?q=${query}`);
  }

  getProduct(id: string): Observable<Product> {
    return this.httpClientInstanceService.get(`/products/${id}`);
  }
}
