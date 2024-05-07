import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {

  constructor(private _httpClient: HttpClient) { }

  getCourses(){
    return this._httpClient.get("http://localhost:3000/api/courses")
  }
  getCourse(id: string) {
    return this._httpClient.get(`http://localhost:3000/api/courses/${id}`);
  }

  addCourse(courseData: any) {
    return this._httpClient.post("http://localhost:3000/api/courses", courseData);
  }
  updateCourse(id: string, courseData: any) {
    return this._httpClient.put(`http://localhost:3000/api/courses/${id}`, courseData);
  }
}
