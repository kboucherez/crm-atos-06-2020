import { Component, OnInit, OnDestroy } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { Order } from 'src/app/shared/models/order';
import { Subscription, Observable } from 'rxjs';
@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit, OnDestroy {
  public listHeaders: string[];
  // public collection: Order[];
  public collection$: Observable<Order[]>;
  private sub: Subscription;
  constructor(private os: OrdersService) { }
  ngOnInit(): void {
    this.collection$ = this.os.collection;
    // this.os.collection.subscribe((col) => {
    //   this.collection = col;
    // });
    this.listHeaders = [
      'Type',
      'Client',
      'Nb Jours',
      'Tjm Ht',
      'Total HT',
      'Total TTC',
      'Total State'
    ];
    this.sub = this.os.testObservable.subscribe((datas) => {
      console.log(datas);
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
