import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TodoInterface } from '../types/todo.interface';
import { FilterEnum } from '../types/filter.enum';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor() { }

  todos$ = new BehaviorSubject<TodoInterface[]>([]);
  filter$ = new BehaviorSubject<FilterEnum>(FilterEnum.all)

  addTodo(value: string):void {
    const newTodo: TodoInterface = {
      text: value,
      isCompleted: false,
      id: Math.random().toString(16),
    }

    const updatedTodo = [...this.todos$.getValue(), newTodo];
    this.todos$.next(updatedTodo);
  }

  toggleAll(isCompleted: boolean): void {
    const updatedTodos = this.todos$.getValue().map(todo => {
      return {
        ...todo,
        isCompleted
      }
    })
    this.todos$.next(updatedTodos);
  }

  changeFilter(filterName: FilterEnum):void {
    this.filter$.next(filterName);
  }

  changeTodo(id: string, text: string): void {
    const updatedTodos = this.todos$.getValue().map(todo => {
      if(todo.id === id) {
        return {
          ...todo,
          text
        }
      }
      return todo;
    })
    this.todos$.next(updatedTodos);
  }

  removeTodo(id: string):void {
    const updatedTodos = this.todos$.getValue().filter((todo) => todo.id !== id);
    this.todos$.next(updatedTodos);
  }

  toggleTodo(id: string):void {
    const updatedTodos = this.todos$.getValue().map(todo => {
      if(todo.id === id) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        }
      }
      return todo;
    });
    this.todos$.next(updatedTodos);
  }
}
