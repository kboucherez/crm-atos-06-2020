import { Component, OnInit, OnDestroy } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { Order } from 'src/app/shared/models/order';
import { Subscription, Observable } from 'rxjs';
import { StateOrder } from 'src/app/shared/enums/state-order.enum';
@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit, OnDestroy {
  public states = Object.values(StateOrder);
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

  public changeState(item: Order, e): void {
    this.os.changeState(item, e.target.value).subscribe((res) => {
      //console.log(res);
      // res etant la reponse de l'api, traiter les codes d'erreur
      item.state = res.state;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
