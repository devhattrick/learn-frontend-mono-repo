import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export type Todo = {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
};

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private http = inject(HttpClient);
  private url = `http://localhost:3000/todos`;

  getTodos() {
    return this.http.get<Todo[]>(this.url);
  }
}
