import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../classes/Profile/User';
import { ProfileService } from '../services/profile/profile.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchText='';

  constructor(private service: UserService,private profileService: ProfileService,
    private route: ActivatedRoute) { }
    users: User[];
    
    
    ngOnInit(): void {
     
    
    this.profileService.getAllUsers().subscribe(data =>{
      this.users=<User[]>data;
      console.log(data);
    });
  }
  logout(){
   
    localStorage.clear();
    this.service.logout();
  }
  

}
