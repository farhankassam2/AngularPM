import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from '../common-components/star/star.component';
import { FormsModule } from '@angular/forms';
import { SnackBarComponent } from '../common-components/snack-bar/snack-bar.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';


// This module serves to create a list of components and modules that can be shared across multiple other modules, for ease of definition
// and for separate of logical feature set concerns. Shared will usually also contain external modules imported altogether
// that are used throughout the application, such as CommonModule and FormsModule, which are both used throughout...
@NgModule({
  declarations: [
    StarComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatSnackBarModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    StarComponent,
    MatSnackBarModule
  ],
  providers: [
  ]
})
export class SharedModule { }
