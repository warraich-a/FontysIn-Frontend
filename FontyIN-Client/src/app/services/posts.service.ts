import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient: HttpClient) { }

  public getPosts(){
   return this.httpClient.get('http://localhost:9099/posts/user/'+'1');
  }

  public getPost(id){
    return this.httpClient.get('http://localhost:9099/posts/'+id);
   }

  public newPost(data){
    return this.httpClient.post('http://localhost:9099/posts', data).toPromise().then(data => {
      console.log(data);
    });
    
  }

  public updatePost(data,id){
    return this.httpClient.put('http://localhost:9099/posts/'+id, data).toPromise().then(data => {
      console.log(data);
    });
    
  }

  public deletePost(id){
    return this.httpClient.delete('http://localhost:9099/posts/'+id).toPromise().then(data => {
      console.log(data);
    });
  }

  public getCommentsByPostId(id){
    return this.httpClient.get('http://localhost:9099/comments/post/'+id);
  }

  public newComment(data){
    return this.httpClient.post('http://localhost:9099/comments', data).toPromise().then(data => {
      console.log(data);
    });
    
  }
  
}
