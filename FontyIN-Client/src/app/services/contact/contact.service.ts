import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService extends DataService {

  constructor(http: HttpClient) { 
    // logged in user id
    let loggedInUserId = 1;
    super('http://localhost:9099/users/1/contacts', http);
  }
}
