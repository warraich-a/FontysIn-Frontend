import { User } from './../../classes/Profile/User';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dialog-change-dp',
  templateUrl: './dialog-change-dp.component.html',
  styleUrls: ['./dialog-change-dp.component.css']
})
export class DialogChangeDpComponent implements OnInit {

  userId : number;
  profileUrl : string;
  foundUser: User;
  uploadForm: FormGroup;
  constructor(private profileService: ProfileService,  
    public dialogRef: MatDialogRef<DialogChangeDpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder) { }

    onFileSelect(event) {
      if (event.target.files.length > 0) {
        const file = event.target.files[0];
        this.uploadForm.get('profile').setValue(file);
        
        var reader = new FileReader();
        reader.onload = (event: any) => {
          this.profileUrl = event.target.result;
        }
        reader.readAsDataURL(event.target.files[0]);
      }
    }
    onSubmit() {
      const formData = new FormData();
      formData.append('file', this.uploadForm.get('profile').value);
    
     this.profileService.uploadPicture(this.userId, formData).subscribe((data)=>
     { 
         this.profileUrl = data;
         console.log("data");
         console.log(this.profileUrl);
     },
     (error: Response) => {
       console.log("Error");
       console.log(error);
       if(error.status === 409){
           this._snackBar.open('Already Exist!!', 'End now', {
             duration: 1000,
           });
         } 
     });
    }
    
    
  ngOnInit(): void {
    this.userId = this.data.User.id;
    this.profileService.getUserById(this.userId).subscribe(response=>{
      this.foundUser=<User>response;
      this.profileUrl = this.foundUser.img;
      // this.userImage = this.foundUser.userImage;
      console.log("Found User");
      console.log(this.foundUser);
    });
    this.uploadForm = this.formBuilder.group({
      profile: ['']
    });
  }

}
