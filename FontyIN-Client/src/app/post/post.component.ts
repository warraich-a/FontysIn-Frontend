import { Component, OnInit } from '@angular/core';
import { PostsService} from '../services/posts.service';

export interface Post {
  content: string;
  date: string;
  id: number;
  userId: number;
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts : Post[];
  constructor( private postService: PostsService) { }
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
