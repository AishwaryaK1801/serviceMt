import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UuidService } from '../../services/uuid.service';
import { StudentService } from '../../services/student.service';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-std-form',
  templateUrl: './std-form.component.html',
  styleUrls: ['./std-form.component.scss']
})
export class StdFormComponent implements OnInit {

  @ViewChild('stdForm') stdForm !:NgForm
  constructor(
    private _uuidService : UuidService,
    private _studentService : StudentService,
    private _snackbarServoce : SnackbarService
  ) { }

  ngOnInit(): void {
  }

  onStdAdd(){
    if(this.stdForm.valid){
      let std = this.stdForm.value;
      this.stdForm.reset()
      this._studentService.addStudent({...std, id: this._uuidService})
    }
  }
}
