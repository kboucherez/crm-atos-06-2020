import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageListOrdersComponent } from './pages/page-list-orders/page-list-orders.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { TemplatesModule } from '../templates/templates.module';
import { TextModule } from '../text/text.module';
import { LibraryModule } from '../library/library.module';
import { SharedModule } from '../shared/shared.module';
import { PageAddOrderComponent } from './pages/page-add-order/page-add-order.component';



@NgModule({
  declarations: [PageListOrdersComponent, PageAddOrderComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    TemplatesModule,
    TextModule,
    LibraryModule,
    SharedModule
  ]
})
export class OrdersModule { }
