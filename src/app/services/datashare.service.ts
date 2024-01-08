import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatashareService {
  
  constructor() { }
  
  serviceFunction(){
    
    alert("service work.........")
    
    // console.log(this.filledData.value);

    // Retrieve existing data from local storage
    const storedData = localStorage.getItem('formData');
    const formData = storedData ? JSON.parse(storedData) : [];

    // Push the new data to the array
    // formData.push(this.filledData.value);

    // Convert the array to a JSON string and store it in local storage
    localStorage.setItem('formData', JSON.stringify(formData));
  }
  serviceProperty="jhhj";
}
