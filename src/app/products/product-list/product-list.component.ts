import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { ErrorHandlerService } from 'src/app/services/error-handler.service';
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
  private sub!: Subscription;
  // public imageWidth = 50; // type is inferred after the first declaration in TS
  public areImagesShowing: boolean = true;
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

  constructor(private _productService: ProductService, private errorHandler: ErrorHandlerService) { // shortcut for declaring the _productService variable earlier.
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

  ngOnDestroy(): void {
    console.log('InOnDestroy');
    this.sub.unsubscribe(); // cancels ongoing Observable subscription to free up memory and CPU: good practice!!
  }

  getProducts() {
    this.sub = this._productService.getProducts().subscribe({
      next: (products) => {
        this.products = products
      },
      complete: () =>  this.errorHandler.displaySuccess('Products fetched successfully!')
    });
  }

  toggleShowImages(): void {
    this.areImagesShowing = !this.areImagesShowing;
  }

  filterProducts(value: string): IProduct[] {
    // usually, there would be an HTTP getProducts() call here but I am using MOCK data for now
    return PRODUCT_LIST_MOCK.filter((product: IProduct) => product.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()));
  }

  onRatingClick(message: string): void {
    this.pageTitle = "Product List: " + message;
  }

}
