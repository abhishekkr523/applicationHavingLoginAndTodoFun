import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form-ngModel/form.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'form',component:FormComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [RouterModule]
})
export class WebmodulesRoutingModule { }
