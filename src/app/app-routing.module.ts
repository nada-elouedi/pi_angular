import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAssignmentComponent } from './layout/components/nada/list-assignment/list-assignment.component';
import { AddAssignmentComponent } from './layout/components/nada/list-assignment/addAssignment/add-assignment/add-assignment.component';
import { DetailsAssignmentComponent } from './layout/components/nada/Details/details-assignment/details-assignment.component';

const routes: Routes = [
  {
    path: 'assignment',
    component: ListAssignmentComponent
  },
  {
    path: 'AddAssignement',
    component: AddAssignmentComponent
  },
  { path: 'assignment/:id', component: DetailsAssignmentComponent }, // Route pour afficher les détails de l'assignment

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
