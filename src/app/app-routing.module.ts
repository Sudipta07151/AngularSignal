import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodolistComponent } from './todolist/todolist.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateTodoComponent } from './todo/createtodo.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'AddTodo', component: CreateTodoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
