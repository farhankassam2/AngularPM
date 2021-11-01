import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from 'src/app/types/product';

type State = {
  pageTitle: string;
  product: IProduct | undefined;
  productId: string;
};

@Component({
  // selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  // pageTitle: string = 'Product Detail';
  // product: IProduct | undefined;
  // urlId: number = 0;
  private subscription!: Subscription;
  state: State = {
    pageTitle: 'Product Detail',
    productId: '0',
    product: undefined
  };
  constructor(private route: ActivatedRoute, private _productService: ProductService, private router: Router, private location: Location) { }

  ngOnInit(): void {
    this.getCurrentProductId();
    this.getProductDetails();
    this.state.pageTitle += `: ${this.state.productId}`; // template literal
  }

  getProductDetails() {
    // this.state.product = this._productService.getProductDetails(this.state.urlId);
      this.subscription = this._productService.getProductDetails(this.state.productId).subscribe({
        next: (product?) => this.state.product = product,
        error: (err) => this.state
      });
  }
  
  getCurrentProductId() {
    this.state.productId = String(this.route.snapshot.paramMap.get('id'));
  }

  navigateBack(): void {
    // this.router.navigate(['/products']); // navigate to any given route defined in app routing modulex
    this.location.back(); // uses browser back functionality
  }

}
