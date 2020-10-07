import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private httpClient: HttpClient) { }

  public getProfile(){
    return this.httpClient.get('http://localhost:9099/users/1/profiles/1')
  }
  public getExperienceById(){
    return this.httpClient.get('http://localhost:9099/users/1/profiles/1/experiences')
  }
  public getEducationsById(){
    return this.httpClient.get('http://localhost:9099/users/1/profiles/1/educations')
  }

  public getSkillsById(){
    return this.httpClient.get('http://localhost:9099/users/1/profiles/1/skills')
  }
  public getAboutById(){
    return this.httpClient.get('http://localhost:9099/users/1/profiles/1/abouts')
  }
  public addEducation(data){
    return this.httpClient.post('http://localhost:9099/users/1/profiles/1/educations/new', data).toPromise().then(data => {
      console.log(data);
    })
  }

  //delete data in profile page
  public deleteEducation(userId, profileId, educationId){
    return this.httpClient.delete('http://localhost:9090/users/' + userId + '/profile/' + profileId + '/education/' + educationId);
  }

  public deleteExperience(userId, profileId, experienceId){
    return this.httpClient.delete('http://localhost:9090/users/' + userId + '/profile/' + profileId + '/experience/' + experienceId);
  }

  public deleteSkill(userId, profileId, skillId){
    return this.httpClient.delete('http://localhost:9090/users/' + userId + '/profile/' + profileId + '/skill/' + skillId);
  }

}
