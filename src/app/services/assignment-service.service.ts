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
    const searchTitleLowerCase = this.searchTitle.toLowerCase(); // Convert search term to lowercase

    return this._httpClient.get<any[]>('http://localhost:3000/assignments/search?title=' + searchTitle);
  }
  deleteAssignment(id: number): Observable<void> {
    return this._httpClient.delete<void>(`http://localhost:3000/assignments/delete/${id}`);
  }


}
