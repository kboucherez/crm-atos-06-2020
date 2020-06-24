import { Component, OnInit } from '@angular/core';
import { ItemLink } from 'src/app/library/interfaces/item-link';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  public itemsLink: ItemLink[];
  constructor() { }

  ngOnInit(): void {
    this.itemsLink = [
      {route: '/login', label: 'Login'},
      {route: '/orders', label: 'Orders'},
      {route: '/clients', label: 'Clients'},
    ]
  }

}
