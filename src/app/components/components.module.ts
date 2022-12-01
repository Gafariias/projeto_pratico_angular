import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { TechsComponent } from './techs/techs.component';



@NgModule({
  declarations: [
    HeaderComponent,
    TechsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    TechsComponent
  ]
})
export class ComponentsModule { }
