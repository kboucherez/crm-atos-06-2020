import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageListClientsComponent } from './pages/page-list-clients/page-list-clients.component';
import { ClientsRoutingModule } from './clients-routing.module';
import { TemplatesModule } from '../templates/templates.module';
import { LibraryModule } from '../library/library.module';
import { TextModule } from '../text/text.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [PageListClientsComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    TemplatesModule,
    TextModule,
    LibraryModule,
    SharedModule
  ]
})
export class ClientsModule { }
