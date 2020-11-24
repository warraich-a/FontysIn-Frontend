import { Component, OnInit } from '@angular/core';
import { User } from '../classes/Profile/User';
import { Address } from '../classes/Profile/Address';
import { privacy } from '../classes/Profile/Privacy';

import { ProfileService } from '../services/profile/profile.service';
class Setting {
 type: string;
}
@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent implements OnInit {
  privacySetting: Setting[] = [
    { type: 'EVERYONE'}, {type: 'CONNECTIONS'}, {type: 'ONLYME'}];

  constructor( private service: ProfileService) { }
  notification = null; 
  notificationP = null;
  isChecked = true;
  id:string;
  address = new Address(1, "", "", "", "");
  user = new User(3, "");
  privacy = new privacy(1, 1, "Everyone", "everyone", "everyone");

  ngOnInit(): void {
    this.id = localStorage.getItem('userId');
 
    this.service.GetOneUser(this.id)
    .subscribe((data)=>{
      console.log(data);
    this.user = <User>data;
    this.service.GetOneAddress(this.user.addressId)
    .subscribe((data)=>{
      console.log(this.user.addressId);
    this.address = <Address>data;
    });
    });
   
    this.service.GetOnePrivacy()
    .subscribe((data)=>{
      console.log(data);
    this.privacy = <privacy>data;
    });
 
  }

  update(){
    console.log(this.address);
    this.service.updateAddress(this.address, this.user.addressId).subscribe(
      (res: any) => {
        this.showNotification();
      });
      
      this.service.updatePhoneNumber(this.user, this.id).subscribe(
        (res: any) => {
          console.log("updated phone" + this.user);
        });
}

showNotification() {
  this.notification = { class: 'text-primary', message: 'updated!' };

}
showNotificationP() {
  this.notificationP = { class: 'text-primary', message: 'updated!' };

}

updatePrivacy(){
  this.hideEverything();
  this.service.updatePrivacy(this.privacy).subscribe(
    (res: any) => {
      this.showNotificationP();
    });
}
hideEverything(){
  if(this.isChecked){
    console.log("true");
  }else{
    console.log("false");
  }
}

}
