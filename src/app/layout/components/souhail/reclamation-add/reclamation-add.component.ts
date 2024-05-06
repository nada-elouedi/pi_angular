import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReclamationServiceService } from '../../../../services/reclamation-service.service';

@Component({
  selector: 'app-reclamation-add',
  templateUrl: './reclamation-add.component.html',
  styleUrls: ['./reclamation-add.component.scss']
})
export class ReclamationAddComponent {

  formValue: any = {}; // Object to store form data
  userUUID: string = '1122'; // Replace 'userUUID' with actual user UUID

  constructor(
    private reclamationService: ReclamationServiceService,
    private router: Router
  ) { }

  submitForm() {
    // Check if any required field is empty
    if (!this.formValue.title || !this.formValue.content || !this.formValue.date) {
      alert('Please fill in all required fields.');
      return; // Prevent form submission
    }

    // If all required fields are filled, continue with form submission
    this.reclamationService.createReclamation(this.formValue, this.userUUID).subscribe(
      response => {
        // Handle success
        console.log('Reclamation added successfully!', response);
        // Navigate to reclamation-show page after successful creation
        this.router.navigate(['/reclamation-show']);
      },
      error => {
        // Handle error
        console.error('Error adding reclamation:', error);
      }
    );
  }
}
