import { Component, OnInit, ViewChild } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { NgForm } from '@angular/forms';
import { UuidService } from '../../services/uuid.service';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
 @ViewChild('todoForm') todoForm !: NgForm
  constructor(
    private _todoService : TodoService,
    private _uuidService : UuidService,
    private _snackBarService : SnackbarService
  ) { }

  ngOnInit(): void {
  }
  onTodoAdd(){
    if(this.todoForm.valid){
      let todo = this.todoForm.value
      this.todoForm.reset()
      this._todoService.addTodoItem({...todo, id:this._uuidService.uuid()})
      this._snackBarService.openSnackBAr('todo Items Added successfully !!!')
    }  }



}
