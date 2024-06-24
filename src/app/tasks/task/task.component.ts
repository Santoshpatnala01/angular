import { Component, EventEmitter, Input, inject } from '@angular/core';

import { type Task } from './task.model';
import { every } from 'rxjs';
import { TasksService } from '../tasks.service';

@Component({
    selector: 'app-task',
    standalone: false,
    templateUrl: './task.component.html',
    styleUrl: './task.component.css',
})
export class TaskComponent {
 @Input({required:true}) task!: Task;
 private taskService = inject(TasksService);

 onCompleteTask() {
  this.taskService.removeTask(this.task.id);
 }
}