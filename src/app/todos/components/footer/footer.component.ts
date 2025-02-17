import { Component } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  noTodosClass$: Observable<boolean>;
  activeCount$: Observable<number>;
  itemsLeftText$: Observable<string>;

  constructor(private todoService: TodosService) {
    this.activeCount$ = this.todoService.todos$.pipe(
      map((todos => todos.filter((todo) => !todo.isCompleted).length))
    )
    this.itemsLeftText$ = this.activeCount$.pipe(
      map((activeCount) => `item${activeCount !== 1 ? 's' : ''} left`)
    )
    this.noTodosClass$ = this.todoService.todos$.pipe(
      map((todos => todos.length === 0))
    );
  }
}
