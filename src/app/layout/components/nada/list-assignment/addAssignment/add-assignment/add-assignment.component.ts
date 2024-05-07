import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AssignmentServiceService } from 'src/app/services/Assignment/assignment-service.service';


@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.scss']
})
export class AddAssignmentComponent implements OnInit {
  assignmentData: any = {
    title: '',
    start_date: '',
    end_date: '',
    link: '',
    description: '',
    type: '',
    status: 'Up_Coming'
  };
  currentDate: Date = new Date();
  errorMessage: string = '';



  constructor(private assignmentService: AssignmentServiceService, private router: Router) { }

  ngOnInit(): void {

  }

  createAssignment() {
    // Réinitialiser le message d'erreur
    this.errorMessage = '';

    // Vérifier si les champs obligatoires sont renseignés
    if (!this.assignmentData.title || !this.assignmentData.start_date || !this.assignmentData.end_date || !this.assignmentData.type) {
      this.errorMessage = 'Please fill in all required fields';
      return;
    }

    // Vérifier si la date de début est dans le passé
    if (new Date(this.assignmentData.start_date) < this.currentDate) {
      this.errorMessage = 'Start date cannot be in the past';
      return;
    }

    // Vérifier si la date de fin est postérieure à la date de début
    if (new Date(this.assignmentData.end_date) <= new Date(this.assignmentData.start_date)) {
      this.errorMessage = 'End date must be greater than start date';
      return;
    }

    // Appel du service pour créer l'assignment
    this.assignmentService.createAssignment(this.assignmentData).subscribe(
      (createdAssignment) => {
        console.log('Assignment created successfully:', createdAssignment);
        // Réinitialiser les données d'assignation après la création
        this.assignmentData = {
          title: '',
          start_date: '',
          end_date: '',
          link: '',
          description: '',
          type: '',
          status: 'Up_Coming'
        };
        this.router.navigate(['/assignment']);
      },
      (error) => {
        console.error('Error creating assignment:', error);
      }
    );
  }

}