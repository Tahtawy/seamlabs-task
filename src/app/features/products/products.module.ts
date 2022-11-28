import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { ProductListComponent } from './pages/product-list/product-list.component';

import { SharedModule } from '../../shared/shared.module';
import { ProductFiltersComponent } from './components/product-filters/product-filters.component';
import { ListComponent } from './components/list/list.component';
import { CategoryFilterPipe } from './pipes/category-filter.pipe';
import { PriceFilterPipe } from './pipes/price-filter.pipe';
import { FormatPricePipe } from './pipes/format-price.pipe';
import { ProductComponent } from './pages/product/product.component';
import { CartComponent } from './components/cart/cart.component';
import { RatePipe } from './pipes/rate.pipe';

@NgModule({
  declarations: [
    NavigationBarComponent,
    ProductListComponent,
    ProductFiltersComponent,
    ListComponent,
    CategoryFilterPipe,
    PriceFilterPipe,
    FormatPricePipe,
    ProductComponent,
    CartComponent,
    RatePipe,
  ],
  imports: [CommonModule, ProductsRoutingModule, SharedModule],
})
export class ProductsModule {}
