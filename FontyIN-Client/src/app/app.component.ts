import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FontyIN-Client';

  readLocalStorageValue() {
    return localStorage.getItem('userToken');
}
userIsLogged(){
  if(this.readLocalStorageValue() != null){
   return true;
  }else{
   return false;
  }
}
 

}
