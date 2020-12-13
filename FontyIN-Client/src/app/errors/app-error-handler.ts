import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { ErrorService } from '../services/errors/error.service';
import { LoggingService } from '../services/errors/logging.service';
import { NotificationService } from '../services/errors/notification.service';

@Injectable()
export class AppErrorHandler implements ErrorHandler {
    
    constructor(private injector: Injector) { }

            // this._snackBar.open('Given Language already exist Exists!', 'End now', {
            //   duration: 2000,
            // });
            // } 
            //  else if(error.status === 401)
            // {
            //   console.log("sorry not sorry");
            // } 
            // else 
            // {
            //   alert('error')
            // }

    handleError(error: Error | HttpErrorResponse) {

        const errorService = this.injector.get(ErrorService);
        const logger = this.injector.get(LoggingService);
        const notifier = this.injector.get(NotificationService);
        
        console.log("ERROR: ", error)
        let message;
        let stackTrace;

        if (error instanceof HttpErrorResponse) {
            // Server Error
            message = errorService.getServerMessage(error);
            // stackTrace = errorService.getServerStack(error);
            // console.log("Trying to show error")
            notifier.showError(message);
        } else {
            // Client Error
            message = errorService.getClientMessage(error);
            // stackTrace = errorService.getClientStack(error);
            notifier.showError(message);
        }

        // Always log errors
        logger.logError(message, stackTrace);

        console.error(error);
    }

    

}