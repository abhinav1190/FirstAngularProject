import { Component, Input } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {

 @Input()
  todo: Todo = new Todo; 
 
  constructor(){
    
  }
  ngOnInit(): void {
    console.log("desc: "+this.todo.desc);
  }
}
