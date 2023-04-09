import { Component, Input, SimpleChanges } from '@angular/core';
import { TodoListSignals } from 'src/signals/todolist';
import { Todo } from 'src/models/Todo';
import { FormServicesService } from '../utils/form-services.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-create-todo',
  templateUrl: './createtodo.component.html',
  styleUrls: ['./createtodo.component.scss'],
})
export class CreateTodoComponent {
  update = false;
  todoFormInputs: any = [
    {
      formControlName: 'id',
      value: Math.floor(new Date().getTime() / 1000).toString(),
      required: true,
    },
    {
      formControlName: 'timeCreated',
      value: new Date(),
      required: true,
    },
    {
      formControlName: 'endTime',
      value: new Date().getTime,
      required: true,
    },
    {
      formControlName: 'endDate',
      value: new Date(),
      required: true,
    },
    {
      formControlName: 'data',
      value: '',
      required: true,
    },
    {
      formControlName: 'status',
      value: true,
      required: true,
    },
  ];
  todoForm: any;
  routerDataPassed: any;

  constructor(
    private todoListSignals: TodoListSignals,
    private formService: FormServicesService,
    private router: Router,
    private location: Location
  ) {}
  ngOnInit() {
    this.todoForm = this.formService.createForm(this.todoFormInputs);
    this.routerDataPassed = this.location.getState();
    if (this.routerDataPassed.type == 'EDIT') {
      this.update = true;
      const todo = this.todoListSignals
        .getTodoListData()
        .find((todo) => todo.id == this.routerDataPassed.data);
      if (todo) {
        this.todoFormInputs.find(
          (input: any) => input.formControlName == 'data'
        ).value = todo.data;
      }
      this.todoForm = this.formService.createForm(this.todoFormInputs);
    }
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }
  handleFormSubmit(e: any) {
    e.preventDefault();
    if (this.routerDataPassed.type != 'EDIT') {
      if (this.todoForm.status == 'VALID') {
        console.log(this.todoForm.value);
        const todoData: Todo = {
          id: Math.floor(new Date().getTime()).toString(),
          data: this.todoForm.value.data ? this.todoForm.value.data : '',
          endTime: this.todoForm.value.endTime
            ? this.todoForm.value.endTime
            : '',
          endDate: this.todoForm.value.endDate
            ? new Date(this.todoForm.value.endDate)
            : new Date(),
          status: this.todoForm.value.status
            ? this.todoForm.value.status
            : true,
          timeCreated: this.todoForm.value.timeCreated
            ? new Date(this.todoForm.value.timeCreated)
            : new Date(),
        };
        this.todoListSignals.setTodoListData(todoData);
        console.log(this.todoListSignals.getTodoListData());
        this.router.navigate(['/']);
      } else console.log('Form is still invalid');
    } else {
      if (this.routerDataPassed) {
        if (this.routerDataPassed.type == 'EDIT') {
          console.log('edit');
          if (this.todoForm.status == 'VALID') {
            this.todoListSignals.editTodo(
              this.routerDataPassed.data,
              this.todoForm.value.data
            );
            console.log(this.todoListSignals.getTodoListData());
            this.router.navigate(['/']);
          }
        }
      }
    }
  }
}
