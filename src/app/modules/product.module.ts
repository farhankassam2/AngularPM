import { NgModule } from '@angular/core';
import { ProductDetailComponent } from 'src/app/products/product-detail/product-detail.component';
import { ProductListComponent } from 'src/app/products/product-list/product-list.component';
import { RouterModule, Routes } from '@angular/router';
import { ConvertToSpacesPipe } from 'src/app/pipes/convert-to-spaces-pipe.pipe';
import { ProductDetailGuard } from 'src/app/services/product-detail.guard';
import { SharedModule } from './shared.module';

// Every route inside of this module is a child route
const routes: Routes = [
  { path: '', component: ProductListComponent }, // products path is defined as a lazy-loaded feature module in app.module.ts
  { path: ':id', canActivate: [ProductDetailGuard], component: ProductDetailComponent },
]


@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductListComponent,
    ConvertToSpacesPipe
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
  ],
  exports: []
})
export class ProductModule { }
