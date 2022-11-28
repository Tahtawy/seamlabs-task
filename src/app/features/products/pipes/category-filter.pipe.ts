import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../../../data/models';

@Pipe({
  name: 'categoryFilter',
  pure: false,
})
export class CategoryFilterPipe implements PipeTransform {
  transform(value: Product[], categories: string[]): Product[] {
    let products: Product[] = [...value];

    if (categories.length) {
      products = products.filter((product) =>
        categories.includes(product.category)
      );
    }

    return products;
  }
}
