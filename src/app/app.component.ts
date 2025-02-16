import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TodosModule } from './todos/todos.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TodosModule],
  templateUrl: './app.component.html',
})
export class AppComponent {

}
