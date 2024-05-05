import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { PublicationService } from '../services/publication.service';
import { LatestPublicationService } from '../services/latest-publication.service';

@Component({
  selector: 'app-publication-add',
  templateUrl: './publication-add.component.html',
  styleUrls: ['./publication-add.component.scss']
})
export class PublicationAddComponent {
  constructor(
    private router: Router,
    private publicationService: PublicationService,
    private latestPublicationService: LatestPublicationService
  ) { } 

  onSubmit(): void {
    const title = (document.getElementById('title') as HTMLInputElement).value;
    const description = (document.getElementById('description') as HTMLInputElement).value;
    const category = (document.getElementById('category') as HTMLSelectElement).value;

    if (!title || !description || !category) {
      alert('All fields are required');
      return;
    }

    const publication = {
      title: title,
      description: description,
      pubCategory: category,
      // Set user UUID and classroom UUID to their respective strings
      user: { uuid: '5fd5fd-fdfd5f-fdqfdfqd5' },
      classroom: { uuid: '6161dfd-fdfqf-5dqf-fdqfq5' }
    };

    this.publicationService.addPublication(publication)
      .subscribe(
        (response) => {
          console.log('Publication added successfully:', response);
          
          this.latestPublicationService.setLatestPublication(publication);
          this.router.navigate(['/publication-pending']); 
        },
        (error) => {
          console.error('Error adding publication:', error);
          
        }
      );
  }
}
