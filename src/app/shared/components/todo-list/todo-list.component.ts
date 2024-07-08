import { Component, OnInit } from '@angular/core';
import { Itodo } from '../../models/todo.interface';
import { TodoService } from '../../services/todo.service';
import { SnackbarService } from '../../services/snackbar.service';
import { DialogService } from '../../services/dialog.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todoArr !:Array<Itodo>
  constructor(
    private _todoService :TodoService,
    private _snackBarService : SnackbarService,
    private _dialogService : DialogService
  ) { }

  ngOnInit(): void {
    this.todoArr = this._todoService.fetchAllTodos()
  }
  onDeleteClick(todo:Itodo){
    // let getConfirm = confirm('Are you sure, you want to remove this todo item');

    // if(getConfirm){
    //   this._todoService.removeTodo(todo.id)
    //   this._snackBarService.openSnackBAr(`Todo Item ${todo.todoItem}  is removed successfully !!`)
    // }

    this._dialogService.openDialog('Confirmation', `Are you sure, you want to remove ${todo.todoItem} todo item`)
    .subscribe(result=>{
      if(result){
        this._todoService.removeTodo(todo.id)
      this._snackBarService.openSnackBAr(`Todo Item ${todo.todoItem}  is removed successfully !!`)
      }
    })
  }

}
