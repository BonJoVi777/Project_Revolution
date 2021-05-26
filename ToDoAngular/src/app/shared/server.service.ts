import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TaskElementDetail } from './task-detail.model';
import { TaskCategory } from './task-category';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  
  readonly rootUrl = 'http://localhost:50687/api';
  readonly rootTask = '/TaskElementDetails/';
  readonly rootCategories = '/TaskCategories/';

  constructor(private http : HttpClient) { }

  /*  CRUD - TASKS */

  postTask(taskDetailData: TaskElementDetail){
      return this.http.post(this.rootUrl + this.rootTask, taskDetailData);
  }

  putTask(taskDetailData : TaskElementDetail){
    console.log(taskDetailData);
    return this.http.put(this.rootUrl + this.rootTask + taskDetailData.taskId, taskDetailData);
  }

  
  deleteTask(taskId : number){
    return this.http.delete(this.rootUrl + this.rootTask + taskId);
  }

  getTasks(){
    return this.http.get<TaskElementDetail[]>(this.rootUrl + this.rootTask);
  }

  /*  CRUD - CATEGORIES */

  deleteCategory(categoryId : number){
    return this.http.delete(this.rootUrl + this.rootCategories + categoryId);
  }

  postCategory(categoryData : TaskCategory){
    return this.http.post(this.rootUrl + this.rootCategories, categoryData);
  }
  
  getCategories(){
    return this.http.get<TaskCategory[]>(this.rootUrl + this.rootCategories);
  }


}
