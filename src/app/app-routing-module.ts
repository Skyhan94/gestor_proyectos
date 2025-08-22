import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  { 
    path: 'projects',
    loadChildren: () => import('./projects/projects-module').then(m => m.ProjectsModule)
  },
  { 
    path: '',
    redirectTo: '/projects',
    pathMatch: 'full' 
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth-module').then(m => m.AuthModule)
  },
  {
    path: 'tasks',
    loadChildren: () => import('./tasks/tasks-module').then(m => m.TasksModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
