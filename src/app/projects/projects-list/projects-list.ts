import { Component, OnInit } from '@angular/core';
import { ProjectsService, Project } from '../projects';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.html',
  styleUrls: ['./projects-list.css'],
  standalone: false
})
export class ProjectsListComponent implements OnInit {

  projects: Project[] = [];
  loading = true;
  error = '';

  constructor(private projectService: ProjectsService) { }

  ngOnInit(): void {
    this.projectService.getProjects().subscribe({
      next: (data) => {
        this.projects = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Error al cargar los proyectos';
        this.loading = false;
      }
    });
  }

}
