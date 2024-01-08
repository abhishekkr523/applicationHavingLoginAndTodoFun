import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutusComponent } from './aboutus/aboutus.component';
import { SeemoreComponent } from './seemore/seemore.component';
import { ReferenceComponent } from './reference/reference.component';



@NgModule({
  declarations: [
    AboutusComponent,
    SeemoreComponent,
    ReferenceComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AboutusModule { }
