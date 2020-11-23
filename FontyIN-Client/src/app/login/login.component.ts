import { Component, OnInit } from '@angular/core';
import { User } from '../classes/Profile/User';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  token:string;
  loggedIn:boolean;
  isLoginError : boolean = false;
  user = new User(3, "0348348");
  constructor(private service: UserService,private router : Router) { }

  ngOnInit(): void {
    if(this.readLocalStorageValue() != null){
      this.loggedIn= true;
      this.router.navigate(['/profile']);
    }else{
      this.loggedIn = false;
      
    }

  }
  OnSubmit(email,password){
    this.token = btoa(email+':'+password);
  this.service.login(email, password)
  .subscribe(
    (res: any) => {
      console.log(this.token);
      this.user = <User>res;
     localStorage.setItem('userToken', this.token);
     localStorage.setItem('userId', this.user.id.toString());
     
     this.router.navigate(['/profile']);
     console.log("testing loging -----------------");
     console.log(this.user)
    },
    (error: Response) => {
      if(error.status === 404){
        console.log("not found");
        this.isLoginError = true;
       }
      }
);
}
readLocalStorageValue() {
  return localStorage.getItem('userToken');
}


}
