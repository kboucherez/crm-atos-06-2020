import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ItemLink } from '../../interfaces/item-link';

@Component({
  selector: 'app-vertical-nav',
  templateUrl: './vertical-nav.component.html',
  styleUrls: ['./vertical-nav.component.scss']
})
export class VerticalNavComponent implements OnInit, OnChanges {
  @Input() itemsLink: ItemLink[];
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    console.log(this.itemsLink); // voir ds la doc angular lifecycle
  }

}
