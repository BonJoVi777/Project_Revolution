import { TaskCategory } from './task-category';
import { Time } from '@angular/common';
import { NumberValueAccessor } from '@angular/forms';

export class TaskElementDetail {
    taskCategory ?: TaskCategory;
    taskId ?: number; 
    taskName ?: string; 
    deadline ?: Date;
    completedDate ?: Date;
    isDone : boolean;
    taskCategoryId ?: number
    
}
