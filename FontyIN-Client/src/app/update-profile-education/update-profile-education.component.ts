import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile/profile.service';
import { ActivatedRoute } from '@angular/router';
import { Education } from './../classes/Profile/Education';

@Component({
  selector: 'app-update-profile-education',
  templateUrl: './update-profile-education.component.html',
  styleUrls: ['./update-profile-education.component.css']
})
export class UpdateProfileEducationComponent implements OnInit {
  id: number;
  constructor( private service: ProfileService, private route: ActivatedRoute) { }
  date1: Date = new Date();
  date2: Date = new Date();
 
  education = new Education(1,1,"fontys", this.date1, this.date2,"ICT", "It", "Description idk");

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.service.GetOneEducation(this.id)
    .subscribe((data)=>{
      console.log(data);
    this.education = <Education>data;
    });
  }
  updateEducation(){
    console.log("updated");
    this.service.updateEducation(this.education, 1).subscribe(
      (res: any) => {
        console.log("updated");
      });
    }

}
