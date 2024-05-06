import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import Router for navigation
import { ReclamationServiceService } from '../../../../services/reclamation-service.service';

@Component({
  selector: 'app-reclamation-admin',
  templateUrl: './reclamation-admin.component.html',
  styleUrls: ['./reclamation-admin.component.scss']
})
export class ReclamationAdminComponent implements OnInit {

  reclamations: any[] = [];

  constructor(private router: Router,private reclamationService: ReclamationServiceService) { }

  ngOnInit(): void {
    this.getReclamations();
  }

  getReclamations(): void {
    this.reclamationService.getAllReclamations().subscribe(
      (reclamations: any[]) => {
        console.log('Reclamations:', reclamations); // Log the response data
        this.reclamations = reclamations;
      },
      error => {
        console.error('Error fetching reclamations:', error);
      }
    );
  }

  checkReclamation(reclamationId: string): void {
    this.router.navigate(['/response-show', reclamationId]); // Navigate to response-show page with reclamationId parameter
  }
}
