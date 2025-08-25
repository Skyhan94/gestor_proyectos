import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) {}

  getTasksByProject(projectId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?userId=${projectId}`).pipe(
      catchError((error) => {
        console.error('Error al obtener las tareas:', error);
        return throwError(() => new Error('No se pudieron cargar las tareas.'));
      })
    );
  }
}