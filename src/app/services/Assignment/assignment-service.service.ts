import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssignmentServiceService {
  searchTitle: string = ''; searchResults: any[] = []; constructor(private _httpClient: HttpClient) {

  }

  getList(): Observable<any> {
    return this._httpClient.get("http://localhost:3000/assignments/get_all")
  }
  // Method to get all assignments sorted by end date
  getAllAssignmentsOrderedByEndDate(order: string): Observable<any> {
    return this._httpClient.get(`http://localhost:3000/assignments/sorted-by-end-date?order=${order}`);
  }


  searchAssignments(searchTitle: string): Observable<any[]> {
    const searchTitleLowerCase = searchTitle.toLowerCase(); // Utiliser le paramètre searchTitle
    return this._httpClient.get<any[]>('http://localhost:3000/assignments/search?title=' + searchTitleLowerCase);
  }
  deleteAssignment(id: number): Observable<void> {
    return this._httpClient.delete<void>(`http://localhost:3000/assignments/delete/${id}`);
  }
  createAssignment(assignmentData: any): Observable<any> {
    return this._httpClient.post<any>('http://localhost:3000/assignments/create', assignmentData);
  }


}
