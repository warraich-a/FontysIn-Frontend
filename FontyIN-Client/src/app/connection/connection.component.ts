import { DeleteConnectionComponent } from './../delete-connection/delete-connection.component';
import { HomeComponent } from './../home/home.component';
import { ContactService } from './../services/contact/contact.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../classes/Profile/User';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {
  loggedInUser: number = 1;
  profileUser: number;
  isConnected: boolean = false;
  isRequestSent: boolean = false;
  contacts: User[];
  constructor(private contactService: ContactService,
              private dialog: MatDialog
    ) { }

  ngOnInit(): void {
    
    // GET ALL CONTACTS
    this.getAll();

 
  }


  message() {
    // navigate to message with query param username
  }


  // delete(id: number) {
  //   console.log("ID: " + id);
  //   this.contactService.deleteContactList(id)
  //   .subscribe(()=>{
  //     this.getAll();
  //   });

  // }

  getAll() {
    this.contactService.getContactsList()
    .subscribe(
      contacts => {
        this.contacts = <User[]>contacts;

        console.log("contacts");

        console.log(contacts);

        // this.contacts.forEach(contact => {
        //   // if(((contact.userId == this.loggedInUser && contact.friendId == this.profileUser) || (contact.userId == this.profileUser && contact.friendId == this.loggedInUser))) {
        //   //   this.isConnected = true;
        //   // }
        //   // Logged in user sent request or other user sent request, status isAccepted true
        //   // if(((contact.userId == this.loggedInUser && contact.friendId == this.profileUser) || (contact.userId == this.profileUser && contact.friendId == this.loggedInUser)) && contact.isAccepted == true) {
        //   //   console.log("first if statement")
        //   //   this.isRequestSent = true;
        //   //   this.isConnected = true;
        //   //   return;
        //   // }
        //   // // Logged in user sent request, status isAccepted false, status isAccepted false
        //   // if(((contact.userId == this.loggedInUser && contact.friendId == this.profileUser) && !contact.isAccepted)) {
        //   //   console.log("second if statement")

        //   //   this.isRequestSent = true;
        //   //   this.isConnected = false;
        //   //   return
        //   // }


          
        // });



      }
    )
  }


  openDialog(connection: User): void {
    const dialogRef = this.dialog.open(DeleteConnectionComponent, {
      // width: '20%',
      maxWidth: '50%',
      // height: '200px',
      data: {connection: connection}
    });

    dialogRef.afterClosed()
      .subscribe(result => {
      console.log('The dialog was closed');
      // console.log(result);
      // this.animal = result;
      this.getAll();
    });
  }

}
