import { TaskElementDetail } from './task-detail.model';
export class TaskCategory{
    categoryId : number;
    categoryName : string;
    taskElementDetails ?: TaskElementDetail[]
}
