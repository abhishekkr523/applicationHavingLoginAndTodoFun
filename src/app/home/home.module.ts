import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { WebmodulesModule } from '../webmodules/webmodules.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    WebmodulesModule,
    RouterModule
  ],
  exports:[
    DashboardComponent,
    // HomeComponent,
  ]
})
export class HomeModule { }
