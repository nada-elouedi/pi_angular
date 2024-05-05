import { Component, OnInit } from '@angular/core';
import { PublicationService } from '../../../../services/publication.service';

@Component({
  selector: 'app-publications-list',
  templateUrl: './publications-list.component.html',
  styleUrls: ['./publications-list.component.scss']
})
export class PublicationsListComponent implements OnInit {
  publications: any[] = [];
  filteredPublications: any[] = []; // Newly added
  searchKeyword: string = '';
  errorMessage: string | null = null;

  constructor(private publicationService: PublicationService) { }

  ngOnInit(): void {
    this.fetchApprovedPublications();
  }

  fetchApprovedPublications(): void {
    console.log('Fetching approved publications...');
    this.publicationService.getVerifiedPublications()
      .subscribe(
        (data: any[]) => {
          console.log('Publications data:', data);
          this.publications = data;
          this.filteredPublications = data; // Initialize filteredPublications with all publications
          this.errorMessage = null;
        },
        (error) => {
          console.error('Error fetching publications:', error);
          this.errorMessage = 'An error occurred while fetching publications. Please try again later.';
        }
      );
  }

  searchPublications(): void {
    console.log('Search button clicked');
    if (this.searchKeyword.trim() === '') {
      // If the search keyword is empty, show all publications
      this.filteredPublications = this.publications;
    } else {
      // Otherwise, filter publications by title locally
      this.filteredPublications = this.publications.filter(publication =>
        publication.title.toLowerCase().includes(this.searchKeyword.toLowerCase())
      );
    }
  }

  resetSearch(): void {
    this.searchKeyword = ''; // Clear the search keyword
    this.filteredPublications = this.publications; // Reset filteredPublications to show all publications
  }
  findMostRecentPublication(): any {
    if (this.filteredPublications.length > 0) {
      // Sort the publications by date in descending order
      const sortedPublications = this.filteredPublications.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      // Return the most recent publication
      return sortedPublications[0];
    }
    return null; // Return null if there are no publications
  }
  
  filterPublicationsByCategory(category: string): void {
    this.filteredPublications = this.publications.filter(publication =>
      publication.pubCategory.toLowerCase() === category.toLowerCase()
    );
  }
}
