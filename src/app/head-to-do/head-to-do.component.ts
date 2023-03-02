import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-head-to-do',
  templateUrl: './head-to-do.component.html',
  styleUrls: ['./head-to-do.component.css']
})
export class HeadToDoComponent {

 oneItem !: string ;
@Output() addToDo = new EventEmitter();
  constructor() { }

  addItem() {
    if(this.oneItem !=''){
      this.addToDo.emit(this.oneItem);
    }else{
       alert("can't add empty field");
      }
      this.oneItem ='';  
  }
}

