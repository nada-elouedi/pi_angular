import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReclamationServiceService } from '../../../../services/reclamation-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reclamation-info',
  templateUrl: './reclamation-info.component.html',
  styleUrls: ['./reclamation-info.component.scss']
})
export class ReclamationInfoComponent implements OnInit {

  reclamation: any;

  constructor(private route: ActivatedRoute, private reclamationService: ReclamationServiceService,private router: Router) { }


  
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

  navigateToEditPage(): void {
    // Navigate to the edit page with reclamation UUID as parameter
    if (this.reclamation && this.reclamation.uuid) {
      this.router.navigate(['/reclamation/edit', this.reclamation.uuid]);
    }
  }
}