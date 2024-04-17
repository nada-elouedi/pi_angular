import { Component, OnInit } from '@angular/core';
import { AssignmentServiceService } from 'src/app/services/assignment-service.service';

@Component({
  selector: 'app-list-assignment',
  templateUrl: './list-assignment.component.html',
  styleUrls: ['./list-assignment.component.scss']
})
export class ListAssignmentComponent implements OnInit {

  data: any;
  constructor(private service: AssignmentServiceService) {

  }
  ngOnInit(): void {
    this.getData()
  }
  getData() {
    this.service.getList().subscribe((res) => {
      console.log(res)
    })
  }

}
