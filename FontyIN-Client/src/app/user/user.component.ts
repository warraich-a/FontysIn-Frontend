import { ContactService } from './../services/contact.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private contactService: ContactService
              , private route: ActivatedRoute) { }

  ngOnInit(): void {
  }


  // when visiting a user profile : users/id/profiles/id
  // users/userId/contactId -> userId (logged in user), contactId (url)
  createContact() {
    // get logged in user id and contactId from url
    let contactId = this.route.snapshot.paramMap.get('id');
    this.contactService.create(contactId);
  }

  // users/userId/contactId -> userId (logged in user), contactId (url)
  // users/userId/contactId
  deleteContact() {
    // get logged in user id and contactId from url
    let contactId = this.route.snapshot.paramMap.get('id');
    this.contactService.delete(contactId);
  }
}
