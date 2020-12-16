import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserService } from '../user.service';


@Injectable({
  providedIn: 'root'
})
export class MessageService extends DataService {
  info = new BehaviorSubject('information');

    constructor(http: HttpClient, 
                private userService: UserService) {
        super('http://localhost:9090/users/' + userService.getUserIdOfLoggedIn() + '/messages', http);
    }

    getId() {
		let id = this.userService.getUserIdOfLoggedIn()

		return id;
	}

  //delete conversation in messaging page
  public deleteConversation(userId, conversationId){
    return this.http.delete('http://localhost:9090/users/1/messages/user/' + this.getId() + '/conversation/' + conversationId);
  }

  //start new conversation with new contact
  public startConversation(data){
    return this.http.post('http://localhost:9090/users/1/messages/newConversation/', data).toPromise().then(data => {
      console.log("In the message service: " + data);
    });   
  }

  // Used to refresh both parent and child componenets
  getInfo(): Observable<string>{
    return this.info.asObservable();
  }

  getInfoValue(): string{
    return this.info.getValue();
  }

  setInfo(value: string){
    this.info.next(value);
  }
}
