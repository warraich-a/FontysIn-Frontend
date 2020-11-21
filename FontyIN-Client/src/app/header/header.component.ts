import { Profile } from './../classes/Profile/Profile';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../classes/Profile/User';
import { UserDTO } from '../classes/Profile/UserDTO';
import { ProfileService } from '../services/profile/profile.service';
import { UserService } from '../services/user.service';
import { forEachChild } from 'typescript';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchText='';

  userId: number = parseInt(localStorage.getItem("userId"));
  profileId : number;
  profiles : Profile[];
  constructor(private service: UserService,private profileService: ProfileService,
    private route: ActivatedRoute,
    private router: Router) { }
    users: UserDTO[];
    
    
    submit(){
      this.router.navigate(['users/',this.userId, 'profiles', this.profileId])
    }

    ngOnInit(): void {
     

    this.profileService.getProfile(this.userId).subscribe(response =>{
      this.profiles = <Profile[]>response;
      // this.userId = parseInt(localStorage.getItem("userId"));
      this.profileId = this.profiles[0].id;
    });
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
