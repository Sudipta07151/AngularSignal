import { Component, Input } from '@angular/core';
import { TodoListSignals } from 'src/signals/todolist';
import { Router } from '@angular/router';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  constructor(
    private todoListSignals: TodoListSignals,
    private router: Router
  ) {}
  @Input() todo: any;
  ngOnInit() {}
  handleComplete(val: any) {
    console.log(val);
    this.todoListSignals.markTodoAsComplete(val);
  }
  handleEdit(val: any) {
    console.log(val);
    this.router.navigate(['AddTodo'], { state: { data: val, type: 'EDIT' } });
  }
}
