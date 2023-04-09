import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TodoListSignals } from 'src/signals/todolist';
import { effect } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  todoList: any;
  completed: any;
  pending: any;
  constructor(
    private router: Router,
    private todoListSignals: TodoListSignals
  ) {}

  ngOnInit() {
    this.todoList = this.todoListSignals.getTodoListData();
    this.mapListStatusWise(this.todoList);
  }
  hello = effect(() => {
    console.log('effect running');
    this.todoList = this.todoListSignals.getTodoListData();
    this.mapListStatusWise(this.todoList);
  });
  mapListStatusWise(todoList: any) {
    console.log(todoList);
    this.completed = todoList.filter((todo: any) => todo.status == false);
    this.pending = todoList.filter((todo: any) => todo.status == true);
    console.log('Completed', this.completed);
    console.log('Pending', this.pending);
  }
  handleClickAddTodo() {
    console.log('handleClickAddTodo clicked');
    this.router.navigate(['/AddTodo']);
  }
}
