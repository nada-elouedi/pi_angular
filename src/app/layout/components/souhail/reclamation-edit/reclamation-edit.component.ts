import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReclamationServiceService } from '../../../../services/reclamation-service.service';

@Component({
  selector: 'app-reclamation-edit',
  templateUrl: './reclamation-edit.component.html',
  styleUrls: ['./reclamation-edit.component.scss']
})
export class ReclamationEditComponent implements OnInit {

  reclamation: any;

  constructor(
    private route: ActivatedRoute, 
    private reclamationService: ReclamationServiceService,
    private router: Router
  ) { }

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

  updateReclamation(): void {
    this.reclamationService.updateReclamation(this.reclamation.uuid, this.reclamation).subscribe(
      (updatedReclamation: any) => {
        console.log('Reclamation updated:', updatedReclamation);
        // Redirect to reclamation info page after successful update
        this.router.navigate(['/reclamation/info', this.reclamation.uuid]);
      },
      (error) => {
        console.error('Error updating reclamation:', error);
        // Handle error
      }
    );
  }
}
