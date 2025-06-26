import { NgModule } from '@angular/core';
import { Tasks } from './tasks';
import { NewTask } from './new-task/new-task';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Task } from "./task/task";

@NgModule({
  declarations: [Tasks,Task, NewTask],
  exports: [Tasks],
  imports: [SharedModule, CommonModule, FormsModule]
})
export class TasksModule {}
