import { Injectable, signal } from '@angular/core';
import { Todo } from 'src/models/Todo';

@Injectable({
  providedIn: 'root',
})
export class TodoListSignals {
  constructor() {}
  todoListSignal = signal<Todo[]>([]);
  getTodoListData() {
    console.log(this.todoListSignal());
    this.todoListSignal();
  }

  setTodoListData(value: Todo) {
    const newTodo: Todo = {
      id: value.id,
      timeCreated: new Date(),
      endTime: value.endTime,
      endDate: value.endDate,
      data: value.data,
      status: true,
    };
    this.todoListSignal.set([...this.todoListSignal(), newTodo]);
  }
}
