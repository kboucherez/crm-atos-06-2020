import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageListClientsComponent } from './pages/page-list-clients/page-list-clients.component';
import { ClientsRoutingModule } from './clients-routing.module';
import { TemplatesModule } from '../templates/templates.module';
import { LibraryModule } from '../library/library.module';
import { TextModule } from '../text/text.module';
import { SharedModule } from '../shared/shared.module';
import { PageAddClientComponent } from './pages/page-add-client/page-add-client.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormClientComponent } from './components/form-client/form-client.component';



@NgModule({
  declarations: [PageListClientsComponent, PageAddClientComponent, FormClientComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    TemplatesModule,
    TextModule,
    LibraryModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [PageAddClientComponent]
})
export class ClientsModule { }
