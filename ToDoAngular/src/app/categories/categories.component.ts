import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { ServerService } from '../shared/server.service';
import { CoreService } from '../shared/core.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(public service : CoreService,private  toastr : ToastrService) { 
    
  }

  ngOnInit(): void {
    
    this.resetCategoryForm();
    this.service.refreshTaskList();
    this.service.refreshCategoryList();
    this.service.refreshHistoryList();
    this.service.refreshSuccessfulCompletingList();
  }

  resetCategoryForm(form ?: NgForm){
    if(form != null){
      form.resetForm();
    }
    this.service.categoryData = {
     
      categoryId : 0,
      categoryName : '',
     
    }

  }
  
  onSubmit(categoryForm : NgForm){
    this.service.postCategory(categoryForm.value).subscribe(
      res => {  
        this.resetCategoryForm(categoryForm);
        this.service.refreshTaskList();
        this.service.refreshCategoryList();
        this.service.refreshHistoryList();
        this.service.refreshSuccessfulCompletingList();
        this.toastr.success("Added successfully", "Categories Register");},
      err => {
        console.log(err);
      }
    );
  }

  onDelete(categoryId : number){
    console.log(categoryId);
    this.service.deleteCategory(categoryId).subscribe(
      res =>{
        this.service.refreshTaskList();
        this.service.refreshCategoryList();
        this.service.refreshHistoryList();
        this.service.refreshSuccessfulCompletingList();
        this.toastr.warning('Deleted Succesfully','Categories Register');
      },
      err => {
        console.log(err);
      }
    )
  }
}
