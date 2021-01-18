import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from '../data.service';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { UserService } from '../user.service';


@Injectable({
  providedIn: 'root'
})
export class ContactService extends DataService {
	httpOptions = {
		headers: new HttpHeaders({'Content-Type': 'application/json'})
	}
  	readLocalStorageValue() {
		if(localStorage.getItem("userToken") != null){
		  this.httpOptions.headers = this.httpOptions.headers.set('Authorization', localStorage.getItem("userToken"));
		};
	}

    constructor(http: HttpClient, 
                private userService: UserService) {
        //super('https://fontysin-backend.azurewebsites.net/users/' + userService.getUserIdOfLoggedIn() + '/contacts', http);
        super('http://localhost:9090/users/' + userService.getUserIdOfLoggedIn() + '/contacts', http);

        this.readLocalStorageValue();
    }

  	getId() {
		let id = this.userService.getUserIdOfLoggedIn();

		return id;
	}

  getContactRequests() {
	//return this.http.get('https://fontysin-backend.azurewebsites.net/users/' + this.getId() + '/requests', this.httpOptions)
    return this.http.get('http://localhost:9090/users/' + this.getId() + '/requests', this.httpOptions)
	  .pipe(
		map(response => response)
	  )
  }

  	getAcceptedContacts() {
        //return this.http.get('https://fontysin-backend.azurewebsites.net/users/' + this.getId() + '/acceptedContacts', this.httpOptions)
		return this.http.get('http://localhost:9090/users/' + this.getId() + '/acceptedContacts', this.httpOptions)
		.pipe(
		  map(response => response)
		)
	}
}
