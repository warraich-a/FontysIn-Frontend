import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MessageService extends DataService {
  // logged in user id
  loggedInUserId = localStorage.getItem('userId');
  info = new BehaviorSubject('information');

  constructor(http: HttpClient) {
    super('http://localhost:9090/users/' + localStorage.getItem('userId') + '/messages', http);
  }

  //delete conversation in messaging page
  public deleteConversation(userId, conversationId){
    userId = this.loggedInUserId;
    return this.http.delete('http://localhost:9090/users/1/messages/user/' + userId + '/conversation/' + conversationId);
  }

  //start new conversation with new contact
  public startConversation(data){
    return this.http.post('http://localhost:9090/users/1/messages/newConversation/', data).toPromise().then(data => {
      console.log("In the message service: " + data);
    });   
  }

    // RANIM
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
