import { Component, Input, OnChanges, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.cropWidth = this.rating * (this.STARS_WIDTH / 5);
  }

}
