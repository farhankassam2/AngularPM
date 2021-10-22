import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { IProduct, PRODUCT_LIST_MOCK } from 'src/app/types/product';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnChanges, OnDestroy {
  public pageTitle: string = 'Product List';
  public products: IProduct[] = PRODUCT_LIST_MOCK;
  // public imageWidth = 50; // type is inferred after the first declaration in TS
  // public imageMargin = 2;
  public areImagesShowing: boolean = false;
  public filterByProductName: string = '';

  constructor() { }

  ngOnInit(): void {
    console.log('In OnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("In OnChanges: ", changes);
  }

  ngOnDestroy(): void {
    console.log('InOnDestroy');
  }

  toggleShowImages(): void {
    this.areImagesShowing = !this.areImagesShowing;
  }

}
