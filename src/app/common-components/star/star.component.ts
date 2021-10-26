import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { ProductListComponent } from 'src/app/products/product-list/product-list.component';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit, OnChanges {
  public readonly STARS_WIDTH = 75;
  @Input()
  rating!: number;
  // definite assignment assertion: declares a value as null if no value is assigned to the property.
  // whenever parent component changes this rating, it calls the OnChanges lifecycle hook to reset the star's div's width
  cropWidth: number = this.STARS_WIDTH;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
  // _productList: ProductListComponent;

  constructor() {
    // this._productList = productList;
   }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.cropWidth = this.rating * (this.STARS_WIDTH / 5);
  }

  onClick(): void {
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    // this._productList.onRatingClick(`The rating ${this.rating} was clicked!`);
  }

}
