import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list/product-list.component';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ConvertToSpacesPipe } from './pipes/convert-to-spaces-pipe.pipe';

@NgModule({
  declarations: [ // all components we create and define within this module.
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe
  ],
  imports: [ // external, third-party or our own modules that we want to make available to all components declared in this module
    BrowserModule, // allows application to work directly in the browser and exposes the structural Angular directives
    RouterModule,
    FormsModule
  ],
  providers: [], // defined services
  bootstrap: [AppComponent], // tells Angular to startup application with this component (by bootstsraping this component into transpiled JS).
  // Must contain selector that we use in index.html and is automatically added in index.html when this is added here.
  exports: [ConvertToSpacesPipe]
})
export class AppModule { }
