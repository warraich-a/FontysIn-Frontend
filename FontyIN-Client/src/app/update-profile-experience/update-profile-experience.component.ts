import { Component, Inject, InjectionToken } from '@angular/core';
import { ProfileService } from '../services/profile/profile.service';
import { ActivatedRoute } from '@angular/router';
import { employmentType } from './../classes/Profile/EmploymentType';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Experience } from './../classes/Profile/Experience';
@Component({
  selector: 'app-update-profile-experience',
  templateUrl: './update-profile-experience.component.html',
  styleUrls: ['./update-profile-experience.component.css']
})
export class UpdateProfileExperienceComponent  {
  typeOfEmployment: employmentType[] = [
    { type:  'FullTime'}, {type: 'PartTime'}, {type: 'FreeLancer'}];
  
  id: number;
  notification = null; 
  constructor( private service: ProfileService,  public dialogRef: MatDialogRef<UpdateProfileExperienceComponent>,@Inject(MAT_DIALOG_DATA) public data: any) { }
  experience = new Experience(1, 1, "Kassa medewerker", "Shell", "Fulltime", "Idk", 1999, 2000,  "Working at gas station" )
  ngOnInit(): void {

    this.id = this.data.experience.id;
    
    this.service.GetOneExperience(this.id)
    .subscribe((data)=>{
      console.log(data);
     this.experience = <Experience>data;
    });
  }

  updateExperience(){
    this.service.updateExperience(this.experience, this.id).subscribe(
      (res: any) => {
         console.log("updated");
      });
      this.dialogRef.close();
  }

}
