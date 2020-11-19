import { Contact } from '../classes/Contact';
import { DeleteConnectionComponent } from './../delete-connection/delete-connection.component';
import { ContactService } from './../services/contact/contact.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../classes/Profile/User';
import { MatDialog } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';

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
    this.getAcceptedContacts();

    // GET REQUESTS
    this.getRequests();
 
  }

  // GO TO MESSAGES
  message() {
    // navigate to message with query param username
  }


  // GET CONTACTS
  getAcceptedContacts() {
    this.contactService.getAcceptedContacts()
    .subscribe(
      contacts => {
        console.log(contacts);
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

    this.contactService.update(contact)
      .subscribe(
        () => {

          this.getRequests();
          this.getAcceptedContacts();
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

        this.getAcceptedContacts();  
    });
  }


}