import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private httpClient: HttpClient) { }

  public getAllUsers(){
    return this.httpClient.get('http://localhost:9090/users/')
  }

  public getProfile(){
    return this.httpClient.get('http://localhost:9099/users/1/profiles/1')
  }
  public getExperienceById(userId, profileId){
    return this.httpClient.get('http://localhost:9099/users/' + userId + '/profiles/' + profileId + '/experiences')
  }

  public getEducationsById(userId, profileId){
    return this.httpClient.get('http://localhost:9099/users/' + userId + '/profiles/' + profileId + '/educations')
  }

  public getSkillsById(userId, profileId){
    return this.httpClient.get('http://localhost:9099/users/' + userId + '/profiles/' + profileId + '/skills')
  }
  public getAboutById(userId, profileId){
    return this.httpClient.get('http://localhost:9099/users/' + userId + '/profiles/' + profileId + '/abouts')
  }
  public addEducation(data, userId, profileId){
    return this.httpClient.post('http://localhost:9099/users/' + userId + '/profiles/' + profileId + '/educations/new', data).toPromise().then(data => {
      console.log(data);
    })
  }
  public addExperience(data, userId, profileId){
    return this.httpClient.post('http://localhost:9099/users/' + userId + '/profiles/' + profileId + '/experiences/new', data).toPromise().then(data => {
      console.log(data);
    })
  }
  public addSkill(data){
    return this.httpClient.post('http://localhost:9099/users/1/profiles/1/skills/new', data).toPromise().then(data => {
      console.log(data);
    })
  }

    //delete data in profile page
    public deleteEducation(userId, profileId, educationId){
      return this.httpClient.delete('http://localhost:9099/users/' + userId + '/profiles/' + profileId + '/educations/' + educationId);
    }
  
    public deleteExperience(userId, profileId, experienceId){
      return this.httpClient.delete('http://localhost:9099/users/' + userId + '/profiles/' + profileId + '/experiences/' + experienceId);
    }
  
    public deleteSkill(userId, profileId, skillId){
      return this.httpClient.delete('http://localhost:9099/users/' + userId + '/profiles/' + profileId + '/skills/' + skillId);
    }


}
