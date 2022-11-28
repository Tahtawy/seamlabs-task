import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../../../data/models';

@Pipe({
  name: 'priceFilter',
  pure: false,
})
export class PriceFilterPipe implements PipeTransform {
  transform(value: Product[], prices: number[]): Product[] {
    let products: Product[] = [...value];
    const min = Math.min(...prices);
    const max = Math.max(...prices);

    if (prices.length) {
      products = products.filter((product) => {
        const { price } = product;

        if (price >= min && price <= max) return product;

        return null;
      });
    }

    return products;
  }
}
