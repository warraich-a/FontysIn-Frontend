import { DialogAddProfileComponent } from './dialog-add-profile/dialog-add-profile.component';
import { MatDialog } from '@angular/material/dialog';
import { Contact } from './../classes/Profile/Contact';
import { Profile } from './../classes/Profile/Profile';
import { ContactService } from '../services/contact/contact.service';
import { Experience } from './../classes/Profile/Experience';
import { Education } from './../classes/Profile/Education';
import { Component, OnInit , Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from '../services/profile/profile.service';
import { About } from '../classes/Profile/About';
import { Skill } from '../classes/Profile/Skill';
import { HttpHeaders } from '@angular/common/http';
import { User } from '../classes/Profile/User';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, interval, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  loggedInUser: number = 1;
  profileUser: number;
  isConnected: boolean = false;
  isRequestSent: boolean = false;
  contacts: Contact[];

  userId:number;
  profileId: number;
  
  @Input() expToAdd={};

  // console.log(dataToAdd);
  constructor(private profileService: ProfileService,
              private contactService: ContactService,
               private route: ActivatedRoute, 
               public dialog:MatDialog,
               private _snackBar: MatSnackBar) { }

      
  profileData: Profile[];
  educationsList: Object[];
  experiencesList: Object[];
  skillsList : Object[];
  aboutList: Object[];
  foundUser: User;
  educationToAdd = {};
  experienceToAdd = {};
  skillToAdd = {};
  profileToAdd: {};
  profileWithLangauge: {};
  aboutToAdd: {};
  newProfileId : number;
 
  

  userFirstName:string;
  userLastName:string;
 
  //these are needed to get ids fior deleting data
  education: Education;
  skill: Skill;
  experience: Experience;
  profile: Profile; 

  
  years = [
    {year : 2010},
    {year : 2011},
    {year : 2012},
    {year : 2013},
    {year : 2014},
    {year : 2015}
    

  ]
  languages = [
    {name: "English"},
    {name: "French"},
    {name: "Spanish"},
    {name: "Urdu"}
  ]

  jobType = [
    {name: "FullTime"},
    {name: "Parttime"},
    {name: "FreeLancer"}
  ]
  onSubmitEducation(data)
  {
    
   this.educationToAdd = {
     "degreeEducation": data.degreeEducation,
     "descriptionEducation": data.descriptionEducation,
     "endYearEducation": parseInt(data.startYearEducation),
     "fieldStudy": data.fieldStudy,
     "profileId": this.profileId,
     "school": data.school,
     "startYearEducation": parseInt(data.endYearEducation)
     }
     this.profileService.addEducation(<JSON>this.educationToAdd, this.userId, this.profileId)
     this.ngOnInit();
  }


  onSubmitSkill(data)
  {
    
   this.skillToAdd = {
        "id": 17,
        "name": data.skill,
        "profileId": this.profileId
    }
     this.profileService.addSkill(<JSON>this.skillToAdd, this.userId, this.profileId)
     this.ngOnInit();
  }

  onSubmitExperience(data){
   
    this.experienceToAdd = {
      "company": data.company,
      "descriptionExperience": data.descriptionExperience,
      "employmentType":data.employementType,
      "endDateExperience": parseInt(data.endDateExperience),
      // "id":453,
      "location": data.locationId,
      "profileId": this.profileId,
      "startDateExperience": parseInt(data.startDateExperience),
      "title": data.title
       }
       console.warn(this.experienceToAdd);
       this.profileService.addExperience(<JSON>this.experienceToAdd, this.userId, this.profileId)
       this.ngOnInit();
       
  }
  
  
  onSubmitProfile(data){
    
  
    this.profileToAdd = {
      "language": data.language,
      "userId": this.userId
    }
    this.profileService.addProfile(<JSON>this.profileToAdd, this.userId)
      .subscribe(
        newProfile => {
          
          console.log("New Profile Added ----------------");
          console.log(newProfile);

          this.aboutToAdd = {
            "content": data.about,
            "profileId": newProfile
          }

          this.profileService.addAbout(<JSON>this.aboutToAdd,  this.userId, newProfile)
          console.log("test about");
          console.log(this.aboutToAdd);
          //this.isConnected = true;
        }
      )

     
      this.ngOnInit();


    // console.log("---sdfdsf---");
    // this.profileToAdd = {
    //   "language": data.language,
    //   "userId": this.userId
    // }
    // this.profileService.addProfile(<JSON>this.profileToAdd, this.userId)
    // this.ngOnInit();

    // this.profileData.forEach(function (value) {
    //   console.log(value);
    // }); 

  }



  clickMethod(name: string) {
    if(confirm("Are you sure to delete "+name)) {
      console.log("Implement delete functionality here");
    }
  }
  refreshProfile(){
    
    this.profileService.getProfile(this.userId).
    subscribe(
      data=> {
      this.profileData=<Profile[]>data;
      console.log("Total profiles are")
      console.log(this.profileData);

    });
    this.profileService.getUser(this.userId).subscribe((data)=>
    {
     
      this.foundUser=<User>data;
      this.userFirstName = this.foundUser.userFirstName;
      this.userLastName = this.foundUser.userLastName;
      console.log(this.profileId);

    });
      this.profileService.getEducationsById(this.userId, this.profileId).subscribe((data)=>
      {
      
        this.educationsList=<Object[]>data;
        console.log(this.educationsList);
        console.log("profile id");
        console.log(this.profileId);
      },
      (error: Response) => {
        if(error.status === 404){
          this._snackBar.open('Id is wrong!!', 'End now', {
            duration: 1000,
          });
          } 
          else 
          {
            alert('error')
          }
      });
    this.profileService.getExperienceById(this.userId, this.profileId).subscribe((data)=>
    {
      this.experiencesList=<Object[]>data;
      console.log(this.experiencesList);
    },
    (error: Response) => {
      if(error.status === 404){
        this._snackBar.open('Id is wrong!!', 'End now', {
          duration: 1000,
         });
       } else {
          alert('error')
        }
    });
    this.profileService.getSkillsById(this.userId, this.profileId).subscribe((data)=>
    {
      this.skillsList=<Object[]>data;
      console.log(this.skillsList);
    },
    (error: Response) => {
      if(error.status === 404){
        this._snackBar.open('Id is wrong!!', 'End now', {
          duration: 1000,
         });
       } else {
          alert('error')
        }
    });
    this.profileService.getAboutById(this.userId, this.profileId).subscribe((data)=>
    {
      this.aboutList=<Object[]>data;
      console.log(this.aboutList);
    },
    (error: Response) => {
      if(error.status === 404){
        this._snackBar.open('Id is wrong!!', 'End now', {
          duration: 1000,
         });
       } else {
          alert('error')
        }
    });
    
    
  }

  ngOnInit(): void {
  
   
    this.profileUser = +this.route.snapshot.paramMap.get('id');

    this.userId = +this.route.snapshot.paramMap.get('id');
    this.profileId = +this.route.snapshot.paramMap.get('profileId');

    console.log(this.profileId);
    console.log(this.userId);

    console.log(this.profileUser);


    this.refreshProfile();
    

    // GET ALL CONTACTS

    this.contactService.getAll()
    .subscribe(
      contacts => {
        this.contacts = <Contact[]>contacts;

        console.log("contacts");

        console.log(contacts);

        this.contacts.forEach(contact => {
          // if(((contact.userId == this.loggedInUser && contact.friendId == this.profileUser) || (contact.userId == this.profileUser && contact.friendId == this.loggedInUser))) {
          //   this.isConnected = true;
          // }
          // Logged in user sent request or other user sent request, status isAccepted true
          if(((contact.userId == this.loggedInUser && contact.friendId == this.profileUser) || (contact.userId == this.profileUser && contact.friendId == this.loggedInUser)) && contact.isAccepted == true) {
            console.log("first if statement")
            this.isRequestSent = true;
            this.isConnected = true;
            return;
          }
          // Logged in user sent request, status isAccepted false, status isAccepted false
          if(((contact.userId == this.loggedInUser && contact.friendId == this.profileUser) && !contact.isAccepted)) {
            console.log("second if statement")

            this.isRequestSent = true;
            this.isConnected = false;
            return
          }


          
        });

        console.log("isConnected " + this.isConnected);
        console.log("isRequestsent " + this.isRequestSent);

        // if(!found) {
          
        // }



      }
    )
   
    
  }

    //deleting skill data
    deleteSkill(){
      this.profileService.deleteSkill(this.profile.userId, this.skill.profileId, this.skill.id).subscribe((data)=>
      {
        this.skillsList = <Object[]>data;
        console.log(this.skillsList);
      });
    }
  
    //deleting experience data
    deleteEducation(){
      this.profileService.deleteEducation(this.profile.userId, this.education.profileId, this.education.id).subscribe((data)=>
      {
        this.educationsList = <Object[]>data;
        console.log(this.educationsList);
      });
    }
  
    //deleting experience data
    deleteExperience(experineceId){
      this.profileService.deleteExperience(this.userId, this.profileId, experineceId).subscribe(data => {
        console.log(data);
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



          /*------------------------------------------------------ CONTACTS -------------------------------------------------------- */
  getContacts() {
    this.contactService.getAll()
      .subscribe(
        contacts => {
          this.contacts = <Contact[]>contacts;
        }
      )
  }
  

  createContact() {
    // get logged in user id from auth and friendId from url
    let contact : {} = { userId: this.loggedInUser, friendId: this.profileUser, isAccepted: false};
    this.contactService.create(contact)
      .subscribe(
        newContact => {
          console.log(newContact);
          //this.isConnected = true;
        }
      )
  }

  deleteContact() {
    // get logged in user id from auth and contatcId from link
    this.contactService.delete(1)
      .subscribe();
  }


  
  // isContact() {
  //   //let contacts;

  //   this.contactService.getAll()
  //   .subscribe(
  //     contacts => {
  //       this.contacts = <Contact[]>contacts;
  //       console.log("contacts");

  //       console.log(contacts);

  //       this.contacts.forEach(contact => {
  //         if((contact.userId == this.loggedInUser || contact.friendId == this.loggedInUser) && contact.isAccepted) {
  //           this.isConnected = true;
  //         }
  //         else if((contact.userId == this.loggedInUser || contact.friendId == this.loggedInUser) && !contact.isAccepted) {
  //           this.isConnected = false;
  //         }
  //       });
  //     }
  //   )
  // }



}
