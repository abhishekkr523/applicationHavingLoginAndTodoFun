import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebdesigningComponent } from './webdesigning/webdesigning.component';
import { AppdesigningComponent } from './appdesigning/appdesigning.component';
import { ReferencesComponent } from './references/references.component';



@NgModule({
  declarations: [
    WebdesigningComponent,
    AppdesigningComponent,
    ReferencesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class OurservicesModule { }
