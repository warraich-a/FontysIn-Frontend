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

  posts : Post[];

  data = {};
  content : String;
  user : User;

  createPost() {
    this.data = {
      "content": this.content,
      "date": "2020-10-06",
      "id": 5,
      "userId": 1
      };
    this.postService.newPost(<JSON>this.data);
    window.location.reload()
  }

  deletePost(id){
    this.postService.deletePost(id);
    window.location.reload()
  }


  ngOnInit(): void {
    this.postService.getPosts()
     .subscribe((data)=>{
     console.log(data);
      this.posts = <Post[]>data;
   });
   this.profileService.getUserById(2)
    .subscribe((data)=>
    {
     
      this.user=<User>data;
      
    

    });

  }

}
