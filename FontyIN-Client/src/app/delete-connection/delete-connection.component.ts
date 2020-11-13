import { Component, Inject, InjectionToken } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ContactService } from '../services/contact/contact.service';

// expect const DIALOG_DATA = new InjectionToken('DIALOG_DATA');

@Component({
  selector: 'app-delete-connection',
  templateUrl: './delete-connection.component.html',
  styleUrls: ['./delete-connection.component.css']
})
export class DeleteConnectionComponent {
  loggedInUser = 1;

  constructor(
    private contactService: ContactService,
    public dialogRef: MatDialogRef<DeleteConnectionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      console.log("Data " + data.connectionId)
    }

  onNoClick(): void {
    // Close dialog
    this.dialogRef.close();
  }


  delete() {
    // Delete connection
    console.log("DELETING ID: " + this.data.connection);
    console.log("DELETING ID: " + this.data.connection.firstName);

    this.contactService.delete(this.data.connection.id)
    .subscribe();

    // Close dialog
    this.dialogRef.close();
  }

  
}
