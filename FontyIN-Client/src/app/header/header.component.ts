import { UserDTO } from './../classes/Profile/UserDTO';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { User } from '../classes/Profile/User';
import { ProfileService } from '../services/profile/profile.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchText='';

  constructor(private profileService: ProfileService,
    private route: ActivatedRoute,
    public dialog: MatDialog) { }

    users: UserDTO[];

  ngOnInit(): void {
    this.profileService.getAllUsers().subscribe(data =>{
      this.users=<UserDTO[]>data;
      console.log(data);
    });
  } 


}
