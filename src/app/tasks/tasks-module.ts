import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing-module';
import { Tasks } from './tasks';
import { List } from './list/list';


@NgModule({
  declarations: [
    Tasks,
    List
  ],
  imports: [
    CommonModule,
    TasksRoutingModule
  ]
})
export class TasksModule { }
