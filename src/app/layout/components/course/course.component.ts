import { Component, OnInit } from '@angular/core';
import { CourseServiceService } from 'src/app/services/course-service.service';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  courses : any;
  constructor(private servicecourse:CourseServiceService ){}
  getCourse(){
    this.servicecourse.getCourse().subscribe((courses) => {
      console.log(courses)
    })
  }
  

  ngOnInit(){
    this.servicecourse.getCourse().subscribe(data=>{
      console.log(data);
      this.courses=data;
      this.getCourse();
    })
  }


}
