import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MeetingComponent } from '../layout/components/saida/meeting/meeting.component';

@Injectable({
  providedIn: 'root'
})
export class AddmeetingService {

  constructor(private _httpClient: HttpClient) { }

  AddMeeting(meetingData: any): Observable<any>{
    return this._httpClient.post('http://localhost:8084/meetings/add', meetingData);
  }
  getMeetings(): Observable<MeetingComponent[]> {
    return this._httpClient.get<MeetingComponent[]>("http://localhost:8084/meetings");
  }
}