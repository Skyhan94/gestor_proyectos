import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TasksService } from '../tasks';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.html',
  styleUrls: ['./tasks-list.css'],
  standalone: false
})
export class TasksListComponent implements OnInit {
  tasks: any[] = [];
  projectId!: number;

  constructor(
    private route: ActivatedRoute,
    private tasksService: TasksService
  ) {}

  ngOnInit(): void {
    this.projectId = +this.route.snapshot.paramMap.get('projectId')!;
    this.tasksService.getTasksByProject(this.projectId).subscribe(data => {
      this.tasks = data;
    });
  }
}
