import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DatashareService } from '../../services/datashare.service';


@Component({
  selector: 'app-dialogbox',
  templateUrl: './dialogbox.component.html',
  styleUrls: ['./dialogbox.component.scss']  // <-- Fix the typo here
})


export class DialogboxComponent implements OnInit {
  kumar = 80;
  countryList = [
    { "No": 1, "country": "India" },
    { "No": 2, "country": "Nepal" },
    { "No": 3, "country": "Pakistan" }
  ]

  filledData!: FormGroup;
  
  serviceHolder: any
  constructor(private formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any, private _msgService: DatashareService) {
    console.log("dialogdata=", this.data);
  }
  ngOnInit(): void {
    this.filledData = this.formBuilder.group({
      id: ["", Validators.required],
      firstname: ["", Validators.required],
      state: ["", Validators.required],
      country: ["", Validators.required],
      postalcode: ["", Validators.required],
      date: ["", Validators.required],
      gender: ["", Validators.required],
    })

    
    // console.log(this.filledData);

    if (this.data) {
      this.filledData.controls['firstname'].setValue(this.data.firstname);
      this.filledData.controls['state'].setValue(this.data.state);
      this.filledData.controls['country'].setValue(this.data.country);
      this.filledData.controls['postalcode'].setValue(this.data.firstname);
      this.filledData.controls['date'].setValue(this.data.date);
      this.filledData.controls['gender'].setValue(this.data.gender);
    }

    this.serviceHolder = this._msgService.serviceProperty;
  }
  addFilledData() {
    // Retrieve existing data from local storage
    const storedData = localStorage.getItem('formData');
    const formData = storedData ? JSON.parse(storedData) : [];

    // Push the new data to the array
    formData.push(this.filledData.value);

    // Convert the array to a JSON string and store it in local storage
    localStorage.setItem('formData', JSON.stringify(formData));

   

  }

}

