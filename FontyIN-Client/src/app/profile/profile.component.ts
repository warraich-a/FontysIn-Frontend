import { DeleteSkillComponent } from './../delete-skill/delete-skill.component';
import { UserDTO } from './../classes/Profile/UserDTO';
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
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  loggedInUser: number = 1;
  profileUser: UserDTO;
  isConnected: boolean = false;
  isRequestSent: boolean = false;
  isRequestReceived: boolean = false;
  contacts: Contact[];
  contact: Contact;

  constructor(private profileService: ProfileService,
              private contactService: ContactService,
               private route: ActivatedRoute,
               public dialog: MatDialog) { }

  profileData: Object;
  educations: Object[];
  experiences: Experience[];
  skills : Object[];
  about: About[];
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
        "id": 89,
        "name": "angular",
        "profileId": 1
    }
     this.profileService.addSkill(<JSON>this.skillToAdd)
  }




  ngOnInit(): void {
    let profileUserId: number = +this.route.snapshot.paramMap.get('id');
    console.log(profileUserId)
    this.profileService.getUser(profileUserId)
      .subscribe((data)=> {
        console.log(data);
        this.profileUser = <UserDTO>data;
      })
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
      this.skills=<Object[]>data;
      console.log(this.skills);
    });
    this.profileService.getAboutById().subscribe((data)=>
    {
      this.about=<About[]>data;
      console.log(this.about);
    }); 

    // GET ALL CONTACTS
    this.contactService.getAll()
    .subscribe(
      contacts => {
        this.contacts = <Contact[]>contacts;

        console.log("HELLO")
        console.log("contacts");

        console.log(contacts);
        

        this.contacts.forEach(contact => {
          console.log(contact);
          // Logged in user sent request or other user sent request, status isAccepted true
          if(((contact.user.id == this.loggedInUser && contact.friend.id == this.profileUser.id) || (contact.user.id == this.profileUser.id && contact.friend.id == this.loggedInUser)) && contact.isAccepted == true) {
            this.isRequestSent = true;
            this.isConnected = true;
            this.contact = contact;
            return;
          }
          // Logged in user sent request, status isAccepted false, status isAccepted false
          else if(((contact.user.id == this.loggedInUser && contact.friend.id == this.profileUser.id) && !contact.isAccepted)) {
            this.isRequestSent = true;
            this.isConnected = false;
            console.log("second else if")
            console.log(((contact.user.id == this.loggedInUser && contact.friend.id == this.profileUser.id) && !contact.isAccepted));
            this.contact = contact;

            return;
          }
          else if(((contact.friend.id == this.loggedInUser && contact.user.id == this.profileUser.id) && !contact.isAccepted)){
            this.isRequestReceived = true;
            this.isConnected = false;
            console.log("second else if")
            console.log(((contact.friend.id == this.loggedInUser && contact.user.id == this.profileUser.id) && !contact.isAccepted));
            this.contact = contact;

            return;
          }

        });

        console.log(this.isConnected);
        console.log(this.isRequestSent);
        console.log(this.isRequestReceived);


      }
    )
   
    
  }

  // get all skills
  getAllSkills() {
    this.profileService.getSkillsById()
    .subscribe(
      data => {
        this.skills = <Object[]>data;
      }
    )
  }

  //open dialog for skills
  openDialog(skill: Skill): void {
    console.log(skill);
    const dialogRef = this.dialog.open(DeleteSkillComponent, {
      maxWidth: '50%',
      data: {skill: skill}
    }); 
    dialogRef.afterClosed()
      .subscribe(res => {

        this.getAllSkills();  
    });

  }

    //deleting skill data
    deleteSkill(){
      this.profileService.deleteSkill(this.profile.userId, this.skill.profileId, this.skill.id).subscribe((data)=>
      {
        this.skills = <Skill[]>data;
        console.log(this.skills);
      });
    }
  
    //deleting experience data
    deleteEducation(){
      this.profileService.deleteEducation(this.profile.userId, this.education.profileId, this.education.id).subscribe((data)=>
      {
        this.educations = <Education[]>data;
        console.log(this.educations);
      });
    }
  
    //deleting experience data
    deleteExperience(){
      this.profileService.deleteExperience(this.profile.userId, this.experience.profileId, this.experience.id).subscribe((data)=>
      {
        this.experiences = <Experience []>data;
        console.log(this.experiences);
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
    let user: UserDTO;

    this.contacts.forEach(contact => {
      if(contact.user.id == this.loggedInUser) {
        user = contact.user;
      }
    });


    // get logged in user id from auth and friendId from url
    let contact : {} = { user: user, friend: this.profileUser, isAccepted: false};

    console.log(contact);
    this.contactService.create(contact)
      .subscribe(
        newContact => {
          console.log(newContact);
          console.log("newContact");

          //this.isConnected = true;
          this.isRequestSent = true;
        }
      )
  }

  // deleteContact() {
  //   // get logged in user id from auth and contatcId from link
  //   this.contactService.delete(1)
  //     .subscribe();
  // }

    // ACCEPT REQUEST
    acceptContact() {
      this.contact.isAccepted = true;
  
      this.contactService.update(this.contact)
        .subscribe(
          updatedContact => {
  
            this.isConnected = true;
          }
        )
    }

}
