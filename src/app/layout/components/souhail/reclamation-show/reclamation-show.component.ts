import { Component, OnInit } from '@angular/core';
import { ReclamationServiceService } from '../../../../services/reclamation-service.service';

@Component({
  selector: 'app-reclamation-show',
  templateUrl: './reclamation-show.component.html',
  styleUrls: ['./reclamation-show.component.scss']
})
export class ReclamationShowComponent implements OnInit {

  reclamations: any[] = [];
  userUUID: string = '1122'; // BAADEL L UUID ILI THEB ALIIH 
  searchKeyword: string = '';
  sortByDateAscending: boolean = true; // Set to true by default
  currentPage: number = 0; // Track current page number
  pageSize: number = 2; // Set the page size


  

  constructor(private reclamationService: ReclamationServiceService) { }

  ngOnInit(): void {
    this.getReclamationsByUserUUID(this.userUUID)
    ;
  }

  getRecentReclamations(count: number): void {
    this.reclamationService.getRecentReclamations(count).subscribe(
      (recentReclamations: any[]) => {
        console.log('Recent reclamations:', recentReclamations); // Log the response data
        this.reclamations = recentReclamations;
      },
      error => {
        console.error('Error fetching recent reclamations:', error);
      }
    );
  }


  getReclamationsByUserUUID(userUUID: string): void {
    this.reclamationService.getReclamationsByUserUUID(userUUID).subscribe(
      (reclamations: any[]) => {
        console.log('Reclamations:', reclamations); // Log the response data
        this.reclamations = reclamations;
      },
      error => {
        console.error('Error fetching reclamations:', error);
      }
    );
  }

  searchReclamationsByTitleAndUuid(): void {
    if (this.searchKeyword.trim() !== '') {
      this.reclamationService.searchReclamationsByTitleAndUuid(this.userUUID, this.searchKeyword).subscribe(
        (reclamations: any[]) => {
          console.log('Search results:', reclamations); // Log the response data
          this.reclamations = reclamations;
        },
        error => {
          console.error('Error searching reclamations:', error);
        }
      );
    } else {
      // If the search keyword is empty, reset the displayed reclamations
      this.getReclamationsByUserUUID(this.userUUID);
    }
  }

  sortReclamationsByDateForUser(): void {
    this.reclamationService.getReclamationsSortedByDateForUser(this.userUUID, true).subscribe(
      (reclamations: any[]) => {
        console.log('Sorted reclamations:', reclamations); // Log the response data
        this.reclamations = reclamations;
      },
      error => {
        console.error('Error sorting reclamations by date:', error);
      }
    );
  }





}
