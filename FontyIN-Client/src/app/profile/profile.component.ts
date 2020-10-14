import { DialogService } from './../services/dialog/dialog.service';
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
              //  private dialogService: DialogService
              ) { }

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

  
  onSubmitEducation(data)
  {
    
   this.educationToAdd = {
     "degreeEducation": data.degreeEducation,
     "descriptionEducation": data.descriptionEducation,
     "endYearEducation": data.startYearEducation,
     "fieldStudy": data.fieldStudy,
     "id": 97,
     "profileId": this.profileId,
     "school": data.school,
     "startYearEducation": data.endYearEducation
     }
     this.profileService.addEducation(<JSON>this.educationToAdd, this.userId, this.profileId)
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

  onSubmitExperience(data){
   
    this.experienceToAdd = {
      "company": data.company,
      "descriptionExperience": data.descriptionExperience,
      "employmentType":data.employementType,
      "endDateExperience": data.endDateExperience,
      "id":453,
      "locationId": data.locationId,
      "profileId": this.profileId,
      "startDateExperience": data.startDateExperience,
      "title": data.title
       }
       console.warn(this.experienceToAdd);
       this.profileService.addExperience(<JSON>this.experienceToAdd, this.userId, this.profileId)
       
  }
  
  addEvent(){
    this.profileService.addExperience(<JSON>this.expToAdd, this.userId, this.profileId)
  }
  

  ngOnInit(): void {
    this.profileUser = +this.route.snapshot.paramMap.get('id');

    this.userId = +this.route.snapshot.paramMap.get('id');
    this.profileId = +this.route.snapshot.paramMap.get('profileId');

    console.log(this.profileId);
    console.log(this.userId);

    console.log(this.profileUser);
    
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

      }
    )
   
    
  }


    //deleting skill data
    deleteSkill(skillId){
      this.profileService.deleteSkill(this.userId, this.profileId, skillId).subscribe((data)=>
      {
        this.skillsList = <Object[]>data;
        console.log(this.skillsList);
      });

      // this.dialogService.openConfirmDialog("Are you sure to delete?").afterClosed().subscribe(res => {
      //   if(res){
      //     this.profileService.deleteSkill(this.userId, this.profileId, skillId).subscribe((data)=>
      //     {
      //       this.skillsList = <Object[]>data;
      //       console.log(this.skillsList);
      //     });
      //   }
      // });

    }
  
    //deleting education data
    deleteEducation(educationId){
      this.profileService.deleteEducation(this.userId, this.profileId, educationId).subscribe((data)=>
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
