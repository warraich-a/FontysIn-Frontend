import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from '../services/profile/profile.service';
import { About } from '../classes/Profile/About';
@Component({
  selector: 'app-update-profile-about',
  templateUrl: './update-profile-about.component.html',
  styleUrls: ['./update-profile-about.component.css']
})
export class UpdateProfileAboutComponent implements OnInit {
  id: number;
  notification = null; 
  constructor(  private service: ProfileService, private route: ActivatedRoute) { }
  about = new About(1, 1, "hello");
  ngOnInit(): void {

    this.id = +this.route.snapshot.paramMap.get('id');

    this.service.GetOneAbout(this.id)
    .subscribe((data)=>{
      console.log(data);
     this.about = <About>data;
    });

  }
  
  updateAbout(){
    console.log("updated");
    this.service.updateAbout(this.about, this.id).subscribe(
      (res: any) => {
        this.showNotification();
      });
}


showNotification() {
  this.notification = { class: 'text-primary', message: 'updated!' };

}

}
