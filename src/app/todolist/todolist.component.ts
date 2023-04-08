import { Component } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent {
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
  constructor() {}
}
