import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from 'src/app/types/product';

type State = {
  pageTitle: string;
  product: IProduct | undefined;
  urlId: number;
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
  state: State = {
    pageTitle: 'Product Detail',
    urlId: 0,
    product: undefined
  };
  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.getCurrentProductId();
    this.getProductDetails();
    this.state.pageTitle += `: ${this.state.urlId}`; // template literal
  }

  getProductDetails() {
    this.state.product = this.productService.getProductDetails(this.state.urlId);
  }
  
  getCurrentProductId() {
    this.state.urlId = Number(this.route.snapshot.paramMap.get('id'));
  }

  navigateBack(): void {
    this.router.navigate(['/products']);
  }

}
