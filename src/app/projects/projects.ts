import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface Project {
  id: number;
  name: string;
  username: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private API_URL = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.API_URL).pipe(
      catchError((error) => {
        console.error('Error al obtener proyectos:', error);
        return throwError(() => new Error('No se pudieron cargar los proyectos.'));
      })
    );
  }
}

