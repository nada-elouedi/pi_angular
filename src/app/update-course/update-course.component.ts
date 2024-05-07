import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseServiceService } from '../services/course-service.service';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.scss']
})
export class UpdateCourseComponent implements OnInit {
  courseId!: string;
  course: any = {}; // Initialize empty course object, replace 'any' with actual type

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private courseService: CourseServiceService // Assuming you have a service for course operations
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = params['id']; // Assuming you're passing course ID in the URL
      this.getCourse(this.courseId);
    });
  }

  getCourse(id: string) {
    this.courseService.getCourse(id).subscribe(res => {
      this.course = res;
    });
  }

  updateCourse() {
    this.courseService.updateCourse(this.courseId, this.course).subscribe(res => {
      this.router.navigate(['/']); // Navigate back to home or wherever you want
    });
  }
}

