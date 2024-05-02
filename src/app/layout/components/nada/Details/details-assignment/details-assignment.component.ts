import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AssignmentServiceService } from 'src/app/services/Assignment/assignment-service.service';

@Component({
  selector: 'app-details-assignment',
  templateUrl: './details-assignment.component.html',
  styleUrls: ['./details-assignment.component.scss']
})
export class DetailsAssignmentComponent implements OnInit {
  assignment: any;

  constructor(
    private route: ActivatedRoute,
    private assignmentService: AssignmentServiceService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const assignmentId = +params['id']; // Récupérer l'ID de l'URL
      this.getAssignmentDetails(assignmentId); // Appeler la méthode pour récupérer les détails de l'assignment
    });
  }

  getAssignmentDetails(assignmentId: number) {
    this.assignmentService.getAssignmentById(assignmentId).subscribe(
      assignment => {
        this.assignment = assignment;
      },
      error => {
        console.error('Error fetching assignment details:', error);
      }
    );
  }

}
