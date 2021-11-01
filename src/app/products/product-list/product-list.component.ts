import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { IProduct, PRODUCT_LIST_MOCK } from 'src/app/types/product';

@Component({
  // selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  // providers: [ProductService] // component injector - only used by this instance of the component
})
export class ProductListComponent implements OnInit, OnChanges, OnDestroy {
  public pageTitle: string = 'Product List';
  public products: IProduct[] = [];
  private errorMessage: string = '';
  private subs: Subscription[] = [];
  // public imageWidth = 50; // type is inferred after the first declaration in TS
  public areImagesShowing: boolean = false;
  // public filterByProductName: string = '';
  private _filterByProductName: string = ''; // Backing variable
 // private _productService: ProductService;

  public get filterByProductName(): string {
    return this._filterByProductName;
  }
  public set filterByProductName(value: string) {
    this._filterByProductName = value;
    console.log('In setter: ', this._filterByProductName);
    this.products = this.filterProducts(value);
  }

  constructor(private _productService: ProductService) { // shortcut for declaring the _productService variable earlier.
    // no functional code
    // initialization of variables ONLY
  }

  ngOnInit(): void {
    console.log('In OnInit');
    this.getProducts();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("In OnChanges: ", changes);
  }

  getProducts() {
    this.subs.push(this._productService.getProducts().subscribe({
      next: products => this.products = products,
      error: err => this.errorMessage = err,
    }));
  }

  ngOnDestroy(): void {
    console.log('InOnDestroy');
    for (let sub of this.subs) {
      sub.unsubscribe();
    }
  }

  toggleShowImages(): void {
    this.areImagesShowing = !this.areImagesShowing;
  }

  filterProducts(value: string): IProduct[] {
    return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().includes(value.toLocaleLowerCase()));
  }

  onRatingClick(message: string): void {
    this.pageTitle = "Product List: " + message;
  }

}
