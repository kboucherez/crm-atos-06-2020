import { Component, OnInit, Input } from '@angular/core';
import { ItemLink } from '../../interfaces/item-link';

@Component({
  selector: 'app-vertical-nav',
  templateUrl: './vertical-nav.component.html',
  styleUrls: ['./vertical-nav.component.scss']
})
export class VerticalNavComponent implements OnInit {
  @Input() itemsLink: ItemLink[];
  constructor() { }

  ngOnInit(): void {
  }

}
