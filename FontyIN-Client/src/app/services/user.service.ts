import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  updateAbout(model, id) {
    const url = 'http://localhost:9090/profile/about/' + id;
    return this.httpClient.put(url, model);
  }

  updateEducation(model, id) {
    const url = 'http://localhost:9090/profile/education/' + id
    return this.httpClient.put(url, model);
  }

  updateExperience(model, id) {
    const url = 'http://localhost:9090/profile/experience/' + id;
    return this.httpClient.put(url, model);
  }

}
