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
  address = new Address(1, "test1", "test2", "test3", "test4");
  user = new User(3, "0348348");
  privacy = new privacy(1, 1, "Everyone", "everyone", "everyone");

  ngOnInit(): void {
    this.service.GetOneAddress(1)
    .subscribe((data)=>{
      console.log(data);
    this.address = <Address>data;
    });
    this.service.GetOneUser(3)
    .subscribe((data)=>{
      console.log(data);
    this.user = <User>data;
    });
    this.service.GetOnePrivacy(1)
    .subscribe((data)=>{
      console.log(data);
    this.privacy = <privacy>data;
    });
 
  }

  update(){
    console.log(this.address);
    this.service.updateAddress(this.address, 1).subscribe(
      (res: any) => {
        this.showNotification();
      });
      
      this.service.updatePhoneNumber(this.user, 3).subscribe(
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
  this.service.updatePrivacy(this.privacy, 1).subscribe(
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
