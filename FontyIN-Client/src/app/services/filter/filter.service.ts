import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor(private httpClient: HttpClient) { }

  public filterByUserType(userType){
    return this.httpClient.get('http://localhost:9090/users?type=' + userType);
  }

  public filterUsersByStartStudyYear(year){
    return this.httpClient.get('http://localhost:9090/users?studyYear=' + year);
  }

  public filterUserByLocation(location){
    return this.httpClient.get('http://localhost:9090/users?location=' + location);
  }

  public filterUserByDepartment(department){
    return this.httpClient.get('http://localhost:9090/users?department=' + department);
  }

}
