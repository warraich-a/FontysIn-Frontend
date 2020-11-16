import { ProfileService } from 'src/app/services/profile/profile.service';
import { Component, OnInit } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

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
    {name: "Fontys Staff"}
  ]
  newAddressToAdd: {};
  newUser:{};
  constructor(private profileService: ProfileService,
    private _snackBar: MatSnackBar,
    private router: Router) { }


  onSubmitRegistration(data){
    console.log(data);
    this.newAddressToAdd = {
      "streetName": data.streetName,
      "houseNumber": data.houseNr,
      "city": data.city,
      "zipCode": data.zipcode
    }
    this.profileService.addAddress(<JSON>this.newAddressToAdd)
      .subscribe(
        newAddress => {
          {
            this.newUser ={
              "addressId":newAddress,
              "departmentId": data.department,
              "email": data.email,
              "firstName": data.firstName,
              "img": "",
              "lastName": data.lastName,
              "locationId": data.fontysLocation,
              "password": data.password,
              "phoneNumber": data.phoneNr,
              "userNumber": data.userNumber,
              "userType": data.employementType
            }
            this.profileService.addNewUser(<JSON>this.newUser).subscribe(response=>{
              this._snackBar.open('Congratulations, You are now FontysIN user', 'End now', {
                duration: 2000,
              });
              // this.router.navigate(['login']),
              console.log(response);
            })
        }
        
          console.log("New Profile Added ----------------");
          console.log(newAddress);
        })
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