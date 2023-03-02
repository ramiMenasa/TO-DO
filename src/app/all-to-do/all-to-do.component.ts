import { Component } from '@angular/core';

@Component({
  selector: 'app-all-to-do',
  templateUrl: './all-to-do.component.html',
  styleUrls: ['./all-to-do.component.css']
})
export class AllToDoComponent {

  todo:Array<string>=[]

  additem(item:string){
     this.todo.push(item);
     console.log(this.todo);
     
   }

   removeitem(i:number){
    this.todo.splice(i,1);
   }
   
   done(i:number){
     const item = document.getElementById(`item${i}`);
     const btnDone  = document.getElementById(`done${i}`) as HTMLInputElement ;

     if(item!.style.textDecoration!="line-through"){
         btnDone.value="Undo";
     item!.style.textDecoration="line-through";
     }
     else{
        btnDone.value="Done";
       item!.style.textDecoration="none"}
   }

}
