import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: string, limit: number): string {
    if (value !== undefined && value.length > limit) {
      return value.substr(0, limit);
    }

    return value;
  }
}
