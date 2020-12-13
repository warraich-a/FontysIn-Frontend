import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  getClientMessage(error: Error): string {    
    return error.message ? 
           error.message : 
           error.toString();
  }

  getServerMessage(error: HttpErrorResponse): string {
      console.log("MESSAGE "+ error.error);
    return navigator.onLine ?    
           error.error :
           'No Internet Connection';
  }  
}
