import { Injectable } from '@angular/core';
import { TaskElementDetail } from './task-detail.model';
import { HttpClient } from "@angular/common/http"
  import { ToastrService } from 'ngx-toastr';
import { TaskCategory } from './task-category';
import { ServerService } from './server.service';
import { ɵELEMENT_PROBE_PROVIDERS__POST_R3__ } from '@angular/platform-browser';


@Injectable({
  providedIn: 'root',
 })
 
 @Injectable()
export class CoreService {
  
  selectedCategory : number
  tasksList : TaskElementDetail[];
  historyList : TaskElementDetail[];
  categoryList : TaskCategory[];
  successfulCompletingList : number[];
  taskData: TaskElementDetail;
  categoryData: TaskCategory;
  
  
  constructor(private http : HttpClient, private  toastr : ToastrService, private serverService : ServerService) {
   }
   
  refreshTaskList() {
    this.serverService.getTasks().subscribe(tasks => {
      this.tasksList = tasks.filter(t =>
         t.isDone == false);
    });    
  }


  refreshTaskCategoryList(categoryId ?: number) {
    if(categoryId == 0){
      this.refreshTaskList();
      return;
    }
    this.serverService.getTasks().subscribe(tasks => {
      this.tasksList = tasks.filter(t =>
         t.taskCategoryId == categoryId).filter(t =>
           t.isDone == false);
    });  
     
  }

  refreshHistoryList() {
    this.serverService.getTasks().subscribe(tasks => {
      this.historyList = tasks;
    });    
  }

  refreshTaskDateList(myDeadline : Date){
    if(myDeadline){
      this.serverService.getTasks().subscribe(tasks =>{
         this.tasksList = tasks.filter(t =>
           t.deadline.toString().includes(myDeadline.toString()) ) });
    }
    else{
      this.refreshTaskList();
    }
  }

  refreshCategoryList() {
    this.serverService.getCategories().subscribe(categories => {
      this.categoryList = categories;
    }); 
  }

  refreshSuccessfulCompletingList() {
    this.serverService.getCategories().subscribe(categories => {
      this.successfulCompletingList = categories.map(category => 
        category.taskElementDetails.filter(task => 
          task.isDone).length);
    });  
  }
 

  postCategory(categoryData : TaskCategory){
    return this.serverService.postCategory(categoryData);
  }

  deleteCategory(categoryId : number){
    return this.serverService.deleteCategory(categoryId);
  }

  postTask(taskData : TaskElementDetail){
    return this.serverService.postTask(taskData);
  }

  deleteTask(taskId : number){
    return this.serverService.deleteTask(taskId);
  }

  putTask(taskData : TaskElementDetail){
    return this.serverService.putTask(taskData);
  }


}
