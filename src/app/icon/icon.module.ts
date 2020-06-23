import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDeleteComponent } from './components/icons/icon-delete.component';
import { IconEditComponent } from './components/icons/icon-edit.component';
import { IconNavComponent } from './components/icons/icon-nav.component';
import { IconCloseComponent } from './components/icons/icon-close.component';


@NgModule({
  declarations: [IconDeleteComponent, IconEditComponent, IconNavComponent, IconCloseComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [IconDeleteComponent, IconEditComponent, IconNavComponent, IconCloseComponent]
})
export class IconModule { }
