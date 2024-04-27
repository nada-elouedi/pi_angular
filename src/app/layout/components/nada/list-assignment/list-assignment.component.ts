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
    this.service.sortedAssignment(order).subscribe(
      (enddate) => {
        console.log(enddate);
        this.end = enddate;
      },
      (error) => {
        console.error('Error sorting assignments by end date:', error);
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
