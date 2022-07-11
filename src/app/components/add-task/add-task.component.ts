import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Task } from '../../Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  @Output() onAddTask = new EventEmitter<Task>();

  // Two way data binding for form inputs
  text: string = '';
  day: string = '';
  reminder: boolean = false;
  showAddTask: boolean = false;
  subscription!: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }

  onSubmit() {
    // Check if task name is not empty
    if (!this.text) {
      alert('Please add a task!');
      return;
    }

    // Create new object based on form inputs
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    // Emit an event with the new task values
    this.onAddTask.emit(newTask);

    // Reset inputs
    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
