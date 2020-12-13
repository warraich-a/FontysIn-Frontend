import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Unauthorized } from './unauthorized';
import { Forbidden } from './forbidden';

@Injectable()
export class ServerErrorInterceptor implements HttpInterceptor {

//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

//     return next.handle(request).pipe(
//       catchError((error: HttpErrorResponse) => {
//         if (error instanceof Unauthorized) {
		  
//         } 
//         if(error instanceof Forbidden) {
//         }
//         else {
//           return throwError(error);
//         }
//       })
//     );    
//   }

	handleError(error: HttpErrorResponse){
   		console.log("lalalalalalalala");
   		return throwError(error);
  	}

	intercept(req: HttpRequest<any>, next: HttpHandler):
 		Observable<HttpEvent<any>>{
  			return next.handle(req)
  				.pipe(
   					catchError(this.handleError)
  				)
  	};
}
