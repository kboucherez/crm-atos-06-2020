import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerticalNavComponent } from './components/vertical-nav/vertical-nav.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [VerticalNavComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [VerticalNavComponent]
})
export class LibraryModule { }
