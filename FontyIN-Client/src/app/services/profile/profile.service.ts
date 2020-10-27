import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { Education } from 'src/app/classes/Profile/Education';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(private httpClient: HttpClient, 
    private _snackBar: MatSnackBar) { }

  public getProfile(userId){
    return this.httpClient.get( 'http://localhost:9099/users/'+ userId + '/profiles')
  }
  public getUser(userId){
    return this.httpClient.get('http://localhost:9099/users/' + userId)
  }

  public getUserById(userId){
    return this.httpClient.get('http://localhost:9099/users/p/' + userId)
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
  public addAbout(data, userId, profileId){
    return this.httpClient.post('http://localhost:9099/users/' + userId + '/profiles/' + profileId + '/abouts/new', data).toPromise().then(data => {
      console.log(data);
    })
  }
  public addEducation(data, userId, profileId){
    return this.httpClient.post('http://localhost:9099/users/' + userId + '/profiles/' + profileId + '/educations/new', data).toPromise().then(data => {
      console.log(data);
    })
  }
  public addExperience(data, userId, profileId){
    return this.httpClient.post('http://localhost:9099/users/' + userId + '/profiles/' + profileId + '/experiences/new', data).subscribe((data)=>
    {
     
    },
    (error: Response) => {
      
      if(error.status === 409){
        this._snackBar.open('Already Exist!!', 'End now', {
          duration: 1000,
        });
        } 
        else 
        {
          alert(error.status)
        }
    });
      
  }
  public addSkill(data, userId, profileId){
    return this.httpClient.post('http://localhost:9099/users/' + userId + '/profiles/' + profileId + '/skills/new', data).subscribe((data)=>
    {
     
    },
    (error: Response) => {
      if(error.status === 409){
        this._snackBar.open('Already Exist!!', 'End now', {
          duration: 1000,
        });
        } 
        else 
        {
          alert('error')
        }
    });
      
  }

  public addProfile(resource: {}, userId) {
    //console.log(this.url);
    return this.httpClient.post('http://localhost:9099/users/' + userId + '/profiles/new', JSON.stringify(resource), this.httpOptions)
      .pipe(
        map(response => response)
      )
  }

  // public addProfile(data, userId){
  //   return this.httpClient.post('http://localhost:9090/users/' + userId + '/profiles/new', data).subscribe((data)=>
  //   {
     
  //   },
  //   (error: Response) => {
  //     if(error.status === 409){
  //       this._snackBar.open('Already Exist!!', 'End now', {
  //         duration: 1000,
  //       });
  //       } 
  //       else 
  //       {
  //         alert('error')
  //       }
  //   });
  // }

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
    

    public GetOneEducation(id){
      const url = 'http://localhost:9099/users/profile/education/' + id;
      return this.httpClient.get(url);
    }

    public GetOneExperience(id){
      const url = 'http://localhost:9099/users/profile/experience/' + id;
      return this.httpClient.get(url);
      
    }
    public GetOneAbout(id){
      const url = 'http://localhost:9099/users/profile/about/' + id;
      return this.httpClient.get(url);
      
    }
    public GetOneAddress(id){
      const url = 'http://localhost:9099/users/address/' + id;
      return this.httpClient.get(url);
      
    }
    public GetOneUser(id){
      const url = 'http://localhost:9099/users/user/' + id;
      return this.httpClient.get(url);
      
    }

    updateEducation(model, id) {
      const url = 'http://localhost:9099/users/profile/education/' + id;
      return this.httpClient.put(url, model);
    }

  
    updateExperience(model, id) {
      const url = 'http://localhost:9099/users/profile/experience/' + id;
      return this.httpClient.put(url, model);
    }
    
  updateAbout(model, id) {
    const url = 'http://localhost:9099/users/profile/about/' + id;
    return this.httpClient.put(url, model);
  }

  updateAddress(model, id) {
    const url = 'http://localhost:9099/users/address/' + id;
    return this.httpClient.put(url, model);
  }
  updatePhoneNumber(model, id) {
    const url = 'http://localhost:9099/users/' + id;
    return this.httpClient.put(url, model);
  }
  public GetOnePrivacy(id){
    const url = 'http://localhost:9099/users/privacy/' + id;
    return this.httpClient.get(url);
    
  }

  updatePrivacy(model, id) {
    const url = 'http://localhost:9099/users/privacy/' + id;
    return this.httpClient.put(url, model);
  }


}
