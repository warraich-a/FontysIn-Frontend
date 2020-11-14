import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from '../data.service';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ContactService extends DataService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  // logged in user id
  loggedInUserId = 1;

  constructor(http: HttpClient) {
    super('http://localhost:9090/users/1/contacts', http);
  }

  getContactRequests() {
    return this.http.get('http://localhost:9090/users/1/requests')
      .pipe(
        map(response => response)
      )
  }

  	getAcceptedContacts() {
		return this.http.get('http://localhost:9090/users/1/acceptedContacts')
		.pipe(
		  map(response => response)
		)
	}
}
