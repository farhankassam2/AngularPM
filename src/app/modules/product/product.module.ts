import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from 'src/app/products/product-detail/product-detail.component';
import { ProductListComponent } from 'src/app/products/product-list/product-list.component';
import { StarComponent } from 'src/app/common-components/star/star.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ConvertToSpacesPipe } from 'src/app/pipes/convert-to-spaces-pipe.pipe';
import { ProductDetailGuard } from 'src/app/services/product-detail.guard';

const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'products/:id', canActivate: [ProductDetailGuard], component: ProductDetailComponent },
]

@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductListComponent,
    StarComponent,
    ConvertToSpacesPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [ConvertToSpacesPipe]
})
export class ProductModule { }
