import { Component, Input, Output } from '@angular/core';
import { TodoInterface } from '../../types/todo.interface';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
})
export class TodoComponent {
  @Input('todo') todoProps: TodoInterface | null = null;
  @Input('isEditing') isEditingProps: boolean = false;
  @Output('setEditingId') setEditingIdEvent: EventEmitter<string | null> = new EventEmitter()

  setTodoInEditMode():void {
    this.setEditingIdEvent.emit(this.todoProps?.id);
  }
 }
