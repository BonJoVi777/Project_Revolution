import { Component, OnInit } from '@angular/core';
import { CoreService } from '../shared/core.service';
import { TaskDetailComponent } from '../tasks/task-detail/task-detail.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  

  constructor(public service : CoreService, private  toastr : ToastrService) {
    
   }

  ngOnInit(): void {
    this.service.refreshHistoryList();
    console.log(this.service.historyList);
   // this.service.refreshSuccessfulCompletingList();
  }

  onDelete(taskId : number){
    this.service.deleteTask(taskId).subscribe(res =>{
      this.toastr.warning('Successfully deleted', 'Task Register');
      this.service.refreshHistoryList();
  
    },err =>{
      console.log(err);
    });
  }
}
