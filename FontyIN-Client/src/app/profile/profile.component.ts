import { DialogChangeDpComponent } from './dialog-change-dp/dialog-change-dp.component';
import { DialogAddSkillComponent } from './dialog-add-skill/dialog-add-skill.component';
import { DeleteExperienceComponent } from './../delete-experience/delete-experience.component';
import { DeleteEducationComponent } from './../delete-education/delete-education.component';
import { DeleteSkillComponent } from './../delete-skill/delete-skill.component';
import { UpdateProfileAboutComponent} from './../update-profile-about/update-profile-about.component';
import { UpdateProfileEducationComponent} from './../update-profile-education/update-profile-education.component';
import { UpdateProfileExperienceComponent} from './../update-profile-experience/update-profile-experience.component';
import { UserDTO } from './../classes/Profile/UserDTO';
import { DialogAddProfileComponent } from './dialog-add-profile/dialog-add-profile.component';
import { Contact } from '../classes/Contact';
import { Profile } from './../classes/Profile/Profile';
import { ContactService } from '../services/contact/contact.service';
import { Experience } from './../classes/Profile/Experience';
import { Education } from './../classes/Profile/Education';
import { Component, OnInit , Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from '../services/profile/profile.service';
import { About } from '../classes/Profile/About';
import { Skill } from '../classes/Profile/Skill';
import { HttpHeaders } from '@angular/common/http';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { User } from '../classes/Profile/User';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, interval, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { DialogAddExperienceComponent } from './dialog-add-experience/dialog-add-experience.component';
import { DialogAddEducationComponent } from './dialog-add-education/dialog-add-education.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { delay } from 'rxjs/operators';
import { strict } from 'assert';
import { stringify } from 'querystring';
import {DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  loggedInUser: number = parseInt(localStorage.getItem("userId"));
  currentUser: UserDTO;
  profileUser: UserDTO;
  isConnected: boolean = false;
  isRequestSent: boolean = false;
  isRequestReceived: boolean = false;
  contacts: Contact[];
  contact: Contact;

  userId : number = parseInt(localStorage.getItem("userId"));
  profileId: number;
  
  allowedToSee = { class: 'text-danger', message: 'Sorry you cant see this!' }; 
  errorMsgEdu: boolean;
  errorMsgExp: boolean;
  errorMsgSki: boolean;
  
  uploadForm: FormGroup; 
  @Input() expToAdd={};
  selectedFile:File = null;
  profileUrl: any;

  // console.log(dataToAdd);
  constructor(private profileService: ProfileService,
              private contactService: ContactService,
               private route: ActivatedRoute,
               public dialog: MatDialog,
               private _snackBar: MatSnackBar,
               private formBuilder: FormBuilder,
               private sanitizer: DomSanitizer) { }
            
  profileData: Profile[]; 
  educations: Object[];
  experiences: Experience[];
  skills : Object[];
  about: About[];
             

  //profileData: Profile[];
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
  currentProfile:string = "";
 
  

  userFirstName:string;
  userLastName:string;
  userImage: string;
 
  //these are needed to get ids fior deleting data
  education: Education;
  skill: Skill;
  experience: Experience;
  profile: Profile; 
  anotherUserId: number 
  sameUser: boolean;
  
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
    {name: "PartTime"},
    {name: "FreeLancer"}
  ]
  // onSubmitEducation(data)
  // {
    
  //  this.educationToAdd = {
  //    "degreeEducation": data.degreeEducation,
  //    "descriptionEducation": data.descriptionEducation,
  //    "endYearEducation": parseInt(data.startYearEducation),
  //    "fieldStudy": data.fieldStudy,
  //    "profileId": this.profileId,
  //    "school": data.school,
  //    "startYearEducation": parseInt(data.endYearEducation)
  //    }
  //    this.profileService.addEducation(<JSON>this.educationToAdd, this.userId, this.profileId)
  //    this.ngOnInit();
  // }


  // onSubmitSkill(data)
  // {
    
  //  this.skillToAdd = {
  //       "id": 17,
  //       "name": data.skill,
  //       "profileId": this.profileId
  //   }
  //    this.profileService.addSkill(<JSON>this.skillToAdd, this.userId, this.profileId)
  //    this.ngOnInit();
  // }

  // onSubmitExperience(data){
   
  //   this.experienceToAdd = {
  //     "company": data.company,
  //     "descriptionExperience": data.descriptionExperience,
  //     "employmentType":data.employementType,
  //     "endDateExperience": parseInt(data.endDateExperience),
  //     // "id":453,
  //     "location": data.locationId,
  //     "profileId": this.profileId,
  //     "startDateExperience": parseInt(data.startDateExperience),
  //     "title": data.title
  //      }
  //      console.warn(this.experienceToAdd);
  //      this.profileService.addExperience(<JSON>this.experienceToAdd, this.userId, this.profileId)
  //      this.ngOnInit();
       
  // }
  
  
//   onSubmitProfile(data){
    
  
//     this.profileToAdd = {
//       "language": data.language,
//       "userId": this.userId
//     }
//     this.profileService.addProfile(<JSON>this.profileToAdd, this.userId)
//       .subscribe(
//         newProfile => {
          
//           console.log("New Profile Added ----------------");
//           console.log(newProfile);

//           this.aboutToAdd = {
//             "content": data.about,
//             "profileId": newProfile
//         }
          
//           this.profileService.addAbout(<JSON>this.aboutToAdd,  this.userId, newProfile)
//           console.log("test about");
//           console.log(this.aboutToAdd);
          
//           //this.isConnected = true;
//         },(error: Response) => {
//           if(error.status === 409){
//             this._snackBar.open('Given Language already exist Exists!', 'End now', {
//               duration: 2000,
//             });
//             }  else if(error.status === 401){
//               console.log("sorry not sorry");
//               this.showAllowedToSee();
//             } 
//             else 
//             {
//               alert('error')
//             }
//         });
      
//  // window.location.reload();
 
//  this.ngOnInit();
//  //this.refresh();
// }


onFileSelect(event) {
  if (event.target.files.length > 0) {
    const file = event.target.files[0];
    this.uploadForm.get('profile').setValue(file);
    console.log("yes aadded")
  }
}


openDialogDp(): void {
  const dialogRef = this.dialog.open(DialogChangeDpComponent, {
    width: '50%',
    data: {User: this.foundUser},
    panelClass: ['custom-modalbox','animate__animated','animate__slideInLeft']
    }) 
  dialogRef.afterClosed()
    .subscribe(res => {
    this.getAllExperience();  
  });
}

openDialogProfile(): void {
  const dialogRef = this.dialog.open(DialogAddProfileComponent, {
    width: '50%',
    data: {User: this.foundUser},
    panelClass: ['custom-modalbox','animate__animated','animate__slideInLeft']
    }) 
  dialogRef.afterClosed()
    .subscribe(res => {
    this.getAllExperience();  
  });
}

openDialogExperience(): void {
  const dialogRef = this.dialog.open(DialogAddExperienceComponent, {
    width: '50%',
    data: {User: this.foundUser, Profile: this.profileId},
    panelClass: ['custom-modalbox','animate__animated','animate__slideInLeft']

  }); 
  dialogRef.afterClosed()
    .subscribe(res => {
    this.getAllExperience();  
  });
}
openDialogEducation() : void{
  const dialogRef = this.dialog.open(DialogAddEducationComponent,{
    width: '50%',
    data: {User: this.foundUser,Profile: this.profileId},
    panelClass: ['custom-modalbox','animate__animated','animate__slideInLeft']

  }); 
  dialogRef.afterClosed()
    .subscribe(res => {
    this.getAllEducation();  
  });
}
openSkillDialog() : void{
  const dialogRef = this.dialog.open(DialogAddSkillComponent,{
    maxWidth: '50%',
    data: {User: this.foundUser,  Profile: this.profileId},
    panelClass: ['custom-modalbox','animate__animated','animate__slideInLeft']

  }); 
  dialogRef.afterClosed()
    .subscribe(res => {
    this.getAllSkills();  
  });
}

  // get all skills 
  getAllSkills() {
    this.profileService.getSkillsById(this.userId, this.profileId)
    .subscribe(
      data => {
        this.skills = <Object[]>data;
        this.ngOnInit();
      }
    )
  }

  //open dialog for skills
  openDialogSkill(skill: Skill): void {
    console.log(skill);
    const dialogRef = this.dialog.open(DeleteSkillComponent, {
      maxWidth: '50%',
      data: {skill: skill}
    }); 
    dialogRef.afterClosed()
      .subscribe(res => {

        this.getAllSkills();  
        this.ngOnInit();
    });

  }

  // get all Education
  getAllEducation() {
    this.profileService.getEducationsById(this.userId, this.profileId)
    .subscribe(
      data => {
        this.educations = <Education[]>data;
        this.ngOnInit();
      }
    )
  }

  //open dialog for education
  openDialogEdu(education: Education): void {
    console.log(education);
    const dialogRef = this.dialog.open(DeleteEducationComponent, {
      maxWidth: '50%',
      data: {education: education}
    }); 
    dialogRef.afterClosed()
      .subscribe(res => {

        this.getAllEducation();  
    });

  }

  // get all Experience
  getAllExperience() {
    this.profileService.getExperienceById(this.userId, this.profileId)
    .subscribe(
      data => {
        this.experiences = <Experience[]>data;
        this.ngOnInit();
      }
    )
  } 

  //open dialog for experience
  openDialogExp(experience: Experience): void {
    console.log(experience);
    const dialogRef = this.dialog.open(DeleteExperienceComponent, {
      maxWidth: '50%',
      data: {experience: experience}
    }); 
    dialogRef.afterClosed()
      .subscribe(res => {

        this.getAllExperience();  
    });

  }

  GetAllAbout(){
    this.profileService.getAboutById(this.userId, this.profileId).subscribe((data)=>
    {
      this.about=<About[]>data;
      this.ngOnInit();
      console.log(this.about);
      this.ngOnInit();

    }); 
  }

  openDialogAbout(about: About): void {
  
    const dialogRef = this.dialog.open(UpdateProfileAboutComponent, {
      maxWidth: '50%',
      data: {about: about}
    }); 
    dialogRef.afterClosed()
      .subscribe(res => {

        this.GetAllAbout();
    });

  }
  
  openDialogUpdateEdu(education: Education): void {

    const dialogRef = this.dialog.open(UpdateProfileEducationComponent, {
      maxWidth: '50%',
      data: {education: education}
    }); 
    dialogRef.afterClosed()
      .subscribe(res => {

        this.getAllEducation(); 
    });

  }
  openDialogUpdateExp(experience: Experience): void {
    const dialogRef = this.dialog.open(UpdateProfileExperienceComponent, {
      maxWidth: '50%',
      data: {experience: experience}
    }); 
    dialogRef.afterClosed()
      .subscribe(res => {

        this.getAllExperience();  
    });

  }

  refresh(): void {
  window.location.reload();
  }

 
       

  clickMethod(name: string) {
    if(confirm("Are you sure to delete "+name)) {
      console.log("Implement delete functionality here");
    }
  }

  CurrentProfile(idG){
   
    var self = this;
    this.profileData.forEach(function (value) {
   
      if(value.id == idG){
         self.currentProfile = value.language;
        // console.log(this.tempProfile)
      }
    });
    console.log("Language");
    
    console.log(this.currentProfile);
  }
  refreshProfile(){
    
    this.profileService.getProfile(this.userId).
    subscribe(
      data=> {
      this.profileData=<Profile[]>data;
      console.log("Total profiles are")
      console.log(this.profileData);
    });

  

    this.profileService.getUser(this.userId)
    .subscribe((data)=>
    {
     
      this.foundUser=<User>data;
      this.userFirstName = this.foundUser.firstName;
      this.userLastName = this.foundUser.lastName;
      this.profileUrl = "assets/"+this.foundUser.image;
      // this.profileUrl = this.sanitizer.bypassSecurityTrustUrl(this.profileUrl);
      // this.userImage = this.foundUser.userImage;
      console.log("Found User");
      console.log(this.foundUser);

    });
  
   

    this.profileService.getEducationsById(this.userId, this.profileId).subscribe((data)=>
      {
        
        this.errorMsgEdu = false;
        this.educationsList=<Object[]>data;
        console.log(this.educationsList);
        console.log("profile id");
        console.log(this.profileId);
        this.CurrentProfile(this.profileId);
      },
      (error: Response) => {
        if(error.status === 404){
          this._snackBar.open('Id is wrong!!', 'End now', {
            duration: 1000,
          });
          }  else if(error.status === 401){
            console.log("sorry not sorry");
            this.errorMsgEdu = true;
          } 
      });
    this.profileService.getExperienceById(this.userId, this.profileId).subscribe((data)=>
    {
     
      this.errorMsgExp = false;
      this.experiencesList=<Object[]>data;
      console.log(this.experiencesList);
    },
    (error: Response) => {
      if(error.status === 404){
        this._snackBar.open('Id is wrong!!', 'End now', {
          duration: 1000,
         });
       } else if(error.status === 401){
        console.log("sorry not sorry");
        this.errorMsgExp = true;
      }  
    });
    this.profileService.getSkillsById(this.userId, this.profileId).subscribe((data)=>
    {
    
      this.errorMsgSki = false;
      this.skillsList=<Object[]>data;
      console.log(this.skillsList);
    },
    (error: Response) => {
      if(error.status === 404){
        this._snackBar.open('Id is wrong!!', 'End now', {
          duration: 1000,
         });
       }
       else if(error.status === 401){
         console.log("sorry not sorry");
         this.errorMsgSki = true;
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
       } 
    });
  }

  url: string;
    onSelectFile(event) { // called each time file input changes
        if (event.target.files && event.target.files[0]) {
          var reader = new FileReader();

          reader.readAsDataURL(event.target.files[0]); // read file as data url

          reader.onload = (event: any) => { // called once readAsDataURL is completed
            this.url = <string>event.target.result;
            console.log("text for image");
            console.log(this.url);
          }
        }
    }


  ngOnInit(): void {
    
    let profileUserId: number = +this.route.snapshot.paramMap.get('id');
    this.anotherUserId = +this.route.snapshot.paramMap.get('id');

    console.log("Another User Profile id " + this.anotherUserId)
    console.log("Your Profile id " + this.userId)
    if(this.userId == this.anotherUserId){
      this.sameUser = true;
    }

    this.profileService.getUser(profileUserId)
      .subscribe((data)=> {        
        this.profileUser = <UserDTO>data;

        console.log("Profile user " + this.profileUser.profileId)
      });
      // this.profileService.getPicture().subscribe(response=>{
      //   console.log("------------------");
        
      //   console.log(response);

      // });
     
      
   //this.profileUser = +this.route.snapshot.paramMap.get('id');

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

        console.log("CONTACTS " + contacts);
        if(this.contacts.length > 0) {
       this.contacts.forEach(contact => {
          // Logged in user sent request or other user sent request, status isAccepted true
          if(((contact.user.id == this.loggedInUser && contact.friend.id == this.profileUser?.id) || (contact.user.id == this.profileUser?.id && contact.friend.id == this.loggedInUser)) && contact.isAccepted == true) {
            this.isRequestSent = true;
            this.isConnected = true;
            this.contact = contact;
            return;
          }
          // Logged in user sent request, status isAccepted false, status isAccepted false
          else if(((contact.user.id == this.loggedInUser && contact.friend.id == this.profileUser?.id) && !contact.isAccepted)) {
            this.isRequestSent = true;
            this.isConnected = false;
            this.contact = contact;

            return;
          }
          else if(((contact.friend.id == this.loggedInUser && contact.user.id == this.profileUser?.id) && !contact.isAccepted)){
            this.isRequestReceived = true;
            this.isConnected = false;
            this.contact = contact;

            return;
          }

        });
        }

        this.getUserDTO();


      }
    )
   
    
  }

  getUserDTO() {
    this.profileService.getUser(this.loggedInUser)
    .subscribe((data)=>
    {
      this.currentUser = <UserDTO>data;
      console.log("CURRENT " + this.currentUser);
    });
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
    let user: UserDTO;

    // this.contacts.forEach(contact => {
    //   if(contact.user.id == this.loggedInUser) {
    //     user = contact.user;
    //     return;
    //   }
    //   else if(contact.friend.id == this.loggedInUser) {
    //     user = contact.friend;
    //     return;
    //   }
    // });

    user = this.currentUser;

    // get logged in user id from auth and friendId from url
    let contact : {} = { user: user, friend: this.profileUser, isAccepted: false};

    this.contactService.create(contact)
      .subscribe(
        newContact => {
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
 
    public downloadAsPDF() {
      var data = document.getElementById('pdfTable');
      html2canvas(data).then(canvas => {  
        // Few necessary setting options  
        var imgWidth = 208;   
        var pageHeight = 295;    
        var imgHeight = canvas.height * imgWidth / canvas.width;  
        var heightLeft = imgHeight;  
    
        const contentDataURL = canvas.toDataURL('image/png')  
        let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF  
        var position = 0;  
        pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
        pdf.save('MYPdf.pdf'); // Generated PDF   
      });  
    }
  
   

}
