import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NewTaskDataType } from '../task/task.model';
import { TaskService } from '../tasks.service';
@Component({
  selector: 'app-new-task',
  standalone: false,
  // imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>();

  private tasksService = inject(TaskService); // Injecting the TaskService

  enteredTitle: string = '';
  enteredSummary: string = '';
  enteredDate: string = '';

  onCancel() {
    this.close.emit();
  }
  onSubmit() {
    this.tasksService.addTask(
      {
        id: new Date().getTime().toString(),
        title: this.enteredTitle,
        summary: this.enteredSummary,
        date: this.enteredDate,
      },
      this.userId
    );
    this.close.emit();
  }
}
