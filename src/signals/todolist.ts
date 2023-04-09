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
    return this.todoListSignal();
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

  markTodoAsComplete(id: any) {
    this.todoListSignal.mutate((todolist) => {
      const todo = todolist.find((todo) => todo.id == id);
      if (todo) {
        todo.status = false;
        return [...todolist, todo];
      } else return todolist;
    });
  }
  editTodo(id: any, data: any) {
    this.todoListSignal.mutate((todolist) => {
      const todo = todolist.find((todo) => todo.id == id);
      if (todo) {
        todo.data = data;
        return [...todolist, todo];
      } else return todolist;
    });
  }
}
