import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAssignmentComponent } from './layout/components/nada/list-assignment/list-assignment.component';
import { AddAssignmentComponent } from './layout/components/nada/list-assignment/addAssignment/add-assignment/add-assignment.component';

const routes: Routes = [
  {
    path: 'assignment',
    component: ListAssignmentComponent
  },
  {
    path: 'AddAssignement',
    component: AddAssignmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
