import { Component, Input, OnInit } from '@angular/core';

import { Product } from '../../../../data/models';
import { CartService } from '../../../../data/services';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  @Input() product: Product = {} as Product;
  cartCount: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.$cartCount.subscribe((cartCount) => {
      this.cartCount = cartCount;
    });
  }

  increaseCart() {
    this.cartService.increaseCartCount();
  }

  decreaseCart() {
    this.cartService.decreaseCartCount();
  }
}
