  import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
  import { Observable } from 'rxjs';


  @Injectable({
    providedIn: 'root'
  })
  export class ReclamationServiceService {

    private baseUrl = 'http://localhost:3000/reclamations';

    constructor(private http: HttpClient) { }

    getAllReclamations(): Observable<any[]> {
      return this.http.get<any[]>(`${this.baseUrl}`);
    }

    getReclamationById(id: string): Observable<any> {
      return this.http.get<any>(`${this.baseUrl}/${id}`);
    }

    createReclamation(reclamation: any, userUUID: string): Observable<any> {
      return this.http.post<any>(`${this.baseUrl}/createReclamation?userUUID=${userUUID}`, reclamation);
    }

    updateReclamation(id: string, reclamation: any): Observable<any> {
      return this.http.put<any>(`${this.baseUrl}/updateReclamation/${id}`, reclamation);
    }

    deleteReclamation(id: string): Observable<void> {
      return this.http.delete<void>(`${this.baseUrl}/deleteReclamation/${id}`);
    }

    searchReclamationsByTitle(keyword: string): Observable<any[]> {
      return this.http.get<any[]>(`${this.baseUrl}/searchByTitle?keyword=${keyword}`);
    }

    getReclamationsSortedByDate(ascending: boolean): Observable<any[]> {
      return this.http.get<any[]>(`${this.baseUrl}/sortByDate?ascending=${ascending}`);
    }

    getReclamationsPage(page: number, size: number): Observable<any> {
      return this.http.get<any>(`${this.baseUrl}/page?page=${page}&size=${size}`);
    }

    getReclamationsByUserUUID(userUUID: string): Observable<any[]> {
      return this.http.get<any[]>(`${this.baseUrl}/user/${userUUID}`);
    }
    
    searchReclamationsByTitleAndUuid(userUUID: string, keyword: string): Observable<any[]> {
      return this.http.get<any[]>(`${this.baseUrl}/searchByTitleAndUuid?userUUID=${userUUID}&keyword=${keyword}`);
    }

    getReclamationsSortedByDateForUser(userUUID: string, ascending: boolean): Observable<any[]> {
      return this.http.get<any[]>(`${this.baseUrl}/sortByDateForUser?userUUID=${userUUID}&ascending=${ascending}`);
    }
    
    getReclamationDetails(reclamationUuid: string): Observable<any> {
      return this.http.get<any>(`${this.baseUrl}/${reclamationUuid}`);
    }
  
    getRecentReclamations(count: number): Observable<any[]> {
      return this.http.get<any[]>(`${this.baseUrl}/recent?count=${count}`);
    }
    

  }
