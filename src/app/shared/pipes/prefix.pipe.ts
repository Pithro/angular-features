import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prefix'
})
export class PrefixPipe implements PipeTransform {

  transform(value: string, prefix: string): string {
    if (value === undefined || value === null) {
      return '';
    }

    if (prefix === undefined || prefix === null) {
      return value;
    }

    return `${ prefix }${ value }`;
  }
}
