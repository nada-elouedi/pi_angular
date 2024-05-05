import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  private baseUrl = 'http://localhost:3030/publication';

  constructor(private http: HttpClient) { }

  getPublication(uuid: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/get?uuid=${uuid}`);
  }

  addPublication(publication: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/add`, publication);
  }

  modifyPublication(publication: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/modify`, publication);
  }

  deletePublication(uuid: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${uuid}`);
  }

  addComment(publicationUuid: string, comment: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/${publicationUuid}/comment/add`, comment);
  }

  addReplyToComment(parentCommentUuid: string, reply: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/comment/${parentCommentUuid}/reply/add`, reply);
  }

  deleteComment(commentUuid: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${commentUuid}/delete`);
  }

  verifyPublication(uuid: string): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${uuid}/verify`, null);
  }

  getVerifiedPublications(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/verified`);
  }

  getPublicationsByClassroom(classroomUuid: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/class/${classroomUuid}`);
  }

  searchPublicationsByKeyword(keyword: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/search/keyword`, { params: { keyword } });
  }
 
  searchPublicationsByUser(userName: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/search/user?userName=${userName}`);
  }

  getPublicationsSortedByLikeCount(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/sort/likecount`);
  }

  getPublicationsSortedByDate(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/sort/date`);
  }

  getPublicationsSortedByCategory(category: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/sort/category/${category}`);
  }
  getCommentsForPublication(publicationUuid: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${publicationUuid}/comments`);
  }
  getLikeCount(publicationUuid: string): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/likeCount/${publicationUuid}`);
  }
  likePublication(publicationUuid: string, userUuid: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/${publicationUuid}/like?userUuid=${userUuid}`, null);
}


  
}
