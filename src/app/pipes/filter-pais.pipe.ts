import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPais'
})
export class FilterPaisPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
