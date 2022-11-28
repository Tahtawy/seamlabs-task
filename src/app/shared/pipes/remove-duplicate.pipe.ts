import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeDuplicate',
  pure: false,
})
export class RemoveDuplicatePipe implements PipeTransform {
  transform(value: any[]): any[] {
    return Array.from(new Set(value));
  }
}
