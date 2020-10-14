import { FilterPipe } from './../pipes/filter.pipe';
import { Contact } from './../classes/Profile/Contact';
import { DeleteConnectionComponent } from './../delete-connection/delete-connection.component';
import { HomeComponent } from './../home/home.component';
import { ContactService } from './../services/contact/contact.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../classes/Profile/User';
import { MatDialog } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import {TooltipPosition} from '@angular/material/tooltip';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {
  searchText = '';

  loggedInUser = 1;
  contacts: Contact[];
  requests: Contact[];

  position = new FormControl('below');

  defaultElevation = 3;
  raisedElevation = 5;



  constructor(private contactService: ContactService,
              private dialog: MatDialog
    ) { }

  ngOnInit(): void {
    // GET ACCEPTED CONTACTS
    this.getAll();

    // GET REQUESTS
    this.getRequests();
 
  }

  // GO TO MESSAGES
  message() {
    // navigate to message with query param username
  }


  // GET CONTACTS
  getAll() {
    this.contactService.getAll()
    .subscribe(
      contacts => {
        this.contacts = <Contact[]>contacts;
      }
    )
  }


  // GET REQUESTS
  getRequests() {
      this.contactService.getContactRequests()
      .subscribe(requests => {
        this.requests = <Contact[]>requests;
      })
  }

  // ACCEPT REQUEST
  accept(contact: Contact) {
    contact.isAccepted = true;


    console.log("Contact " + contact.isAccepted)
    this.contactService.update(contact)
      .subscribe(
        updatedContact => {
          // console.log("Updated contact " + updatedContact);

          this.getRequests();
          this.getAll();
        }
      )
  }


  // REJECT REQUEST
  reject(contact: Contact) {

    this.contactService.delete(contact.id)
      .subscribe(
        updatedContact => {
          console.log(updatedContact);

          this.getRequests();
        }
      )
  }


  // DELETE DIALOG
  openDialog(connection: User): void {
    const dialogRef = this.dialog.open(DeleteConnectionComponent, {
      maxWidth: '50%',
      data: {connection: connection}
    });

    dialogRef.afterClosed()
      .subscribe(result => {
        // empty input
        // this.searchForm.reset('');

        this.getAll();  
    });
  }


}