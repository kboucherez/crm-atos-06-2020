import { Pipe, PipeTransform } from '@angular/core';
import { Order } from '../models/order';
@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {
  transform(value: Order, ...args: any[]): any {
    // console.log(value);
    // console.log(args);
    if (value) {
      if (args[0] === 'ttc') {
        return (value.nbJours * value.tjmHt) * (1 + value.tva / 100);
      }
      return value.nbJours * value.tjmHt;
    }
    return null;
  }
}
