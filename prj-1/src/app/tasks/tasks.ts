import { Component, Input } from '@angular/core';
import { Task } from './task/task';

@Component({
  selector: 'app-tasks',
  imports: [Task],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;

  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Task 1',
      summary: 'Description for Task 1',
      duedate: '2023-10-01',
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Task 2',
      summary: 'Description for Task 2',
      duedate: '2023-10-01',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Task 3',
      summary: 'Description for Task 3',
      duedate: '2023-10-01',
    },
  ];


  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }
}
