import { Experience } from './../classes/Profile/Experience';
import { Education } from './../classes/Profile/Education';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from '../services/profile/profile.service';
import { About } from '../classes/Profile/About';
import { Skill } from '../classes/Profile/Skill';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private profileService: ProfileService) { }

  profileData: Object;
  educations: Object[];
  experiences: Experience[];
  skills : Skill[];
  about: About[];
  educationToAdd = {};
  experienceToAdd = {};
  skillToAdd = {};

  CreateEducation()
  {
    
   this.educationToAdd = {
     "degreeEducation": "High School",
     "descriptionEducation": "Got good grades",
     "endYearEducation": "2020-01-01",
     "fieldStudy": "ICT",
     "id": 10,
     "profileId": 1,
     "school": "Fontys",
     "startYearEducation": "2018-01-01"
     }
     this.profileService.addEducation(<JSON>this.educationToAdd)
  }

  CreateExperience()
  {
    
   this.experienceToAdd = {
    "company": "Fontys",
    "descriptionExperience": "I love it",
    "employmentType": "FreeLancer",
    "endDateExperience": "2000-01-01",
    "id": 10,
    "locationId": 1,
    "profileId": 1,
    "startDateExperience": "1998-01-01",
    "title": "Manager"
     }
     this.profileService.addExperience(<JSON>this.experienceToAdd)
  }

  CreateSkill()
  {
    
   this.skillToAdd = {
        "id": 12,
        "name": "angular",
        "profileId": 2
    }
     this.profileService.addSkill(<JSON>this.skillToAdd)
  }




  ngOnInit(): void {
    // this.profileService.getProfile().subscribe((data)=>
    // {
     
    //   this.profileData=<Object>data;

    //   console.log(this.profileData);
      

    // });
    this.profileService.getEducationsById().subscribe((data)=>
    {
     
      this.educations=<Object[]>data;
      console.log(this.educations);
      
    });
    this.profileService.getExperienceById().subscribe((data)=>
    {
      this.experiences=<Experience[]>data;
      console.log(this.experiences);
    });
    this.profileService.getSkillsById().subscribe((data)=>
    {
      this.skills=<Skill[]>data;
      console.log(this.skills);
    });
    this.profileService.getAboutById().subscribe((data)=>
    {
      this.about=<About[]>data;
      console.log(this.about);
    }); 
  }

}
