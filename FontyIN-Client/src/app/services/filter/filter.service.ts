import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor(private httpClient: HttpClient) { }

  public filterByUserType(userType){
    return this.httpClient.delete('http://localhost:9099/users?type=' + userType);
  }

}
