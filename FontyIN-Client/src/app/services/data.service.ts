import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(private url: string, private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url)
      .pipe(
        // transform this response object to an array of js objects
        map(response => response)
      )
  }


  create(resource: {}) {
    console.log(this.url);
    return this.http.post(this.url, JSON.stringify(resource), this.httpOptions)
      .pipe(
        map(response => response)
      )
  }

  
  update(resource) {
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify(resource))
      .pipe(
        map(response => response)
      )
  }


  delete(id) {
    return this.http.delete(this.url + '/' + id)
      .pipe(
        map(response => response)
      )
  }
}
