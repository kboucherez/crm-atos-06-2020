import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPipe } from './pipes/total.pipe';
import { StateDirective } from './directives/state.directive';
import { CaPipe } from './pipes/ca.pipe';



@NgModule({
  declarations: [TotalPipe, StateDirective, CaPipe],
  imports: [
    CommonModule
  ],
  exports: [TotalPipe, StateDirective, CaPipe]
})
export class SharedModule { }
