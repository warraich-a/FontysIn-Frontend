import { ErrorHandler } from '@angular/core';

export class AppErrorHandler implements ErrorHandler {
    handleError(error) {
        // Display a notification to the user (better use toast than alert)
        alert('An unexpected error occurred.');
        // log the error on the server
        console.log(error);
    }
}