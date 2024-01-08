
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogboxComponent } from '../dialogbox/dialogbox.component';
import { DatashareService } from '../../services/datashare.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'firstname', 'state', 'country', 'postalcode', 'date', 'gender', 'delete'];
  dataSource: any[] = [];

  @ViewChild(MatTable)
  table!: MatTable<any>;
  serviceHolder: any;

  constructor(public dialog: MatDialog,) { }

  ngOnInit(): void {
    // Check if localStorage is available before attempting to retrieve data
    if (typeof localStorage !== 'undefined') {
      // Retrieve data from local storage when the component is created
      const storedData = localStorage.getItem('formData');

      if (storedData) {
        // Parse the JSON string to get the object
        const parsedData = JSON.parse(storedData);
        console.log("abhi", parsedData);

        // Use the retrieved data to populate the dataSource
        this.dataSource = parsedData;
        console.log("kumar", this.dataSource);
      }
    }
  }

  openDialogToTable() {
    this.dialog.open(DialogboxComponent, {
      data: { name: "abhishek", surname: "kumar" }
    })
    .afterClosed().subscribe(res => {
      console.log(res);
      if (res === 'afterSave') {
        if (typeof localStorage !== 'undefined') {
          // Retrieve data from local storage 
          const storedData = localStorage.getItem('formData');

          if (storedData) {
            // Parse the JSON string to get the object
            const parsedData = JSON.parse(storedData);
            console.log("abhi", parsedData);

            // Use the retrieved data to populate the dataSource
            this.dataSource = parsedData;
            // this.table.renderRows(); // This will render the rows in the table 
            console.log("kumar", this.dataSource);
          }
        }
      }
    }) 
  }

  deleteRow(rowid: number): void {
    // Remove the selected row from the dataSource
    this.dataSource.splice(rowid, 1);

    // Update the dataSource and render the rows
    this.table.renderRows();

    // Update the data in local storage
    localStorage.setItem('formData', JSON.stringify(this.dataSource));
  }

  editRow(row: any, j: number): void {
    // Open the dialog for editing with the selected row data
    const dialogRef = this.dialog.open(DialogboxComponent, {
      data: row
    });
  
    // Subscribe to the dialog's afterClosed event
    dialogRef.afterClosed().subscribe((result) => {
      // Check if the user clicked Save in the dialog
      if (result) {
        // Find the index of the edited row
        const index = this.dataSource.indexOf(row);
  
        // Update the row with the edited data
        Object.assign(this.dataSource[index], result);
  
        // Update local storage
        localStorage.setItem('formData', JSON.stringify(this.dataSource));
  
        // Render the rows
        this.table.renderRows();
      }
    });
  }
  

  

  getDataFromLocalStorageAndKeepIntoThe_dataSource_Array() {

  }


  
}


