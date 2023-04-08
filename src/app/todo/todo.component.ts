import { Component, Input, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TodoListSignals } from 'src/signals/todolist';
import { Todo } from 'src/models/Todo';
import { FormServicesService } from '../utils/form-services.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  @Input() formControlInputs: any;
  todoForm: any;

  constructor(
    private fb: FormBuilder,
    private todoListSignals: TodoListSignals,
    private formService: FormServicesService
  ) {}
  ngOnInit() {
    console.log(this.todoForm.controls);
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    console.log(this.formControlInputs);
    this.todoForm = this.formService.createForm(this.formControlInputs);
  }
  handleFormSubmit(e: any) {
    e.preventDefault();
    if (this.todoForm.status == 'VALID') {
      console.log(this.todoForm.value);
      const todoData: Todo = {
        id: '',
        data: this.todoForm.value.data ? this.todoForm.value.data : '',
        endTime: this.todoForm.value.endTime ? this.todoForm.value.endTime : '',
        endDate: this.todoForm.value.endDate
          ? new Date(this.todoForm.value.endDate)
          : new Date(),
        status: this.todoForm.value.status ? this.todoForm.value.status : true,
        timeCreated: this.todoForm.value.timeCreated
          ? new Date(this.todoForm.value.timeCreated)
          : new Date(),
      };
      this.todoListSignals.setTodoListData(todoData);
      console.log(this.todoListSignals.getTodoListData());
    } else console.log('Form is still invalid');
  }
}
