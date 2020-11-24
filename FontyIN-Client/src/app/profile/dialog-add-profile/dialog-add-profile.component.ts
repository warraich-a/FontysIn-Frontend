import { User } from './../../classes/Profile/User';
import { ProfileService } from './../../services/profile/profile.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-add-profile',
  templateUrl: './dialog-add-profile.component.html',
  styleUrls: ['./dialog-add-profile.component.css']
})
export class DialogAddProfileComponent implements OnInit {

  constructor(private profileService: ProfileService,  
              public dialogRef: MatDialogRef<DialogAddProfileComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private _snackBar: MatSnackBar,
              private router: Router) { }
  profileToAdd: {};
  aboutToAdd : {};
  userId: number = parseInt(localStorage.getItem('userId'));
  //User = new User(1, "adsf");
  languages = [
    {name: "English"},
    {name: "French"},
    {name: "Spanish"},
    {name: "Urdu"}
  ]

  CloseDialog(){
    this.dialogRef.close();
  }
  submit(pId){
    this.router.navigate(['users/',this.userId, 'profiles', pId]);
    this.CloseDialog();
  }

  ngOnInit(): void {
    // this.userId = this.data.User.id;
    console.log("in diload add profile");
    console.log(this.userId)
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
          
          this.profileService.addAbout(<JSON>this.aboutToAdd,  this.userId, newProfile).subscribe(data=>{

          console.log("test about");
          console.log(this.aboutToAdd);
          this.submit(newProfile);
         
          })
          //  this.CloseDialog();
        }
        , 
        (error: Response) => {
          if(error.status === 409){
            this._snackBar.open('Given Language already exist Exists!', 'End now', {
              duration: 2000,
            });
            } 
             else if(error.status === 401)
            {
              console.log("sorry not sorry");
            } 
            else 
            {
              alert('error')
            }
        });
        
       
  }
}
