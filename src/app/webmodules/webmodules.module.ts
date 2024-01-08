import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
// import { FormComponent } from './form/form.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { DialogboxComponent } from './dialogbox/dialogbox.component';
import {MatDialogModule} from '@angular/material/dialog';
import { NavbarComponent } from './navbar/navbar.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { ReactiveFormsModule, } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import { FormComponent } from './form-ngModel/form.component';
import {FormsModule} from '@angular/forms';
import { WebmodulesRoutingModule } from './webmodules-routing.module';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [
    TableComponent,
    DialogboxComponent,
    NavbarComponent,
    FormComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatRadioModule,
    FormsModule,
    WebmodulesRoutingModule,
    
  ],
  exports:[
    TableComponent,
    NavbarComponent,
    // DialogboxComponent
    FormComponent,
    NavbarComponent,
    FooterComponent
  ]
})
export class WebmodulesModule { }
