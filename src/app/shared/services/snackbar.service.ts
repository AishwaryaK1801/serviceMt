import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(
    private _snackBarSercvice : MatSnackBar
  ) { }


  openSnackBAr(msg:string){
    this._snackBarSercvice.open(msg, "close",{
      duration:4000,
      verticalPosition:"top",
      horizontalPosition:"center"
    })
  }

}
