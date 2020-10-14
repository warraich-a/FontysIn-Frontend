import { DeleteConfirmationComponent } from './../../delete-confirmation/delete-confirmation.component';
import { MatDialog } from '@angular/material/dialog';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  openConfirmDialog (msg){
    return this.dialog.open(DeleteConfirmationComponent,{
      width: '390px',
      // panelClass: `delete-confirm-container`,
      disableClose: true,
      data:{
        message: msg
      }
    });
  }
}
