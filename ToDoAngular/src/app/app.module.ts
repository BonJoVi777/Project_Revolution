import { NgModule }      from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from "@angular/common/http"
import { HttpClient } from "@angular/common/http"
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';

import { AppComponent }   from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { TasksListComponent } from './tasks/tasks-list/tasks-list.component';
import { TaskDetailComponent } from './tasks/task-detail/task-detail.component';
import { CoreService } from './shared/core.service';
import { ServerService } from './shared/server.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { CategoriesComponent } from './categories/categories.component';
import { HistoryComponent } from './history/history.component';

const appRoutes: Routes =[

  
  { path: 'tasks', component: TasksComponent},
  { path: 'categories', component: CategoriesComponent},
  { path: 'history', component: HistoryComponent},
  { path: '**', redirectTo: 'tasks' }

];

@NgModule({
  imports: [ BrowserModule, FormsModule, HttpClientModule, BrowserAnimationsModule, ToastrModule.forRoot(), RouterModule.forRoot(appRoutes) ], //< added FormsModule here
  declarations: [ AppComponent, TasksComponent, TasksListComponent, TaskDetailComponent, CategoriesComponent, NotFoundComponent, CategoriesComponent, HistoryComponent,  ],
  providers: [CoreService, ServerService], 
  bootstrap: [ AppComponent ]
})



export class AppModule { }
 