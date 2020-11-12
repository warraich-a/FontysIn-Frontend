import { ProfileService } from './../services/profile/profile.service';
import { Skill } from './../classes/Profile/Skill';
import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ProfileComponent } from '../profile/profile.component';


@Component({
  selector: 'app-delete-skill',
  templateUrl: './delete-skill.component.html',
  styleUrls: ['./delete-skill.component.css']
})
export class DeleteSkillComponent implements OnInit {

  loggedInUser: number = 5;

  constructor(
    private profileService: ProfileService,
    public dialogRef: MatDialogRef<DeleteSkillComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      console.log(data);
    }

  ngOnInit(): void {
  }

  //close dialog 
  noClick(): void {
    this.dialogRef.close();
  }

  //delete skill
  deleteSkill() {
    this.profileService.deleteSkill(this.loggedInUser, this.data.skill.profileId, this.data.skill.id).subscribe();
    console.log(this.loggedInUser + " " + this.data.skill.profileId + " " + this.data.skill.id);

    // Close dialog
    this.dialogRef.close();
  }

}
