import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddClassroomService {
  private baseUrl = 'http://localhost:8085/classrooms/add'; // Remplacez ceci par l'URL de votre API Spring
  constructor(private http: HttpClient) {}

  addClassroom(classroomData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/classrooms`, classroomData);
  }
}
