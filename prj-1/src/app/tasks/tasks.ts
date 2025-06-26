import { Component, Input } from '@angular/core';
import { Task } from './task/task';
import { NewTask } from './new-task/new-task';
import { TaskService } from './tasks.service';
import { NewTaskDataType } from './task/task.model';

@Component({
  selector: 'app-tasks',
  standalone:false,
  // imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask: boolean = false;
  // private tasksService: TaskService;  // short-hand notation for the service below inside the constructor

  // You tell Angular which type of value you need and Angular creates it and provides it as an Argument.
  constructor( private tasksService: TaskService) {
    this.tasksService = tasksService;
  }

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddingTask() {
    this.isAddingTask = false;
  }
}
