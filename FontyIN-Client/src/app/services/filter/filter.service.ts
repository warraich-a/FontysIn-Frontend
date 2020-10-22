import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor(private httpClient: HttpClient) { }

  public filterByUserTypeStudent(userType){
    return this.httpClient.get('http://localhost:9099/users?type=' + userType);
  }

  public filterUsersByStartStudyYear(year){
    return this.httpClient.get('http://localhost:9099/users?studyYear=' + year);
  }

  public filterByUserLocation(location){
    return this.httpClient.get('http://localhost:9099/users?location=' + location);
  }

}
