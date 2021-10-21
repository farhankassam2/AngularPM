import { Component, OnInit } from '@angular/core';
import { Product, PRODUCT_LIST_MOCK } from 'src/app/product';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public pageTitle: string = 'Product List';
  public products: Product[] = PRODUCT_LIST_MOCK;
  // public imageWidth = 50; // type is inferred after the first declaration in TS
  // public imageMargin = 2;
  public areImagesShowing: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleShowImages(): void {
    this.areImagesShowing = !this.areImagesShowing;
  }

}
