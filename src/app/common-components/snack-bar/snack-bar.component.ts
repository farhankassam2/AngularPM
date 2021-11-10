import { Component, Inject, OnInit } from '@angular/core';
import {MatSnackBar, MatSnackBarConfig, MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'pm-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss']
})
export class SnackBarComponent implements OnInit {
  private readonly CONFIGS: MatSnackBarConfig = {
    politeness: 'polite',
    horizontalPosition: 'right',
    verticalPosition: 'bottom',
  }

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  setDisplayMessage(message: string) {
    if (message) {
       let localSnackBar = this._snackBar.open(message, 'dismiss', this.CONFIGS);
    }
  }

}
