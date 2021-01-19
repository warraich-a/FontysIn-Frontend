import { UserService } from 'src/app/services/user.service';
import { DialogChangeDpComponent } from './dialog-change-dp/dialog-change-dp.component';
import { DialogAddSkillComponent } from './dialog-add-skill/dialog-add-skill.component';
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
import { Data } from '../classes/Profile/Data';
import { DeleteSkillComponent } from './delete-skill/delete-skill.component';
import { DeleteEducationComponent } from './delete-education/delete-education.component';
import { DeleteExperienceComponent } from './delete-experience/delete-experience.component';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
	// logged in user id in token
	loggedInUserId: number = this.userService.getUserIdOfLoggedIn();
	// the id of the user who owns the profile
	userId : number;
	currentUser: UserDTO;
	profileUser: UserDTO;
	
	// Connection between logged in user and owner of profile
	contact: Contact;


	profileId: number;
  
	allowedToSee = { class: 'text-danger', message: 'Sorry you cant see this!' }; 
	errorMsgEdu: boolean;
	errorMsgExp: boolean;
	errorMsgSki: boolean;
	
	uploadForm: FormGroup; 
	@Input() expToAdd={};
	selectedFile:File = null;
	profileUrl: any;
	data: Data;
	
  // console.log(dataToAdd);
  constructor(private profileService: ProfileService,
			  private contactService: ContactService,
			  private userService: UserService,
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

	  this.profileService.getAboutById(this.userId, this.profileId).subscribe((data)=>
	{
	  
	  this.aboutList=<Object[]>data;
	  console.log("About-----------------");

	  console.log(this.aboutList);
	}
	);
	this.profileService.getProfile(this.userId).
	subscribe(
	  data=> {
	  this.profileData=<Profile[]>data;
	  console.log("Total profiles are")
	  console.log(this.profileData);
	});

	// get entire profile
	this.profileService.getData(this.userId, this.profileId).subscribe((respnse)=>
	{
	 
	  this.errorMsgExp = false;
	  this.data=<Data>respnse;
	  // this.profileData = this.data.profiles;
	  this.CurrentProfile(this.profileId);
	  console.log("Full");

	  console.log(this.data);
	}

	);
  
    var BASE64_MARKER = ';base64,';

    function convertDataURIToBinary(dataURI) {
      var base64Index = dataURI.indexOf(BASE64_MARKER) + BASE64_MARKER.length;
      var base64 = dataURI.substring(base64Index);
      var raw = window.atob(base64);
      var rawLength = raw.length;
      var array = new Uint8Array(new ArrayBuffer(rawLength));
    
      for(let i = 0; i < rawLength; i++) {
        array[i] = raw.charCodeAt(i);
      }
      return array;
    }
    let base64data;

	this.profileService.getUser(this.userId)
	.subscribe((data)=>
	{
	 
	  this.foundUser=<User>data;
	  this.userFirstName = this.foundUser.firstName;
	  this.userLastName = this.foundUser.lastName;
	  if(this.foundUser.image == ""){
		this.profileUrl = "https://lh5.googleusercontent.com/proxy/HRnHradLWE7OZ2OZqlQI6puaWBYYxL0M9hK4zdYCyy64DowTsbZfWtzEt5PmlEbD_-lsEEJ2JpulUqQhJwX2lrx5q3sIT00R4IB6QZttREX8WGVztVqCJuHxKHA4Dhh2vRXOeIasK-8lN6Xq1rjE2dbq6ps=w1200-h630-p-k-no-nu";
	  console.log(this.profileUrl);
		
	  }
	  else{
		this.profileUrl = "assets/profile-picture-circle-hd.png";

	  }
	  // this.profileUrl = this.sanitizer.bypassSecurityTrustUrl(this.profileUrl);
	  // this.userImage = this.foundUser.userImage;
	  console.log("Found User");
	  console.log(this.foundUser);
	  console.log("Found img");
	  console.log(this.profileUrl);

	});
  
   

	// this.profileService.getEducationsById(this.userId, this.profileId).subscribe((data)=>
	//   {
		
	//     this.errorMsgEdu = false;
	//     this.educationsList=<Object[]>data;
	//     console.log(this.educationsList);
	//     console.log("profile id");
	//     console.log(this.profileId);
	//     this.CurrentProfile(this.profileId);
	//   }
	// //   ,
	// //   (error: Response) => {
	// //     if(error.status === 404){
	// //       this._snackBar.open('Id is wrong!!', 'End now', {
	// //         duration: 1000,
	// //       });
	// //       }  else if(error.status === 401){
	// //         console.log("sorry not sorry");
	// //         this.errorMsgEdu = true;
	// //       } 
	// //   }
	//   );
	// this.profileService.getExperienceById(this.userId, this.profileId).subscribe((data)=>
	// {
	 
	//   this.errorMsgExp = false;
	//   this.experiencesList=<Object[]>data;
	//   console.log(this.experiencesList);
	// }
	// // ,
	// // (error: Response) => {
	// //   if(error.status === 404){
	// //     this._snackBar.open('Id is wrong!!', 'End now', {
	// //       duration: 1000,
	// //      });
	// //    } else if(error.status === 401){
	// //     console.log("sorry not sorry");
	// //     this.errorMsgExp = true;
	// //   }  
	// // }
	// );
	// this.profileService.getSkillsById(this.userId, this.profileId).subscribe((data)=>
	// {
	
	//   this.errorMsgSki = false;
	//   this.skillsList=<Object[]>data;
	//   console.log(this.skillsList);
	// }
	// // ,
	// // (error: Response) => {
	// //   if(error.status === 404){
	// //     this._snackBar.open('Id is wrong!!', 'End now', {
	// //       duration: 1000,
	// //      });
	// //    }
	// //    else if(error.status === 401){
	// //      console.log("sorry not sorry");
	// //      this.errorMsgSki = true;
	// //    }
	// // }
	// );
	// this.profileService.getAboutById(this.userId, this.profileId).subscribe((data)=>
	// {
	  
	//   this.aboutList=<Object[]>data;
	//   console.log(this.aboutList);
	// }
	// // ,
	// // (error: Response) => {
	// //   if(error.status === 404){
	// //     this._snackBar.open('Id is wrong!!', 'End now', {
	// //       duration: 1000,
	// //      });
	// //    } 
	// // }
	// );
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
	// Current open profile
	// user id in url
	this.userId = +this.route.snapshot.paramMap.get('id');
	// profile id in url
	this.profileId = +this.route.snapshot.paramMap.get('profileId');

	if(this.userId == this.loggedInUserId){
	  this.sameUser = true;
	}

	this.profileService.getUser(this.userId)
	  .subscribe((data)=> {        
		this.profileUser = <UserDTO>data;

		console.log("Profile user " + this.profileUser.profileId)
	  });

	


	this.refreshProfile();


	// get logged in user
	this.getUserDTO(this.loggedInUserId)
		.subscribe((data)=> {
			this.currentUser = <UserDTO>data;
			console.log("current user " + this.currentUser.id)
		});

	// get owner of profile
	this.getUserDTO(this.userId)
		.subscribe((data)=> {
			this.profileUser = <UserDTO>data;
			console.log("profileUser " + this.profileUser.id)
		});

	// get connection between current user and profile user if there's one
	this.getContact(this.userId);

  }

  

	// get user
	getUserDTO(userId: number) {
		return this.profileService.getUser(userId)
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



		  /*------------------------------------------------------ CONTACTS -------------------------------------------------------- */
	// get connection between current user and profile user if there's one
	getContact(userId: number) {
		this.contactService.getContact(userId)
			.subscribe((data) => {
				this.contact = <Contact>data;

				console.log("CONNNNN " + this.contact);
			})
	}

  	createContact() {
		// get logged in user id from auth and friendId from url
		let contact : {} = { user: this.currentUser, friend: this.profileUser, isAccepted: false};
	
		this.contactService.create(contact)
		  	.subscribe( () => {
				this.getContact(this.userId);
		  	})
  	}


	// ACCEPT REQUEST
	acceptContact() {
		this.contact.isAccepted = true;
  
		this.contactService.update(this.contact)
			.subscribe( () => {
				this.getContact(this.userId);
		  	})
	}
}