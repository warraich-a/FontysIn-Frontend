import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile/profile.service';
import { ActivatedRoute } from '@angular/router';
import { employmentType } from './../classes/Profile/EmploymentType';

import { Experience } from './../classes/Profile/Experience';
@Component({
  selector: 'app-update-profile-experience',
  templateUrl: './update-profile-experience.component.html',
  styleUrls: ['./update-profile-experience.component.css']
})
export class UpdateProfileExperienceComponent implements OnInit {
  typeOfEmployment: employmentType[] = [
    { type:  'FullTime'}, {type: 'PartTime'}, {type: 'FreeLancer'}];
  
  id: number;

  constructor( private service: ProfileService, private route: ActivatedRoute) { }
  experience = new Experience(1, 1, "Kassa medewerker", "Shell", "Fulltime", 1, "2000", "2019", "Working at gas station" )
  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    
    this.service.GetOneExperience(this.id)
    .subscribe((data)=>{
      console.log(data);
     this.experience = <Experience>data;
    });
  }

  updateExperience(){
    this.service.updateExperience(this.experience, 1).subscribe(
      (res: any) => {
        console.log("updated");
      });

  }


}
