import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {

  constructor(private _httpClient: HttpClient) { }

  getCourse(){
    return this._httpClient.get("http://localhost:3000/api/courses")
  }

  addCourse(courseData: any) {
    return this._httpClient.post("http://localhost:3000/api/courses", courseData);
  }
}
