import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from '../common-components/star/star.component';
import { FormsModule } from '@angular/forms';
import { SnackBarComponent } from '../common-components/snack-bar/snack-bar.component';


// This module serves to create a list of components and modules that can be shared across multiple other modules, for ease of definition
// and for separate of logical feature set concerns. Shared will usually also contain external modules imported altogether
// that are used throughout the application, such as CommonModule and FormsModule, which are both used throughout...
@NgModule({
  declarations: [
    StarComponent,
    SnackBarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    StarComponent,
    SnackBarComponent
  ],
  providers: [
    SnackBarComponent // creates single instance across all modules, so that when injected as a dependency anywhere, it refers to the same instance
  ]
})
export class SharedModule { }
