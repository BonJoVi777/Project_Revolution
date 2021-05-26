import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CoreService } from '../shared/core.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  myForm : NgForm;
 
  constructor(public service : CoreService,private  toastr : ToastrService) { 
   
  }

  ngOnInit(): void {
    
    this.service.refreshTaskList();
    this.service.refreshCategoryList();
  }
  


}
