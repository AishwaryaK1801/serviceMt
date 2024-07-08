import { Component, OnInit } from '@angular/core';
import { Istd } from '../../models/todo.interface';
import { StudentService } from '../../services/student.service';
import { SnackbarService } from '../../services/snackbar.service';
import { DialogService } from '../../services/dialog.service';

@Component({
  selector: 'app-std-table',
  templateUrl: './std-table.component.html',
  styleUrls: ['./std-table.component.scss']
})
export class StdTableComponent implements OnInit {

  stdArr !: Array<Istd>
  constructor(
    private _stdService : StudentService,
    private _snackbar : SnackbarService,
    private _dialogService : DialogService
  ) { }

  ngOnInit(): void {
  this.stdArr=  this._stdService.fetchStdData()
  }

  onDeleteClick(std : Istd){
    // let getConfirm = confirm('Are you sure, you want to remove this student');

    // if(getConfirm){
    //   this._stdService.removeStd(std.id)
    //   this._snackbar.openSnackBAr(`student ${std.fname} ${std.fname} is removed successfully !!`)
    // }

    this._dialogService.openDialog('Confirmation', `Are you sure, you want to remove ${std.fname} ${std.lname} student`)
    .subscribe(result=>{
      if(result){
        this._stdService.removeStd(std.id)
        this._snackbar.openSnackBAr(`student ${std.fname} ${std.fname} is removed successfully !!`)
      }
    })
  }
}
