import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerticalNavComponent } from './components/vertical-nav/vertical-nav.component';
import { RouterModule } from '@angular/router';
import { TableLightComponent } from './components/table-light/table-light.component';
import { ButtonComponent } from './components/button/button.component';



@NgModule({
  declarations: [VerticalNavComponent, TableLightComponent, ButtonComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [VerticalNavComponent, TableLightComponent, ButtonComponent]
})
export class LibraryModule { }
