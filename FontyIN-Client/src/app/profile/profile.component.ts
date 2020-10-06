import { Experience } from './../classes/Profile/Experience';
import { Education } from './../classes/Profile/Education';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from '../services/profile/profile.service';


// export interface Education{
//     id:number;
//     profileId: number;
//     school: string;
//     startYear: Date;
//     endYear: Date;
//     degree: string;
//     fieldStudy: string;
//     description: string;
// }
// export interface Experience{
//   private int id;
//   private int profileId;
//   private String title;
//   private String company;
//   private EmplymentType employmentType;
//   private int locationId;
//   private LocalDate startDate;
//   private LocalDate endDate;
//   private String description;
// }

// export interface Skill{
//   private int id;
//     private int profileId;
//     private String name;
// }
// export interface About{
//   private int id;
//     private int profileId;
//     private String content;
// }


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private profileService: ProfileService) { }

  profileData: Object[];
  educations: Education[];
  expriences: Experience[];

  ngOnInit(): void {
    this.profileService.getProfile().subscribe((data)=>
    {
      console.log(data);
      this.profileData=<Object[]>data;
      this.educations = this.profileData as Education[];

    });
  }
//  constructor(private route: ActivatedRoute) {
//     this.route.params.subscribe(params => console.log(params))
//    }

//  // educations: Education[];
//   ngOnInit(): void {
//     // this.profileService.getProfile().subscribe((data)=>
//     // {
//     //   console.log(data);
//     //   t his.educations=<Education[]>data;
//   // });

  

}
