import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PostsService } from 'src/app/services/posts.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

export interface Post {
  content: string;
  date: string;
  id: number;
  userId: number;
  image: string;
}

@Component({
  selector: 'app-update-post-dialog',
  templateUrl: './update-post-dialog.component.html',
  styleUrls: ['./update-post-dialog.component.css']
})
export class UpdatePostDialogComponent implements OnInit {

  constructor(private postService: PostsService,
    public dialogRef: MatDialogRef<UpdatePostDialogComponent>,
               @Inject(MAT_DIALOG_DATA) public data: any) { }

    postId = 0;
  post: Post;
  newContent: String;
  data1 = {};

  saveVal(item){
    this.newContent = item.target.value;
  }

  updatePost(){
    this.data = {
      "content": this.newContent,
      "date": this.post.date,
      "id": this.post?.id,
      "userId": localStorage.getItem("userId")
      };
    this.postService.updatePost(<JSON>this.data,this.postId);
    window.location.reload();
     
    
  }
  CloseDialog(){
    this.dialogRef.close();
  }


  ngOnInit(): void {
    this.post = this.data.p;
    console.log(this.post);
  }

}
