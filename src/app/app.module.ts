import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebmodulesModule} from './webmodules/webmodules.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { TestingComponent } from './testing/testing.component';
import { Testing2Component } from './testing2/testing2.component'; 
import { DatashareService } from './services/datashare.service';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { HomeModule } from './home/home.module';
@NgModule({
  declarations: [
    AppComponent,
    TestingComponent,
    Testing2Component,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WebmodulesModule,
    HomeModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    DatashareService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
