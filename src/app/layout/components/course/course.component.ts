import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseServiceService } from 'src/app/services/course-service.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  newCourse: any = {};
  courses : any;
  @Input() course: any; 
  constructor(private router: Router,private servicecourse:CourseServiceService ){}
  getCourses(){
    this.servicecourse.getCourses().subscribe((courses) => {
      console.log(courses)
    })
  }
  
  ngOnInit(){
    this.servicecourse.getCourses().subscribe(data=>{
      console.log(data);
      this.courses=data;
      this.getCourses();
    })
  }

  addCourse() {
    this.servicecourse.addCourse(this.newCourse).subscribe(() => {
      console.log('Course added successfully');
      this.newCourse = {}; // Reset the form fields
      this.getCourses(); // Refresh the list of courses after adding
    });
  }
  navigateToUpdate() {
    this.router.navigate(['/update-course', this.course.id]); // Assuming you have the course ID
  }

}
