import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient: HttpClient) { }

  public getPosts(){
   return this.httpClient.get('http://localhost:9090/posts/user/'+'1');
  }
  public newPost(data){
    return this.httpClient.post('http://localhost:9090/posts', data).toPromise().then(data => {
      console.log(data);
    });
    
  }
  public deletePost(id){
    return this.httpClient.delete('http://localhost:9090/posts/'+id).toPromise().then(data => {
      console.log(data);
    });
  }
}
