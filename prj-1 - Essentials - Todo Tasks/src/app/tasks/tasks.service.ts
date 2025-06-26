import { Injectable } from '@angular/core';
import { NewTaskDataType } from './task/task.model';

@Injectable({ providedIn: 'root' }) // This makes the service available with only one instance throughout the app without needing to import it in every component
export class TaskService {
  private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Task 1',
      summary: 'Description for Task 1',
      dueDate: '2023-10-01',
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Task 2',
      summary: 'Description for Task 2',
      dueDate: '2023-10-01',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Task 3',
      summary: 'Description for Task 3',
      dueDate: '2023-10-01',
    },
  ];

  constructor() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }
  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(taskData: NewTaskDataType, userId: string) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    });
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
