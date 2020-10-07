import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import {About} from '../classes/About';
export class Experience{
  constructor( id: number,
    public  profileId: number,
    public  title: string,
    public  company:string,
    public  employmentType : string,
    public  locationId: number,
    public  startYear: string,
    public  endYear: string,
    public  description: string,
  ) {  }
}
export class Education{
  constructor( id: number,
    public   profileId: number,
    public  school: string,
    public  startYear: string,
    public  endYear: string,
    public   degree: string,
    public   fieldStudy: string,
    public   description: string,
  ) {  }
}



@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  
  constructor( private service: UserService) { }
  
  ngOnInit(): void {
    
  }
  
  about = new About(1, 1, "hello");
  education = new Education(1,1,"fontys", "1999", "2000","ICT", "It", "Description idk");
  experience = new Experience(1, 1, "Kassa medewerker", "Shell", "Fulltime", 1, "2000", "2019", "Working at gas station" )
  updateAbout(){
    this.service.updateAbout(this.about, 1);
}
  updateEducation(){
    this.service.updateEducation(this.education, 1);

}
  updateExperience(){
    this.service.updateExperience(this.experience, 1);
  }

}
