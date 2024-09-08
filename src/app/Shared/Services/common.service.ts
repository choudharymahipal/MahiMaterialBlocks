import { Injectable, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  private _snackBar = inject(MatSnackBar);
  constructor() {}

  openSnackBar(message: string) {
    this._snackBar.open(message, 'Close', {
      duration: 1000,
    });
  }

  copyToClipboard(data:string){
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = data;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.openSnackBar("Code copied to clipboard");
  }
}
