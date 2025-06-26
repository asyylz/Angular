import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { type TaskType } from './task.model';
import { Card,  } from '../../shared/card/card';
import { DatePipe } from '@angular/common';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone:false,
  // imports: [Card, DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css',
  // imports: [SharedModule]
})
export class Task {
  @Input({ required: true }) task!: TaskType;


  private tasksService = inject(TaskService);

  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }
}
