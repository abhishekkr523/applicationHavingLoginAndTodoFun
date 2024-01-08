import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Testing2Component } from './testing2/testing2.component';
import { TestingComponent } from './testing/testing.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { ContactusComponent } from './contactus/contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus/aboutus.component';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'testing',component:TestingComponent},
  {path:'testing2',component:Testing2Component},
  {path:'dashboard',component:DashboardComponent,children:[
    // {path:'',component:DashboardComponent},
    // {path:'home',component:HomeComponent},
    {path:'',component:HomeComponent},// doing empty for first opening
    {path:'home',component:HomeComponent},
    {path:'contactus',component:ContactusComponent},
    {path:'aboutus',component:AboutusComponent},
    
  ]},
  { path: '', redirectTo: '/your-module-name', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
