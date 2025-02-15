import { Component } from '@angular/core';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {

  constructor(private todoService: TodosService) {
    this.todoService.todos$.subscribe(todos => {
      console.log(todos);
    })
  }

  inputValue: string = '';

  changeValue(event: Event):void {
    let target = event.target as HTMLInputElement;
    this.inputValue = target.value;
  }

  addTodo():void {
    this.todoService.addTodo(this.inputValue);
  }
}
