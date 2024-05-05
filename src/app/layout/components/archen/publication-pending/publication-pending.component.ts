import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LatestPublicationService } from '../../../../services/latest-publication.service';

@Component({
  selector: 'app-publication-pending',
  templateUrl: './publication-pending.component.html',
  styleUrls: ['./publication-pending.component.scss']
})
export class PublicationPendingComponent implements OnInit {
  latestPublication: any;

  constructor(private router: Router, private latestPublicationService: LatestPublicationService) { }

  ngOnInit(): void {
   
    this.latestPublication = this.latestPublicationService.getLatestPublication();
  }

  goToPublicationList(): void {
    this.router.navigate(['/publication-list']); // Navigate to publication-list page
  }
}
