import { Pipe, PipeTransform } from '@angular/core';
import { Client } from '../models/client';

@Pipe({
  name: 'ca'
})
export class CaPipe implements PipeTransform {

  transform(value: Client, ...args: unknown[]): unknown {
    if (value) {
      return value.ca * (1 + value.tva / 100);
    }
    return null;
  }

}
