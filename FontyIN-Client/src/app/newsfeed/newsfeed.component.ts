import { PostsService} from '../services/posts.service';

import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from '../classes/Profile/User';
import { ProfileService } from '../services/profile/profile.service';

export interface Post {
  content: string;
  date: string;
  id: number;
  userId: number;
}

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css']
})
export class NewsfeedComponent implements OnInit {

  constructor(private postService: PostsService, private profileService: ProfileService) { }

  
  userID = localStorage.getItem("userId");
  data = {};
  content : String;
  public user : User;
  allposts : Post[];
  createPost() {
    this.data = {
      "content": this.content,
      "id": 5,
      "userId": localStorage.getItem("userId")
      };
    this.postService.newPost(<JSON>this.data);
    console.log(this.data);
    window.location.reload()
  }

  deletePost(id){
    this.postService.deletePost(id);
    window.location.reload()
  }


  ngOnInit(): void {
    
  //  this.profileService.getUserById(1)
  //   .subscribe((data)=>
  //   {
  //     console.log(data);
  //     this.user=<User>data;
      
  //   });
  
    this.postService.getNewsfeed(this.userID)
     .subscribe((data)=>{
     console.log(data);
      this.allposts = <Post[]>data;
   });
    

  }

}
