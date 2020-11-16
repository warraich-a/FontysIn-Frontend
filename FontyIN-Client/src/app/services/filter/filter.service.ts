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

  public filterUsersByStartWorkYear(year){
    return this.httpClient.get('http://localhost:9090/users?workingYear=' + year);
  }

  public filterUsersByName(name){
    return this.httpClient.get('http://localhost:9090/users?firstName=' + name);
  }

  public filterUsersByTypeLocationDepartment(type, locId, depId){
    return this.httpClient.get('http://localhost:9090/users?type=' + type + '&location=' + locId + '&department=' + depId);
  }

  public filterUsersByTypeLocationDepartmentStudyYear(type, year, locId, depId){
    return this.httpClient.get('http://localhost:9090/users?type=' + type + '&studyYear=' + year + '&location=' + locId + '&department=' + depId );
  }

  public filterUsersByTypeLocationDepartmentWorkYear(type, year, locId, depId){
    return this.httpClient.get('http://localhost:9090/users?type=' + type + '&workingYear=' + year + '&location=' + locId + '&department=' + depId );
  }

  public filterUsersByTypeLocationDepartmentName(name, locId, depId, type){
    return this.httpClient.get('http://localhost:9090/users?firstName=' + name + '&location=' + locId + '&department=' + depId + '&type=' + type );
  }


}
