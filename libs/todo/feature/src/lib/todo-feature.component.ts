import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TodoService } from '@ats/todo-data-access';
import { map, shareReplay } from 'rxjs';

@Component({
  selector: 'lib-todo-feature',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './todo-feature.component.html',
  styleUrl: './todo-feature.component.scss',
})
export class TodoFeatureComponent {
  private todoService = inject(TodoService);

  readonly todos$ = this.todoService
    .getTodos()
    .pipe(shareReplay({ refCount: true, bufferSize: 1 }));

  readonly totalTodos$ = this.todos$.pipe(map((todos) => todos.length));
}
