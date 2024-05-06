import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReclamationServiceService } from '../../../../services/reclamation-service.service';

@Component({
  selector: 'app-reclamation-check',
  templateUrl: './reclamation-check.component.html',
  styleUrls: ['./reclamation-check.component.scss']
})
export class ReclamationCheckComponent implements OnInit {

  reclamation: any;

  constructor(private route: ActivatedRoute, private router: Router, private reclamationService: ReclamationServiceService) { }

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

  replyToReclamation(): void {
    // Implement your logic for replying to the reclamation here
    // For example, you can navigate to a reply page
    // Assuming you have a reply page named 'reclamation-reply'
    this.router.navigate(['/response-admin']);
  }
}
