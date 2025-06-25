import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {
  @Output() cancel = new EventEmitter<void>();

  onCancel() {
    this.cancel.emit();
  }
}
