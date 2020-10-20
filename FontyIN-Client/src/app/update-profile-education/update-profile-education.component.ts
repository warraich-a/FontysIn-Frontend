import { Component, Inject, InjectionToken } from '@angular/core';
import { ProfileService } from '../services/profile/profile.service';
import { ActivatedRoute } from '@angular/router';
import { Education } from './../classes/Profile/Education';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-update-profile-education',
  templateUrl: './update-profile-education.component.html',
  styleUrls: ['./update-profile-education.component.css']
})
export class UpdateProfileEducationComponent {
  id: number;
  notification = null; 
  constructor( private service: ProfileService,  public dialogRef: MatDialogRef<UpdateProfileEducationComponent>,@Inject(MAT_DIALOG_DATA) public data: any) { }
  
 
  education = new Education(1,1,"fontys", 1999, 2000, "ICT", "It", "Description idk");

  ngOnInit(): void {
    console.log(this.data.education.id);
    this.id = this.data.education.id;
    this.service.GetOneEducation(this.id)
    .subscribe((data)=>{
      console.log(data);
    this.education = <Education>data;
    });
  }
  updateEducation(){
    this.service.updateEducation(this.education, this.id).subscribe(
      (res: any) => {
        console.log("updated");
      });
      this.dialogRef.close();
    }
}
