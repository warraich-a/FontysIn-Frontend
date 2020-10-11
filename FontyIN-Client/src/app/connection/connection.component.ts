import { DeleteConnectionComponent } from './../delete-connection/delete-connection.component';
import { HomeComponent } from './../home/home.component';
import { ContactService } from './../services/contact/contact.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../classes/Profile/User';
import { MatDialog } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';


@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {
  searchForm = new FormControl();
  contacts: User[];
  filteredContacts: Observable<User[]>;
  filteredContactsArr: User[] = [];


  constructor(private contactService: ContactService,
              private dialog: MatDialog
    ) { }

  ngOnInit(): void {
    
    // GET ALL CONTACTS
    this.getAll();
 
  }

  // GO TO MESSAGES
  message() {
    // navigate to message with query param username
  }


  // GET CONTACTS
  getAll() {
    this.contactService.getContactsList()
    .subscribe(
      contacts => {
        this.contacts = <User[]>contacts;

        // FILTER
        this.filteredContacts = this.searchForm.valueChanges
        .pipe(
          startWith(''),
          map(value => typeof value === 'string' && value != null ? value : value.name),
          map(name => name ? this._filter(name) : this.contacts.slice())
        );

        this.filteredContacts
        .subscribe((data)=>{
          // this.filteredContactsArr = [];
          this.filteredContactsArr = data;
        });
  
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
        this.searchForm.reset('');

        this.getAll();  
    });
  }


  // FILTER CONTACTS
  displayFn(user: User): string {
    return user && user.firstName ? user.firstName + user.lastName : '';
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    console.log("filterValue " + filterValue);
    let fullName;

    return this.contacts.filter(option => 
      (option.firstName + ' ' + option.lastName).toLowerCase().indexOf(filterValue) === 0
    )
  }

}
