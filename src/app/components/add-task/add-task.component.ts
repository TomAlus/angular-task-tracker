import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
