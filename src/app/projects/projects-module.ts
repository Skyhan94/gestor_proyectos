import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsListComponent } from './projects-list/projects-list';
import { ProjectsRoutingModule } from './projects-routing-module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ProjectsListComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    HttpClientModule
  ]
})
export class ProjectsModule { }

