import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResponseServiceService {

  private baseUrl = 'http://localhost:3000/responses';

  constructor(private http: HttpClient) { }

  createResponse(reclamationUuid: string, response: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/${reclamationUuid}/createResponse`, response);
  }

  getResponseByReclamationId(reclamationUuid: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${reclamationUuid}`);
  }

  updateResponse(reclamationUuid: string, response: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${reclamationUuid}/updateResponse`, response);
  }

  deleteResponse(reclamationUuid: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${reclamationUuid}/deleteResponse`);
  }
}
