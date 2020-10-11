import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ContactService extends DataService {
  // logged in user id
  loggedInUserId = 1;

  constructor(http: HttpClient) {
    super('http://localhost:9099/users/1/contacts', http);
  }

  getContactsList() {
    return this.http.get('http://localhost:9099/users/1/contacts-list')
      .pipe(
        // transform this response object to an array of js objects
        map(response => response)
      )
  }

  deleteContactList(id) {
    return this.http.delete('http://localhost:9099/users/1/contacts-list/' + id)
      .pipe(
        map(response => response)
      )
  }
}
