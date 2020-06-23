import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '../ui/ui.module';
import { IconModule } from '../icon/icon.module';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { TextModule } from '../text/text.module';
import { RouterModule } from '@angular/router';
import { LoginModule } from '../login/login.module';



@NgModule({
  declarations: [HeaderComponent, NavComponent, FooterComponent],
  exports: [LoginModule, UiModule, IconModule, TextModule, HeaderComponent, NavComponent, FooterComponent],
  imports: [
    CommonModule,
    UiModule,
    IconModule,
    TextModule,
    RouterModule,
    LoginModule
  ]
})
export class CoreModule { }
