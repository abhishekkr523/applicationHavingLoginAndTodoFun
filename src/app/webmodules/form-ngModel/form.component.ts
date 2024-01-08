import { Component } from '@angular/core';


@Component({
  selector: 'app-for',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  // abhikr: any;
  countryList = [
    { "No": 1, "country": "India" },
    { "No": 2, "country": "Nepal" },
    { "No": 3, "country": "Pakistan" }
  ]

  formData = {
    name: '',
    state: '',
    country: '',
    postalCode: '',
    date: null,
    gender: ''
  };
xxx: any;
constructor(){
  // console.log("checking=",this.formData)
}
  xyz(jj:any){
    // this.abhikr=this.formData;
    console.log(jj)
    console.log(this.formData)
  }

}
