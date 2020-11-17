import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient: HttpClient) { this.readLocalStorageValue(); }
  readLocalStorageValue() {
    if(localStorage.getItem("userToken") != null){
      this.httpOptions.headers = this.httpOptions.headers.set('Authorization',  'Basic ' + localStorage.getItem("userToken"));
    };
}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  public getPosts(){
   return this.httpClient.get('http://localhost:9090/posts/user/'+ 1, this.httpOptions);
  }

  public getPostLikes(id){
    return this.httpClient.get('http://localhost:9090/posts/'+id+"/likes", this.httpOptions);
   }
  
  public getPostLikesCount(id){
    return this.httpClient.get('http://localhost:9090/posts/'+id+"/likes/count", this.httpOptions);
   }

  public getNewsfeed(id){
    return this.httpClient.get('http://localhost:9090/posts/newsfeed/'+id,this.httpOptions);
   }

  public getPost(id){
    return this.httpClient.get('http://localhost:9090/posts/'+id, this.httpOptions);
   }

  public newPost(data){
    return this.httpClient.post('http://localhost:9090/posts', data, this.httpOptions).toPromise().then(data => {
      console.log(data);
    });
    
  }

  public updatePost(data,id){
    return this.httpClient.put('http://localhost:9090/posts/'+id, data, this.httpOptions).toPromise().then(data => {
      console.log(data);
    });
    
  }

  public deletePost(id){
    return this.httpClient.delete('http://localhost:9090/posts/'+id, this.httpOptions).toPromise().then(data => {
      console.log(data);
    });
  }

  public getCommentsByPostId(id){
    return this.httpClient.get('http://localhost:9090/comments/post/'+id, this.httpOptions);
  }

  public newComment(data){
    return this.httpClient.post('http://localhost:9090/comments', data, this.httpOptions).toPromise().then(data => {
      console.log(data);
    });
    
  }
  
}
