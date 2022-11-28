import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { ProductService, CartService } from '../../../../data/services';
import { SessionService } from '../../../../core/authentication/services';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
})
export class NavigationBarComponent implements OnInit {
  collapseNav: boolean = true;
  keyUpSubject$ = new Subject<string>();
  loginStatus: boolean = false;
  cartCount: number = 0;

  constructor(
    private productService: ProductService,
    private sessionService: SessionService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.keyUpSubject$
      .pipe(debounceTime(1000))
      .subscribe((searchQuery: string) => {
        this.productService.clearFilters$.next(true);
        this.searchProducts(searchQuery);
      });

    this.sessionService.getLoggedInStatus();
    this.sessionService.isLoggedIn$.subscribe((loginStatus) => {
      this.loginStatus = loginStatus;
    });

    this.cartService.$cartCount.subscribe((cartCount) => {
      this.cartCount = cartCount;
    });
  }

  toggleNavbarCollapse() {
    this.collapseNav = !this.collapseNav;
  }

  onSearchChange(event: any) {
    const { value } = event.target;
    this.keyUpSubject$.next(value);
  }

  searchProducts(searchQuery: string) {
    this.productService.searchProducts(searchQuery).subscribe((response) => {
      this.productService.products$.next(response.products);
    });
  }

  signOut() {
    this.sessionService.signOut();
  }
}
