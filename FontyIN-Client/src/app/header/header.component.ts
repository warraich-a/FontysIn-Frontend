import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../classes/Profile/User';
import { UserDTO } from '../classes/Profile/UserDTO';
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
    users: UserDTO[];
    
    
    ngOnInit(): void {
     
    
    this.profileService.getAllUsers().subscribe(data =>{
      this.users=<UserDTO[]>data;
      console.log(data);
    });
  }
  logout(){
   
    localStorage.clear();
    this.service.logout();
  }
  

}
