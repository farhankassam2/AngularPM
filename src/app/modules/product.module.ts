import { NgModule } from '@angular/core';
import { ProductDetailComponent } from 'src/app/products/product-detail/product-detail.component';
import { ProductListComponent } from 'src/app/products/product-list/product-list.component';
import { RouterModule, Routes } from '@angular/router';
import { ConvertToSpacesPipe } from 'src/app/pipes/convert-to-spaces-pipe.pipe';
import { ProductDetailGuard } from 'src/app/services/product-detail.guard';
import { SharedModule } from './shared.module';

const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'products/:id', canActivate: [ProductDetailGuard], component: ProductDetailComponent },
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
  exports: [ConvertToSpacesPipe]
})
export class ProductModule { }
