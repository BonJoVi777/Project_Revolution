import { Component, OnInit } from '@angular/core';
import { CoreService } from 'src/app/shared/core.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { TaskCategory } from 'src/app/shared/task-category';


@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  
  constructor(public service : CoreService,private  toastr : ToastrService) { 
   
  }

  ngOnInit(): void {
    this.resetTaskForm();
    this.service.refreshCategoryList();
    
  }

  resetTaskForm(form ?: NgForm){
    if(form != null){
      form.resetForm();
      console.log(form.value);
    }
    this.service.taskData = {

      taskId : 0,
      taskName : '',
      deadline : null,
      isDone : false,
      taskCategoryId : 0,
      taskCategory : {
        categoryName : '',
        categoryId : 0
      },
    }
  }

  onSubmit(taskForm : NgForm){
    console.log(taskForm.value);
    if(this.service.taskData.taskId == 0 || taskForm.value.taskId == null){
      taskForm.value.taskId = 0;
      this.insertRecord(taskForm);
    }
    else{
      this.updateRecord(taskForm);
    }
  }
  
  insertRecord(taskForm:NgForm){
    console.log('insert');
    this.service.postTask(taskForm.value).subscribe(
      res => {  
        this.resetTaskForm(taskForm);
        this.service.refreshTaskList();
        this.toastr.success("Added successfully", "Task Register");},
      err => {
        console.log(err);
      }
    );
   
  }

  updateRecord(taskForm:NgForm){
    console.log(taskForm.value);
    this.service.putTask(taskForm.value).subscribe(
      res => {  
        this.resetTaskForm(taskForm);
        this.service.refreshTaskList();
        this.toastr.info("Task was completed ", "Task Register");},
        
      err => {
        console.log(err);
      } );
  }


}
