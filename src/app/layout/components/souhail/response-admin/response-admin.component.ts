import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResponseServiceService } from '../../../../services/response-service.service';
import { ReclamationServiceService } from '../../../../services/reclamation-service.service';

@Component({
  selector: 'app-response-admin',
  templateUrl: './response-admin.component.html',
  styleUrls: ['./response-admin.component.scss']
})
export class ResponseAdminComponent implements OnInit {

  reclamationUuid: string = '';
  reclamation: any = {}; // Object to store reclamation details
  responseContent: string = ''; // Initialize response content

  constructor(private route: ActivatedRoute, private responseService: ResponseServiceService, private reclamationService: ReclamationServiceService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const reclamationUuid = params.get('uuid');
      if (reclamationUuid) {
        this.fetchReclamationInfo(reclamationUuid);
      }
    });
  }

  fetchReclamationInfo(reclamationUuid: string): void {
    this.reclamationService.getReclamationById(reclamationUuid).subscribe(
      (reclamation: any) => {
        this.reclamation = reclamation;
      },
      (error) => {
        console.error('Error fetching reclamation info:', error);
      }
    );
  }

  submitResponse(): void {
    // Check if the response field is empty
    if (!this.responseContent) {
      alert('Please fill in the response field.');
      return; // Prevent form submission
    }

    // If the response field is filled, continue with form submission
    this.responseService.createResponse(this.reclamationUuid, { content: this.responseContent }).subscribe(
      response => {
        // Handle success
        console.log('Response added successfully!', response);
        // Optionally, you can reset the response field after submission
        this.responseContent = '';
      },
      error => {
        // Handle error
        console.error('Error adding response:', error);
      }
    );
  }
}
