import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordWrap',
  pure: false,
})
export class WordWrapPipe implements PipeTransform {
  transform(value: string, length: number): unknown {
    return `${value.substring(0, length)}...`;
  }
}
