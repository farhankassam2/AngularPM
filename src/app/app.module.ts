import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list/product-list.component';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ConvertToSpacesPipe } from './pipes/convert-to-spaces-pipe.pipe';
import { StarComponent } from './common-components/star/star.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductDetailGuard } from './services/product-detail.guard';

import { catchError, tap } from 'rxjs/operators';
import { ProductService } from './services/product.service';

const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'products/:id', canActivate: [ProductDetailGuard], component: ProductDetailComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
]
@NgModule({
  declarations: [ // all components we create and define within this module.
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent
  ],
  imports: [ // external, third-party or our own modules that we want to make available to all components declared in this module
    BrowserModule, // allows application to work directly in the browser and exposes the structural Angular directives
    RouterModule, // registers only one instance of each imported module with the Angular injector
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [ProductService], // defined services
  bootstrap: [AppComponent], // tells Angular to startup application with this component (by bootstsraping this component into transpiled JS).
  // Must contain selector that we use in index.html and is automatically added in index.html when this is added here.
  exports: [ConvertToSpacesPipe]
})
export class AppModule { }
