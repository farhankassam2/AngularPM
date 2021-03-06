import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ErrorHandlerService } from 'src/app/services/error-handler.service';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from 'src/app/types/product';

type State = {
  pageTitle: string;
  product: IProduct | undefined;
  urlProductId: string;
  sub?: Subscription;
};

@Component({
  // selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  // pageTitle: string = 'Product Detail';
  // product: IProduct | undefined;
  // urlId: number = 0;
  state: State = {
    pageTitle: 'Product Detail',
    urlProductId: '0',
    product: undefined,
  };
  constructor(private route: ActivatedRoute, private _productService: ProductService, private router: Router, private location: Location, private errorHandler: ErrorHandlerService) { }

  ngOnInit(): void {
    this.getUrlProductId();
    this.getProductDetails();
    this.state.pageTitle += `: ${this.state.urlProductId}`; // template literal
  }

  ngOnDestroy(): void {
    this.state.sub?.unsubscribe();
  }

  getProductDetails() {
      this.state.sub = this._productService.getProductDetails(this.state.urlProductId).subscribe({
        next: (product?) => this.state.product = product,
        complete: () => this.errorHandler.displaySuccess('Product details fetched successfully!')
      });
  }
  
  getUrlProductId() {
    const id = this.route.snapshot.paramMap.get('id');
    if (this.isParamIdValid(id)) {
      this.state.urlProductId = String(id);
    }
  }

  isParamIdValid(id: string | null) {
    return id && !isNaN(Number(id)) && Number(id) > 0;
  }

  navigateBack(): void {
    // this.router.navigate(['/products']); // navigate to any given route defined in app routing module
    this.location.back(); // uses browser back functionality
  }

}
