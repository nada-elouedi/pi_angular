import { Component, OnInit } from '@angular/core';
import { AssignmentServiceService } from 'src/app/services/assignment-service.service';

@Component({
  selector: 'app-list-assignment',
  templateUrl: './list-assignment.component.html',
  styleUrls: ['./list-assignment.component.scss']
})
export class ListAssignmentComponent implements OnInit {
  searchAssignments() {
    throw new Error('Method not implemented.');
  }

  data: any;
  end: any
  searchTitle: string = '';
  constructor(private service: AssignmentServiceService) {

  }
  ngOnInit(): void {
    this.getData()
  }
  getData() {
    this.service.getList().subscribe((res) => {
      console.log(res)
      this.data = res;
    })
  }
  sortByEndDate(order: string) {
    this.service.getAllAssignmentsOrderedByEndDate(order).subscribe(
      (assignments) => {
        console.log(assignments);
        this.data = assignments; // Update assignments list with sorted data

        // Update the assignments list in your component with the sorted data
      },
      (error) => {
        console.error('Error sorting assignments by end date:', error);
      }
    );
  }


  deleteAssignment(uuid: number) {
    this.service.deleteAssignment(uuid).subscribe(
      () => {
        console.log(`Assignment with ID ${uuid} deleted successfully.`);

        // Remove the deleted assignment from the data array
        this.data = this.data.filter((assignment: any) => assignment.uuid !== uuid);
      },
      (error) => {
        console.error(`Error deleting assignment with ID ${uuid}:`, error);
      }
    );
  }


  search() {
    if (this.searchTitle.trim() !== '') {
      this.service.searchAssignments(this.searchTitle).subscribe(
        (response: any[]) => { // Explicitly typing response as any[]
          console.log('Search results:', response);
          this.data = response;
        },
        (error: any) => { // Explicitly typing error as any
          console.error('Error searching assignments:', error);
        }
      );
    } else {
      // If search title is empty, get all assignments
      this.getData();
    }
  }


}
