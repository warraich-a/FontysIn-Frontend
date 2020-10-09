import { Component, OnInit } from '@angular/core';

import { ProfileService } from '../services/profile/profile.service';
import { About } from '../classes/Profile/About';
import { Experience } from './../classes/Profile/Experience';
import { Education } from './../classes/Profile/Education';

interface year {
  year:number;
}
@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  
  constructor(  private service: ProfileService) { }
  about = new About(1, 1, "hello");
  education = new Education(1,1,"fontys", "1999", "2000","ICT", "It", "Description idk");
  experience = new Experience(1, 1, "Kassa medewerker", "Shell", "Fulltime", 1, "2000", "2019", "Working at gas station" )
  ngOnInit(): void {
    this.service.GetOneEducation()
    .subscribe((data)=>{
      console.log(data);
     this.education = <Education>data;
    });
    this.service.GetOneExperience()
    .subscribe((data)=>{
      console.log(data);
     this.experience = <Experience>data;
    });
    this.service.GetOneAbout()
    .subscribe((data)=>{
      console.log(data);
     this.about = <About>data;
    });


    

  }
  
  
  updateAbout(){
    console.log("updated");
    this.service.updateAbout(this.about, 1).subscribe(
      (res: any) => {
        console.log("updated");
      });
}
  updateEducation(){
    console.log("updated");
    this.service.updateEducation(this.education, 1).subscribe(
      (res: any) => {
        console.log("updated");
      });

}
  updateExperience(){
   
    this.service.updateExperience(this.experience, 1).subscribe(
      (res: any) => {
        console.log("updated");
      });

  }

}
