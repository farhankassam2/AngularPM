import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, OnChanges, NgZone } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  private errorMessage: string = '';
  private successMessage: string = '';
  readonly DURATION: number = 4000;

  constructor(private toastr: ToastrService) { }

  
  handleError(err: HttpErrorResponse, callerFunction: string): Observable<never> {
    // send error message to display to the calling function 
    const finalErrorMessage = 'Error during call to ' + callerFunction + ': ' + err.message;
    this.displayError(finalErrorMessage);
    return throwError(this.errorMessage); // emits an error notification to listening observers
 }

  // displaySuccessMessage(): void {
  //   this.toastr.success(this.successMessage);
  //   this.successMessage = '';
  // }

  // displayErrorMessage(): void {
  //   this.toastr.error(this.errorMessage);
  //   this.errorMessage = '';
  // }

  displayError(message: string): void {
    this.toastr.error(message);
  }

  displaySuccess(message: string): void {
    this.toastr.success(message);
  }
}
