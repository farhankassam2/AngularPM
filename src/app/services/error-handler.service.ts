import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, OnChanges, NgZone } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {
   MatSnackBar
} from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService implements OnChanges {

  errorMessage: string = '';
  successMessage: string = '';
  readonly DURATION: number = 4000;

  constructor(private snackBar: MatSnackBar, private zone: NgZone) { }

  
  handleError(err: HttpErrorResponse, callerFunction: string): Observable<never> {
    // send error message to display to the calling function 
    const finalErrorMessage = 'Error during call to ' + callerFunction + ': ' + err.message;
    this.setErrorMessage(finalErrorMessage);
    return throwError(this.errorMessage); // emits an error notification to listening observers
 }
  
  ngOnChanges() {
    if (this.errorMessage) {
      this.displayErrorMessage();
    }

    if (this.successMessage) {
      this.displaySuccessMessage();
    }
  }
  
  setErrorMessage(message: string):void {
    this.errorMessage = message;
  }

  setSuccessMessage(message: string):void {
    this.successMessage = message;
  }

  clearMessages():void {
    this.errorMessage = '';
    this.successMessage = '';
  }
  
  displaySuccessMessage(): void {
      this.snackBar.open(this.successMessage, 'success', { duration: this.DURATION });
      // this.clearMessages();
  }

  displayErrorMessage(): void {
      this.snackBar.open(this.errorMessage, 'error', { duration: this.DURATION });
      // this.clearMessages();
  }
}
