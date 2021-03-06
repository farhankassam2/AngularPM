import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';

import { ProductService } from './services/product.service';
import { InMemoryDataService } from './services/in-memory-data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { ToastrModule } from 'ngx-toastr';
import { SharedModule } from './modules/shared.module';
import { SnackBarComponent } from './common-components/snack-bar/snack-bar.component';


const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  {path: 'products', loadChildren: () => import('./modules/product.module').then(m => m.ProductModule)}, // only loads the child module when 'products' exists in the URL
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
]
@NgModule({
  declarations: [ // all components we create and define within this module.
    AppComponent,
    WelcomeComponent,
    SnackBarComponent
  ],
  imports: [ // external, third-party or our own modules that we want to make available to all components declared in this module
    BrowserModule, // allows application to work directly in the browser and exposes the structural Angular directives
    RouterModule, // registers only one instance of each imported module with the Angular injector
    RouterModule.forRoot(routes),
    HttpClientModule,
    /*
         * The HttpClientInMemoryWebApiModule module intercepts HTTP requests
         * and returns simulated server responses.
         * Remove it when a real server is ready to receive requests.
         */
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),

    BrowserAnimationsModule, // enables browser's animation system
    ToastrModule.forRoot(),
    // ProductModule, // this does not get imported into this root module, because it is meant to be lazy-loaded. Putting it here loads it immediately.
    SharedModule,
  ],
  providers: [ProductService, SnackBarComponent, {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 3000}}], // need to provide SnackBarComponent globally here for it to be available as a singleton across the application
  // defined services at root-level: but this is not recommended as it is deprecated. Instead, define root-level services
  // from within the service itself.
  bootstrap: [AppComponent], // tells Angular to startup application with this component (by bootstsraping this component into transpiled JS).
  // Must contain selector that we use in index.html and is automatically added in index.html when this is added here.
  exports: []
})
export class AppModule { }
