import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  $cartCount = new BehaviorSubject<number>(0);

  constructor() {}

  increaseCartCount() {
    this.$cartCount.next(this.$cartCount.getValue() + 1);
  }

  decreaseCartCount() {
    this.$cartCount.next(this.$cartCount.getValue() - 1);
  }
}
