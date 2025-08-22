import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsListComponent } from './projects-list/projects-list';
import { ProjectsRoutingModule } from './projects-routing-module';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from '../core/header/header';

@NgModule({
  declarations: [
    ProjectsListComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    HttpClientModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class ProjectsModule { }

