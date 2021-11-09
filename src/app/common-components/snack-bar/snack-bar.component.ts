import { Component, OnInit } from '@angular/core';
import { MDCSnackbar } from '@material/snackbar';

@Component({
  selector: 'pm-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss']
})
export class SnackBarComponent implements OnInit {

   shouldDisplay: boolean = false;
   displayMessage: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  setDisplayMessage(message: string) {
    if (message) {
      this.displayMessage = message;
      this.shouldDisplay = true;
      const snackbar = new MDCSnackbar(document.querySelector('.mdc-snackbar') as Element);
      snackbar.labelText = message;
      snackbar.open();
    }
  }

 reset() {
    this.displayMessage = '';
    this.shouldDisplay = false;
  }

}
