import { Injectable } from '@angular/core';
import { Istd } from '../models/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  stdsArr :Array<Istd> = [
    {
      fname: "Jhon",
      lname : "Doe",
      email : "Jd@gmail.com",
      contact: 88557845858455,
      id: "123"
    },
    {
      fname: "Jen",
      lname : "Doe",
      email : "Jd@gmail.com",
      contact: 885585458455,
      id:"2545"
    },
    {
      fname: "Peter",
      lname : "bassera",
      email : "pb@gmail.com",
      contact: 88584558455,
      id:"566"
    }
  ]
  constructor() { }

  fetchStdData(){
    return this.stdsArr
  }

  removeStd(stdId: string){
    let removeIndex = this.stdsArr.findIndex(std=> std.id ===stdId)
    this.stdsArr.splice(removeIndex, 1)
  }
  addStudent(std:Istd){
    this.stdsArr.push(std)
  }
}
