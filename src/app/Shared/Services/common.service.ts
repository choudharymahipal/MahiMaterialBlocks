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
}
