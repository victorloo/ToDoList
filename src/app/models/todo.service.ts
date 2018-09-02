import { Injectable } from '@angular/core';
import { Todo } from './../prototype/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoes: Todo[] = [
    {
      id: 1,
      content: 'Hit the gym',
      checked: false
    },
    {
      id: 2,
      content: "Pay bills",
      checked: true
    },
    {
      id: 3,
      content: "Meet George",
      checked: false
    },
    {
      id: 4,
      content: "Buy eggs",
      checked: false
    },
    {
      id: 5,
      content: "Read a book",
      checked: false
    },
    {
      id: 6,
      content: "Organize office",
      checked: false
    }
  ];

  constructor() { }

  getTodoes() {
    return this.todoes;
  }

  switchChecked(todo: Todo) {
    todo.checked = !todo.checked;
  }
}
