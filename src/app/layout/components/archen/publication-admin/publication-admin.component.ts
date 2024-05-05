import { Component, OnInit } from '@angular/core';
import { PublicationService } from '../../../../services/publication.service';

@Component({
  selector: 'app-publication-admin',
  templateUrl: './publication-admin.component.html',
  styleUrls: ['./publication-admin.component.scss']
})
export class PublicationAdminComponent implements OnInit {
  publications: any[] = [];

  constructor(private publicationService: PublicationService) { }

  ngOnInit(): void {
    this.fetchAllPublications();
  }

  fetchAllPublications(): void {
    // Call the service method to fetch all publications
    this.publicationService.getPublicationsSortedByDate().subscribe(
      (data: any[]) => {
        this.publications = data;
      },
      (error) => {
        console.error('Error fetching publications:', error);
        // Handle error
      }
    );
}


  deletePublication(uuid: string): void {
    // Call the service method to delete the publication
    this.publicationService.deletePublication(uuid).subscribe(
      () => {
        // Remove the publication from the list
        this.publications = this.publications.filter(pub => pub.uuid !== uuid);
      },
      (error) => {
        console.error('Error deleting publication:', error);
        // Handle error
      }
    );
  }

  verifyPublication(uuid: string): void {
    // Call the service method to verify the publication
    this.publicationService.verifyPublication(uuid).subscribe(
      () => {
        // Update the verified status of the publication
        const publicationToUpdate = this.publications.find(pub => pub.uuid === uuid);
        if (publicationToUpdate) {
          publicationToUpdate.verified = true;
        }
      },
      (error) => {
        console.error('Error verifying publication:', error);
        // Handle error
      }
    );
  }
}
