import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rate',
})
export class RatePipe implements PipeTransform {
  transform(value: number, total: number): string {
    return `${value} / ${total}`;
  }
}
