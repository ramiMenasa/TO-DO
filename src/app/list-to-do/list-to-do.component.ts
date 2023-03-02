import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list-to-do',
  templateUrl: './list-to-do.component.html',
  styleUrls: ['./list-to-do.component.css']
})
export class ListToDoComponent {
@Input() singleItem ?:string;
@Input() index ?:number;
@Output() deletItem = new EventEmitter ()
@Output() doneItem = new EventEmitter ()


removeItem()
{
  this.deletItem.emit(this.index)
}

done(){
  this.doneItem.emit(this.index)
}

}
