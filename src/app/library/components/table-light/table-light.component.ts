import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Order } from 'src/app/shared/models/order';
@Component({
  selector: 'app-table-light',
  templateUrl: './table-light.component.html',
  styleUrls: ['./table-light.component.scss']
})
export class TableLightComponent implements OnInit, OnChanges {
  @Input() headers: string[];
  @Input() collection: Order[];
  constructor() {
    console.log(this.collection);
  }
  ngOnChanges(): void {
    console.log(this.collection);
  }
  ngOnInit(): void {
    console.log(this.collection);
  }
}
