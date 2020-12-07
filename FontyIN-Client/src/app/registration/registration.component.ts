import { ProfileService } from 'src/app/services/profile/profile.service';
import { Component, OnInit } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DialogAddProfileComponent } from '../profile/dialog-add-profile/dialog-add-profile.component';
import { MatDialog } from '@angular/material/dialog';
import { User } from '../classes/Profile/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  departments: Object[];
  fontysLocations: Object[];

  jobType = [
    {name: "Teacher"},
    {name: "Student"},
    {name: "FontysStaff"}
  ]
  newAddressToAdd: {};
  newUser:{};
  foundUser: User;
  token:string;
  loggedIn:boolean;
  isLoginError : boolean = false;
  user = new User(3);
  
  constructor(private profileService: ProfileService,
    private _snackBar: MatSnackBar,
    private router: Router,
    public dialog: MatDialog,
    private service: UserService) { }


  onSubmitRegistration(data){
    console.log(data);
    // this.newAddressToAdd = {
    //   "streetName": data.streetName,
    //   "houseNumber": data.houseNr,
    //   "city": data.city,
    //   "zipCode": data.zipcode
    // }
    // this.profileService.addAddress(<JSON>this.newAddressToAdd)
    //   .subscribe(
        // newAddress => {
        //   {
            this.newUser ={
              "departmentId": data.department,
              "email": data.email,
              "firstName": data.firstName,
              "img": "",
              "lastName": data.lastName,
              "locationId": data.fontysLocation,
              "password": data.password,
              "userNumber": data.userNumber,
              "userType": data.employementType
            }
            this.profileService.addNewUser(<JSON>this.newUser).subscribe(response=>{
              this._snackBar.open('Congratulations, You are now FontysIN user', 'End now', {
                duration: 2000,
              });
              
              // this.router.navigate(['']),
              this.foundUser = <User>response;
              console.log(this.foundUser);

              this.login(data.email, data.password);

              
            },
            (error: Response) => {
              if(error.status === 409){
                  this._snackBar.open('This user already exists', 'End now', {
                    duration: 3000,
                  });
                }
                else{
                  this._snackBar.open('Wrong data provided', 'End now', {
                    duration: 3000,
                  });
                } 
            })
  }
  login(email, password){
    this.token = btoa(email+':'+password);
      this.service.login(email, password)
      .subscribe(
        (res: any) => {
          console.log(this.token);
          this.user = <User>res;
        localStorage.setItem('userToken', this.token);
        localStorage.setItem('userId', this.user.id.toString());
        
        // location.reload();
        console.log("testing loging -----------------");
        console.log(this.user);
        this.router.navigate(['posts']);
        window.location.href = '/posts';
        // this.delay();
        },
        (error: Response) => {
          if(error.status === 404){
            console.log("not found");
            this.isLoginError = true;
          }
        }
    );
  }
    
  ngOnInit(): void {
    this.profileService.getFontysLocations().subscribe(response=>{
      this.fontysLocations = <Object[]>response;
      console.log(this.fontysLocations);
    })

    this.profileService.getFontysDepartments().subscribe(response=>{
      this.departments = <Object[]>response;
      console.log(this.departments);
    })
  }

}
