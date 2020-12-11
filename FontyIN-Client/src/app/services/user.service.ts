import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {  this.readLocalStorageValue(); }

  readLocalStorageValue() {
    if(localStorage.getItem("userToken") != null){
      this.httpOptions.headers = this.httpOptions.headers.set('Authorization',  localStorage.getItem("userToken"));
    };
}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  
  login(email, password){
   
    const body = email+":"+password;
    return this.httpClient.post('http://localhost:9090/users/login', body, {responseType: 'text'});
   }
 
   logout(){
     this.httpOptions.headers = this.httpOptions.headers.delete('Authorization');
   }
 
 

}
