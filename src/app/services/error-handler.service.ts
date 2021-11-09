import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, OnChanges, NgZone } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { MDCSnackbar } from '@material/snackbar';
import { SnackBarComponent } from '../common-components/snack-bar/snack-bar.component';


@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  private errorMessage: string = '';
  readonly DURATION: number = 4000;

  constructor(private toastr: ToastrService, private snackBarComponent: SnackBarComponent) { }

  
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
    // this.toastr.error(message);
      this.snackBarComponent.setDisplayMessage(message);
 
  }

  displaySuccess(message: string): void {
    // this.toastr.success(message);
    // const snackbar = new MDCSnackbar(document.querySelector('.mdc-snackbar') as Element);
    this.snackBarComponent.setDisplayMessage(message);
  }
}
