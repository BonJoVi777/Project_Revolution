import { Component, OnInit } from '@angular/core';
import { TaskElementDetail } from 'src/app/shared/task-detail.model';
import { CoreService } from 'src/app/shared/core.service';
import { ToastrService } from 'ngx-toastr';
import { NumberValueAccessor } from '@angular/forms';


@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

  selectedDate : Date = null;
  selectedCategory : number = null;
   
  constructor(public service : CoreService, private  toastr : ToastrService) {
      
   }

  ngOnInit(): void {
  }
  makeTaskDone(task : TaskElementDetail){
      task.isDone = true;
      task.completedDate = new Date();
      console.log(task);
      this.service.putTask(task).subscribe(
        res => {  
          this.service.refreshTaskList();
          this.toastr.info("Task was completed ", "Task Register");},
          
        err => {
          console.log(err);
        }
      );
  }

 

  refreshTaskList(){
    
    this.service.refreshTaskCategoryList(this.selectedCategory);
  }


  renewForm(task : TaskElementDetail){
    
    this.service.taskData = task;
  
    console.log(this.service.taskData);
  }



}
