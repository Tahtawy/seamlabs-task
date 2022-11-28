import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringPrefix',
  pure: false,
})
export class StringPrefixPipe implements PipeTransform {
  transform(value: string, prefix: string): string {
    return `${prefix} ${value}`;
  }
}
