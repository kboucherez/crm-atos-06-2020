import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerticalNavComponent } from './components/vertical-nav/vertical-nav.component';
import { RouterModule } from '@angular/router';
import { TableLightComponent } from './components/table-light/table-light.component';
import { ButtonComponent } from './components/button/button.component';
import { TableDarkComponent } from './components/table-dark/table-dark.component';



@NgModule({
  declarations: [VerticalNavComponent, TableLightComponent, ButtonComponent, TableDarkComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [VerticalNavComponent, TableLightComponent, ButtonComponent, TableDarkComponent]
})
export class LibraryModule { }
