import { Injectable } from '@angular/core';
import { Itodo } from '../models/todo.interface';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {


  todoArr:Array<Itodo> =[
    {
    todoItem: "Angular 14",
    id: "111"
    },
    {
      todoItem: "Javascript",
      id: "222"
    },
    {
      todoItem: "Node Js",
      id: "333"
    },
    {
      todoItem: "RxJS",
      id: "444"
    }

]

  
  fetchAllTodos(){
    return this.todoArr
  }

  addTodoItem(todo:Itodo){
    this.todoArr.push(todo)
  }

  removeTodo(todoId: string){
    let removeIndex = this.todoArr.findIndex(todo=> todo.id ===todoId)
    this.todoArr.splice(removeIndex, 1)
  }
}
