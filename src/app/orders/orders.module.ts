import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageListOrdersComponent } from './pages/page-list-orders/page-list-orders.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { TemplatesModule } from '../templates/templates.module';
import { TextModule } from '../text/text.module';
import { LibraryModule } from '../library/library.module';
import { SharedModule } from '../shared/shared.module';
import { PageAddOrderComponent } from './pages/page-add-order/page-add-order.component';
import { FormOrderComponent } from './components/form-order/form-order.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [PageListOrdersComponent, PageAddOrderComponent, FormOrderComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    TemplatesModule,
    TextModule,
    LibraryModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class OrdersModule { }
