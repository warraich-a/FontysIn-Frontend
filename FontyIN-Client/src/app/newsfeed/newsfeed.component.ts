import { PostsService} from '../services/posts.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

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

  constructor(private postService: PostsService) { }

  posts : Post[];

  data = {};
  content : String;

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

  }

}
