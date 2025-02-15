import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TodoInterface } from '../types/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor() { }

  todos$ = new BehaviorSubject<TodoInterface[]>([]);

  addTodo(value: string):void {
    const newTodo: TodoInterface = {
      text: value,
      isCompleted: false,
      id: Math.random().toString(16),
    }

    const updatedTodo = [...this.todos$.getValue(), newTodo];
    this.todos$.next(updatedTodo);
  }
}
