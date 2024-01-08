import { Component, Input } from '@angular/core';
import { DialogboxComponent } from '../dialogbox/dialogbox.component';
import { MatDialog } from '@angular/material/dialog';
import { DatashareService } from '../../services/datashare.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(public dialog: MatDialog) { }
  @Input() abhidata: any;
  @Input() kumardata: any;

  openDialogToNavbar() {
    this.dialog.open(DialogboxComponent, {
      data: { name: "abhishek", surname: "kumar" }
    }).afterClosed().subscribe(res => {
      console.log(res);
      if (res === 'save') {
        // Retrieve existing data from local storage
        const storedData = localStorage.getItem('formData');
        const formData = storedData ? JSON.parse(storedData) : [];

        // // Push the new data to the array
        // formData.push(this.filledData.value);

        // // Convert the array to a JSON string and store it in local storage
        // localStorage.setItem('formData', JSON.stringify(formData));
      }
    })


  }
  btnclick() {
    const msgservice = new DatashareService();
    msgservice.serviceFunction()
  }
}
