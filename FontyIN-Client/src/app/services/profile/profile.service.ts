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


  readLocalStorageValue() {
    if(localStorage.getItem("userToken") != null){
      this.httpOptions.headers = this.httpOptions.headers.set('Authorization', localStorage.getItem("userToken"));
    };
}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient, 
    private _snackBar: MatSnackBar) {this.readLocalStorageValue(); }

  public getAllUsers(){
    return this.httpClient.get('https://fontysin-backend.azurewebsites.net/users/', this.httpOptions)
  }
  public getProfile(userId){
    return this.httpClient.get( 'https://fontysin-backend.azurewebsites.net/users/'+ userId + '/profiles', this.httpOptions)
  }
  public getUser(userId){
    return this.httpClient.get('https://fontysin-backend.azurewebsites.net/users/' + userId, this.httpOptions)
  }
  public getUserById(userId){
    console.log("GETTING USER BY ID")
    return this.httpClient.get('https://fontysin-backend.azurewebsites.net/users/p/' + userId, this.httpOptions)
  }

  public getExperienceById(userId, profileId){  
    this.httpOptions.headers = this.httpOptions.headers.set('visitorId', '5');
    console.log(this.httpOptions.headers);
    return this.httpClient.get('https://fontysin-backend.azurewebsites.net/users/' + userId + '/profiles/' + profileId + '/experiences', this.httpOptions)
  }

  public getEducationsById(userId, profileId){
    this.httpOptions.headers = this.httpOptions.headers.set('visitorId', '2');
    console.log(this.httpOptions.headers);
    return this.httpClient.get('https://fontysin-backend.azurewebsites.net/users/' + userId + '/profiles/' + profileId + '/educations', this.httpOptions)
  }

  public getSkillsById(userId, profileId){ 
    this.httpOptions.headers = this.httpOptions.headers.set('visitorId', '2');
    console.log(this.httpOptions.headers);
    return this.httpClient.get('https://fontysin-backend.azurewebsites.net/users/' + userId + '/profiles/' + profileId + '/skills', this.httpOptions)
  }
  public getAboutById(userId, profileId){
    return this.httpClient.get('https://fontysin-backend.azurewebsites.net/users/' + userId + '/profiles/' + profileId + '/abouts', this.httpOptions)
  }
  public addAbout(data, userId, profileId){
    return this.httpClient.post('https://fontysin-backend.azurewebsites.net/users/' + userId + '/profiles/' + profileId + '/abouts/new', data, this.httpOptions);
  }
  public addEducation(data, userId, profileId){
    return this.httpClient.post('https://fontysin-backend.azurewebsites.net/users/' + userId + '/profiles/' + profileId + '/educations/new', data, this.httpOptions).toPromise().then(data => {
      console.log(data);
    })
  }
  public addExperience(data, userId, profileId){
    return this.httpClient.post('https://fontysin-backend.azurewebsites.net/users/' + userId + '/profiles/' + profileId + '/experiences/new', data, this.httpOptions).subscribe((data)=>
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
    return this.httpClient.post('https://fontysin-backend.azurewebsites.net/users/' + userId + '/profiles/' + profileId + '/skills/new', data, this.httpOptions).subscribe((data)=>
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
    return this.httpClient.post('https://fontysin-backend.azurewebsites.net/users/' + userId + '/profiles/new', JSON.stringify(resource), this.httpOptions)
      .pipe(
        map(response => response)
      )
  }



    //delete data in profile page
    public deleteEducation(userId, profileId, educationId){
      return this.httpClient.delete('https://fontysin-backend.azurewebsites.net/users/' + userId + '/profiles/' + profileId + '/educations/' + educationId, this.httpOptions);
    }
  
    public deleteExperience(userId, profileId, experienceId){
      return this.httpClient.delete('https://fontysin-backend.azurewebsites.net/users/' + userId + '/profiles/' + profileId + '/experiences/' + experienceId, this.httpOptions);
    }
  
    public deleteSkill(userId, profileId, skillId){
      return this.httpClient.delete('https://fontysin-backend.azurewebsites.net/users/' + userId + '/profiles/' + profileId + '/skills/' + skillId, this.httpOptions);
    }
    

    public GetOneEducation(id){
      const url = 'https://fontysin-backend.azurewebsites.net/users/profile/education/' + id;
      return this.httpClient.get(url, this.httpOptions);
    }

    public GetOneExperience(id){
      const url = 'https://fontysin-backend.azurewebsites.net/users/profile/experience/' + id;
      return this.httpClient.get(url, this.httpOptions);
      
    }
    public GetOneAbout(id){
      const url = 'https://fontysin-backend.azurewebsites.net/users/profile/about/' + id;
      return this.httpClient.get(url, this.httpOptions);
      
    }
    public GetOneAddress(id){
      const url = 'https://fontysin-backend.azurewebsites.net/users/address/' + id;
      return this.httpClient.get(url, this.httpOptions);
      
    }
    public GetOneUser(id){
      const url = 'https://fontysin-backend.azurewebsites.net/users/user/' + id;
      return this.httpClient.get(url, this.httpOptions);
      
    }

    updateEducation(model, id) {
      const url = 'https://fontysin-backend.azurewebsites.net/users/profile/education/' + id;
      return this.httpClient.put(url, model, this.httpOptions);
    }

  
    updateExperience(model, id) {
      const url = 'https://fontysin-backend.azurewebsites.net/users/profile/experience/' + id;
      return this.httpClient.put(url, model, this.httpOptions);
    }
    
  updateAbout(model, id) {
    const url = 'https://fontysin-backend.azurewebsites.net/users/profile/about/' + id;
    return this.httpClient.put(url, model, this.httpOptions);
  }

  updateAddress(model, id) {
    const url = 'https://fontysin-backend.azurewebsites.net/users/address/' + id;
    return this.httpClient.put(url, model, this.httpOptions);
  }
  updatePhoneNumber(model, id) {
    const url = 'https://fontysin-backend.azurewebsites.net/users/' + id;
    return this.httpClient.put(url, model, this.httpOptions);
  }
  public GetOnePrivacy(){
    const url = 'https://fontysin-backend.azurewebsites.net/users/privacy/me';
    return this.httpClient.get(url, this.httpOptions);
    
  }

  updatePrivacy(model) {
    const url = 'https://fontysin-backend.azurewebsites.net/users/privacy/' + model.id;
    return this.httpClient.put(url, model, this.httpOptions);
  }

  public uploadPicture(userId, data){
    return this.httpClient.put('https://fontysin-backend.azurewebsites.net/upload/'+userId+'/uploadPicture', data, {responseType: 'text'})
  }

  public getFontysLocations(){
    return this.httpClient.get('https://fontysin-backend.azurewebsites.net/users/fontysLocations');
  }

  public getFontysDepartments(){
    return this.httpClient.get('https://fontysin-backend.azurewebsites.net/users/fontysDepartments');
  }
  public addAddress(data){
    return this.httpClient.post('https://fontysin-backend.azurewebsites.net/users/newAddress', data);
  }

  public addNewUser(data){
    return this.httpClient.post('https://fontysin-backend.azurewebsites.net/users/new', data);
  }
  public getData(userId, profileId){
    this.httpOptions.headers = this.httpOptions.headers.set('visitorId', '2');
    console.log(this.httpOptions.headers);
    return this.httpClient.get('https://fontysin-backend.azurewebsites.net/users/' + userId + '/profiles/' + profileId + '/data', this.httpOptions)
  }

}
