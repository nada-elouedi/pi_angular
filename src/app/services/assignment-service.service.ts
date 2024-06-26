import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssignmentServiceService {

  constructor(private _httpClient: HttpClient) {
  }

  getList(): Observable<any> {
    return this._httpClient.get("localhost:3000/assignments")
  }
}
