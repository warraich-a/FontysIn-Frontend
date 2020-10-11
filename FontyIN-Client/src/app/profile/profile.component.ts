import { Contact } from './../classes/Profile/Contact';
import { Profile } from './../classes/Profile/Profile';
import { ContactService } from '../services/contact/contact.service';
import { Experience } from './../classes/Profile/Experience';
import { Education } from './../classes/Profile/Education';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from '../services/profile/profile.service';
import { About } from '../classes/Profile/About';
import { Skill } from '../classes/Profile/Skill';
import { HttpHeaders } from '@angular/common/http';




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

  constructor(private profileService: ProfileService,
              private contactService: ContactService,
               private route: ActivatedRoute) { }

  profileData: Object;
  educationsList: Object[];
  experiencesList: Object[];
  skillsList : Object[];
  aboutList: Object[];
  educationToAdd = {};
  experienceToAdd = {};
  skillToAdd = {};

  //these are needed to get ids fior deleting data
  education: Education;
  skill: Skill;
  experience: Experience;
  profile: Profile; 

  CreateEducation()
  {
    
   this.educationToAdd = {
     "degreeEducation": "High School",
     "descriptionEducation": "Got good grades",
     "endYearEducation": "2020-01-01",
     "fieldStudy": "ICT",
     "id": 15,
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
    "id": 29,
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
        "id": 17,
        "name": "angular",
        "profileId": 1
    }
     this.profileService.addSkill(<JSON>this.skillToAdd)
  }


  ngOnInit(): void {
    this.profileUser = +this.route.snapshot.paramMap.get('id');

    this.userId = +this.route.snapshot.paramMap.get('id');
    this.profileId = +this.route.snapshot.paramMap.get('profileId');

    console.log(this.profileId);
    console.log(this.userId);

    console.log(this.profileUser);
    // this.profileService.getProfile().subscribe((data)=>
    // {
     
    //   this.profileData=<Object>data;

    //   console.log(this.profileData);
      

    // });
    this.profileService.getEducationsById(this.userId, this.profileId).subscribe((data)=>
    {
     
      this.educationsList=<Object[]>data;
      console.log(this.educationsList);
      
    });
    this.profileService.getExperienceById(this.userId, this.profileId).subscribe((data)=>
    {
      this.experiencesList=<Object[]>data;
      console.log(this.experiencesList);
    });
    this.profileService.getSkillsById(this.userId, this.profileId).subscribe((data)=>
    {
      this.skillsList=<Object[]>data;
      console.log(this.skillsList);
    });
    this.profileService.getAboutById(this.userId, this.profileId).subscribe((data)=>
    {
      this.aboutList=<Object[]>data;
      console.log(this.aboutList);
    }); 

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
    deleteExperience(){
      this.profileService.deleteExperience(this.profile.userId, this.experience.profileId, this.experience.id).subscribe((data)=>
      {
        this.experiencesList = <Object []>data;
        console.log(this.experiencesList);
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
